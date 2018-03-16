function piramide (end) {
    var res = "";
    for (var i = 1; i <= end; i++) {
        for(var j = 1; j <= i; j++) {
            res += "x";
        }
        console.log(res);
        res = "";
    }
}