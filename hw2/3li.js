function calc() {
    var a = parseInt(prompt("Введите первое число"));
    var b = parseInt(prompt("Введите второе число"));

    if ((!isNaN(a)) && (!isNaN(b))) {
        switch (true) {
            case ((a >= 0) && (b >= 0)):
                return a - b;
            case ((a < 0) && (b < 0)):
                return a * b;
            default:
                return a + b;
        }
    } else {
        return "Введены не все числа!";
    }
}



