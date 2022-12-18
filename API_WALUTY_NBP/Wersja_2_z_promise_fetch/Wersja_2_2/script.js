const options = document.querySelector("#options");
const btnCalc = document.querySelector("#btnCalc");
const btnClear = document.querySelector("#btnClear");
const result = document.querySelector("#result");
const zl = document.querySelector("#zl");
let hiddenResult = true;

const showOptions = () => {
    fetch("https://api.nbp.pl/api/exchangerates/tables/c?format=json")
        .then(response => response.json())
        .then(response => {
            let rates = response[0].rates;
            // console.log(rates);
            rates.forEach(element => {
                let code = element.code;
                let currency = element.currency;
                options.innerHTML += `<option value="${code}">${currency}</option>`
            })
        })
        .catch(error => {
            result.innerHTML = `Pojawił się jakiś problem.<br> ${error} `;
        })

}
//--------------------------------------------------
const convert = (code) => {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/C/${code}?format=json`)
        .then(response => response.json())
        .then(response => {
            let rateBuy = response.rates[0].bid;
            let rateSell = response.rates[0].ask;
            let currency = response.currency;
            let pl = parseFloat(zl.value);
            if (isNaN(pl)) {
                result.innerHTML = "Wpisz poprawną wartość"
            }
            else {
                if (pl < 0) {
                    pl = -pl;
                    zl.value = pl;
                }
                result.innerHTML = `${currency.toUpperCase()} <br><br>`;
                result.innerHTML += `Obecny kurs kupna ${rateBuy}, sprzedaży ${rateSell}   <br>`;
                result.innerHTML += `Kupno: ${pl} PLN =  ${(pl / rateBuy).toFixed(2)} ${code.toUpperCase()} <br>`;
                result.innerHTML += `Sprzedaż: ${pl} PLN =  ${(pl / rateSell).toFixed(2)} ${code.toUpperCase()}`;
            }
        })
        .catch(error => {
            result.innerHTML = `Pojawił się jakiś problem.<br> ${error} `;
        })

}
const show = () => {
    if (hiddenResult) {
        result.style.display = "block";
        btnClear.style.display = "inline";
        hiddenResult = false;
    }
}
//ukrycie bloku z wynikami
const hide = () => {
    if (!hiddenResult) {
        result.style.display = "none";
        btnClear.style.display = "none";
        hiddenResult = true;
        result.innerHTML = "";
        options.value = options[0].value;//ustawienie opcji poczatkowej (pustej) opcji w select
    }
}

btnClear.addEventListener("click", hide);

//ta funkcja działa przy dwóch zdarzeniach
const start = () => {
    show();
    if (options.value != options[0].value) {
        convert(options.value);
    }
    else {
        result.innerHTML = "Wybierz walutę";
    }
}
//naciśnięcie Entera w inpucie uruchamia obliczenia
zl.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        start();
    }
})
btnCalc.addEventListener("click", start);
//po załadowaniu strony mają załadować się opcje w select
document.addEventListener('DOMContentLoaded', showOptions);

//zmiana opcji uruchamia obliczenia
options.addEventListener("change", function () {
    if (this.value != this[0].value) {
        show();
        convert(this.value);
        zl.focus()
    }
    else {
        hide();
    }
})




