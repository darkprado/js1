function whatNumber() {
    var i = 0;
    var res = [];
    do {
        if(i == 0) {
            res[i] = i + " - это ноль";
        } else if (0 == i % 2) {
            res[i] = i + " - четное число";
        } else {
            res[i] = i + " - нечетное число";
        }
        i++;
    } while (i <= 10);

    return res;
}