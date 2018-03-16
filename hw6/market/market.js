function init() {



    var mainDiv = document.createElement('div');//div обертка
    document.body.appendChild(mainDiv);
    mainDiv.id = "main";

    var header = document.createElement('header');
    header.className = "header";
    main.appendChild(header);

    var section = document.createElement('section');
    section.id = "content";
    main.appendChild(section);

    var header_text = document.createElement('div');
    header_text.className = "header_text";
    var basket = document.createElement('div');
    basket.id = "basket";
    header.appendChild(header_text);
    header.appendChild(basket);
    header_text.innerText = "Интернет магазин";
    basket.innerHTML = "Количество товаров: " + count +  "<br> На сумму: " + resMoney + " рублей";


    for(var i = 0; i < arrayProduct.length; i++) {
        var productDiv = document.createElement('div');
        productDiv.className = "product";
        productDiv.innerHTML = "<img src=\"" + arrayProduct[i].imgSrc + "\"><p>" + arrayProduct[i].productName +
            "</p><p>Цена: " + arrayProduct[i].price + "</p><button id=\"button" + i + "\">Добавить в корзину</button>";
        content.appendChild(productDiv);
    }

    var arrClick = document.getElementsByTagName("button");
    for(var i = 0; i < arrClick.length; i++) {
        arrClick[i].onclick = addPrice;
    }
}

window.onload = init;
var resMoney = 0;
var resStr = "Товары в корзине:\n";
var count = 0;

function addPrice (eventObj) {
    var target = eventObj.target;
    var numButton = target.id;
    for(var i = 0; i < arrayProduct.length; i++) {
        if(numButton === arrayProduct[i].button) {
            count++;
            resStr += arrayProduct[i].productName + " - " + arrayProduct[i].price + " рублей\n";
            resMoney += arrayProduct[i].price;
            var str = document.getElementById("basket");
            str.innerHTML = innerHTML = "<a href='#' onclick='alert(resStr)'>" +
                "Количество товаров: " + count +  "</a><br> На сумму: " + resMoney + " рублей";
        }
    }
}

var arrayProduct = [];
arrayProduct [0] = {
    productName: "Холодильник",
    imgSrc: "img/holod.png",
    price: 25000,
    button: "button0"
};
arrayProduct [1] = {
    productName: "Телевизор",
    imgSrc: "img/tele.png",
    price: 15000,
    button: "button1"
};
arrayProduct [2] = {
    productName: "Микроволновая печь",
    imgSrc: "img/micro.png",
    price: 3500,
    button: "button2"
};
arrayProduct [3] = {
    productName: "Навигатор",
    imgSrc: "img/navi.png",
    price: 2500,
    button: "button3"
};
arrayProduct [4] = {
    productName: "Телефон",
    imgSrc: "img/phone.png",
    price: 12000,
    button: "button4"
};
arrayProduct [5] = {
    productName: "Ноутбук",
    imgSrc: "img/note.png",
    price: 35000,
    button: "button5"
};