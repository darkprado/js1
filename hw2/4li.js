function printNum () {
    var a = parseInt(prompt("Введите число"));
    var res = "";
    if ((a >= 0) && (a < 16)) {
        switch (a) {
            case 0:
                res += a++ + " ";
            case 1:
                res += a++ + " ";
            case 2:
                res += a++ + " ";
            case 3:
                res += a++ + " ";
            case 4:
                res += a++ + " ";
            case 5:
                res += a++ + " ";
            case 6:
                res += a++ + " ";
            case 7:
                res += a++ + " ";
            case 8:
                res += a++ + " ";
            case 9:
                res += a++ + " ";
            case 10:
                res += a++ + " ";
            case 11:
                res += a++ + " ";
            case 12:
                res += a++ + " ";
            case 13:
                res += a++ + " ";
            case 14:
                res += a++ + " ";
            case 15:
                res += a++ + " ";
        }
    }
    alert(res);
}