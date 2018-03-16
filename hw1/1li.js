function celsi() {
    var f = +prompt("Введите градусы по фаренгейту");
    var c = (f - 32) / 1.8;

    alert( Math.round(c * 100) / 100);
}