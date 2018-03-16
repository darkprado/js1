function mathOperation(arg1, arg2, operation) {

    if ((!isNaN(arg1)) && (!isNaN(arg2))) {
        switch (operation) {
            case "+":
                return arg1 + arg2;
            case "-":
                return arg1 - arg2;
            case "*":
                return arg1 * arg2;
            case "/":
                if (arg2 == 0) {
                    return "На 0 делить нельзя!";
                } else {
                    return arg1 / arg2;
                }
            default:
                return "Неизвесный оператор!";
        }
    } else {
        return "Введены не все числа!";
    }
}