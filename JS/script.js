let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let EUR = 4.69;
    let USD = 4.37;
    let GBP = 5.31;

    let currency = currencyElement.value;
    let amount = amountElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "GBP":
            result = amount / GBP;
            break;
    };

    resultElement.value = `${amountElement.value} PLN = ${result.toFixed(
        2
    )} ${currency}`;

});

formElement.addEventListener("reset", () => {
}) 