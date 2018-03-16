function start() {
    var mainDiv = document.createElement('div');//div обертка
    document.body.appendChild(mainDiv);
    mainDiv.id = "main";
    var liters = [null, "A", "B", "C", "D", "E", "F" , "G", "H"];// массив для заполнения букв 0 элемент не нужен

    var squareColor;// переменная для определения цвета квадрата

    for(var i = 0; i <= 9; i++) {//цикл с линиями 0 и 9 для букв, 1-8 линии с квадратами

        var div = document.createElement('div');
        main.appendChild(div);//создаю div с div-ами в линию
        var idLine = "line" + i;// переменная с id линии
        div.id = idLine;//запись id для div первого цикла
        div.className = "both";//стиль для новой строки

        for(var j = 0; j <= 9; j++) {//цикл с кол-вом квадратов в линии, 0 и 9 столбы с буквами

            var line = document.getElementById(idLine);

            if(i > 0 && i < 9) {//отсекаю буквы

                if(j > 0 && j < 9) {//отсекаю цифры

                    squareColor = i + j;

                    if(squareColor % 2 == 0){//раскрашиваю квадраты
                        var divInLine = document.createElement('div');
                        line.appendChild(divInLine);
                        divInLine.className = "square even";
                        if (i == 7) {//белые четные пешки
                            divInLine.innerHTML = "&#9817;";
                        } else if (i == 2) {//черные четные пешки перевернутые
                            divInLine.innerHTML = "&#9823;";
                            divInLine.className = "square even revers";
                        }

                    } else {
                        var divInLine = document.createElement('div');
                        line.appendChild(divInLine);
                        divInLine.className = "square odd";
                        if (i == 7) {//белые нечетные пешки
                            divInLine.innerHTML = "&#9817;";
                        } else if (i == 2) {//черные нечетные пешки перевернутые
                            divInLine.innerHTML = "&#9823;";
                            divInLine.className = "square odd revers";
                        }
                    }
                } else if (j == 0) {//линия с цифрами
                    var divInLine = document.createElement('div');
                    line.appendChild(divInLine);
                    divInLine.className = "vertical";
                    divInLine.innerText = (9 - i);//цифры в обратном отсчете
                } else if (j == 9) {//линия с перевернутыми цифрами
                    var divInLine = document.createElement('div');
                    line.appendChild(divInLine);
                    divInLine.className = "vertical revers";
                    divInLine.innerText = (9 - i);
                }

            }else if (i == 9) {

                if(j == 9 || j == 0) {//угловые заглушки
                    var divInLine = document.createElement('div');
                    line.appendChild(divInLine);
                    divInLine.className = "gorizontalZero";
                } else {//линия с буквами
                    var divInLine = document.createElement('div');
                    line.appendChild(divInLine);
                    divInLine.className = "gorizontal";
                    divInLine.innerText = liters[j];
                }

            }else if (i == 0) {

                if(j == 9 || j == 0) {//угловые заглушки
                    var divInLine = document.createElement('div');
                    line.appendChild(divInLine);
                    divInLine.className = "gorizontalZero";
                } else {//линия с буквами
                    var divInLine = document.createElement('div');
                    line.appendChild(divInLine);
                    divInLine.className = "gorizontal revers";
                    divInLine.innerText = liters[j];//заполняю значениями из массива
                }

            }

            if((i == 1 && j == 1)||(i == 1 && j == 8)) {//перевернутая ладья
                divInLine.innerHTML = "&#9820;";
                divInLine.className += " revers";
            }
            if((i == 1 && j == 2)||(i == 1 && j == 7)) {//перевернутый конь
                divInLine.innerHTML = "&#9822;";
                divInLine.className += " revers";
            }
            if((i == 1 && j == 3)||(i == 1 && j == 6)) {//перевернутый слон
                divInLine.innerHTML = "&#9821;";
                divInLine.className += " revers";
            }
            if(i == 1 && j == 4) {//перевернутый король
                divInLine.innerHTML = "&#9818;";
                divInLine.className += " revers";
            }
            if(i == 1 && j == 5) {//перевернутый ферзь
                divInLine.innerHTML = "&#9819;";
                divInLine.className += " revers";
            }
            if((i == 8 && j == 1)||(i == 8 && j == 8)) {//ладья
                divInLine.innerHTML = "&#9814;";
            }
            if((i == 8 && j == 2)||(i == 8 && j == 7)) {//конь
                divInLine.innerHTML = "&#9816;";
            }
            if((i == 8 && j == 3)||(i == 8 && j == 6)) {//слон
                divInLine.innerHTML = "&#9815;";
            }
            if(i == 8 && j == 4) {//король
                divInLine.innerHTML = "&#9812;";
            }
            if(i == 8 && j == 5) {//ферзь
                divInLine.innerHTML = "&#9813;";
            }
        }

    }

}

//переписывал раз ннадцать)) возможно запутался с комментами