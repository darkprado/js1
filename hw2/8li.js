function power(val, pow) {
    if (val == 0) {
        return 0;
    } else {
        if (pow == 0) {
            return 1;
        } else if (pow == 1){
            return val;
        } else if (pow == -1) {
            return 1 / val;
        } else {
            if (pow > 1) {
                return val * power(val, pow - 1);
            } else {
                return 1 / (val * power(val, (pow * (-1)) - 1));
            }
        }
    }
}