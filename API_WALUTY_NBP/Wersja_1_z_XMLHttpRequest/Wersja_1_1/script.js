const btnEuro = document.querySelector("#btnEuro");
const btnDollar = document.querySelector("#btnDollar");
const btnPound = document.querySelector("#btnPound");
const btnClear = document.querySelector("#btnClear");
const result = document.querySelector("#result");
const zl = document.querySelector("#zl");
let hiddenResult = true;

const convert = (code) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.response);
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
            result.innerHTML += `Kupno: ${pl} PLN =  ${(pl / rateBuy).toFixed(2)} ${code} <br>`;
            result.innerHTML += `Sprzedaż: ${pl} PLN =  ${(pl / rateSell).toFixed(2)} ${code}`;
        }
    })
    xhr.addEventListener("error", () => {
        result.innerHTML = `Pojawił się jakiś problem`;
    })
    xhr.open("GET", `https://api.nbp.pl/api/exchangerates/rates/C/${code}?format=json`, true);
    xhr.send();
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
    }
}
btnEuro.addEventListener("click", () => {
    show();
    convert("eur");
})
btnDollar.addEventListener("click", () => {
    show();
    convert("usd");
})
btnPound.addEventListener("click", () => {
    show();
    convert("gbp");
})
btnClear.addEventListener("click", hide);