function test() {
    const element = document.createElement('div');

    element.innerHTML = "Todo test";

    return element;
}

document.body.appendChild(test());