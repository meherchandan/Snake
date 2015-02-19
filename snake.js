var mainspeed = 0;
var maxLength = 0;
var maxwidth = 0;

$(document).ready(function () {
     var $le = 4000;
     var $wid = 50;

    $('.small').click(function () {

        mainspeed = 200;
        maxLength = $le;
        maxwidth = $wid;
        createGrid($le, $wid);

    });

    $('.medium').click(function () {

        mainspeed = 180;
        maxLength = $le;
        maxwidth = $wid;
        createGrid($le, $wid);
    });

    $('.large').click(function () {

        mainspeed = 150;
        maxLength = $le;
        maxwidth = $wid;
        createGrid($le, $wid);
    });



});

var snake = [];

var direction = "";
var gridsize = 0;
var speed = 200;
createGrid = function (length, width) {
    var i = 1000;
    var j = 0;
    speed=200;
    maxLength = length;
    maxwidth - width;
    $("#maingrid").empty();
    for (i = 1000; i < length;) {
        $('#maingrid').append("<div id='row' class='" + i + "'></div>");
        for (j = i + 1; j < i + width; j++) {

            $("." + i + "").append("<div class='grid " + j + "'></div>");

        }
        i = i + 100;
    }

    var snakeclass=length/2+width/2+500;
    console.log("total"+snakeclass);
    gridsize = $(".grid").length;

    var len = $(".grid").length;
    len = parseInt(len / 2);
    GenerateFood();
    $("."+snakeclass).addClass("snakeHead");
     $("."+(snakeclass-1)).addClass("snakeTrail");
     $("."+(snakeclass-2)).addClass("snakeTrail");
    snake[0]=snakeclass;
    snake[1]=snakeclass-1;
    snake[2]=snakeclass-2;

    $("body").keypress(function (event) {
        if (event.keyCode === 38) { //Up arrow
            event.preventDefault();
            if(direction!="up"){
            direction = "up";
            moveUp();}
        } else if (event.keyCode === 40) { //Down arrow
            event.preventDefault();
              if(direction!= "down"){
            direction = "down";
            moveDown();}
        } else if (event.keyCode === 37) { //Left arrow
            event.preventDefault();
              if( direction!= "left"){
            direction = "left";
            moveLeft();}

        } else if (event.keyCode === 39) { //Right arrow
            event.preventDefault();
              if( direction!="right"){
            direction = "right";
            moveRight();}

        }
    });
}

GenerateFood = function () {

    var foodNumber = Math.floor((Math.random() * gridsize) + 1);
    $(".grid").eq(foodNumber).addClass("food");

    return;
}




moveUp = function () {
    var check = true;
    console.log(speed);
    setTimeout(function () {
            if (direction === "down") {
                alert("Game Over");
                clearAll();
                return;
            }
            if (!(direction === "up")) {

                return;
            }
            for(var i=1;i<snake.length;i++){
            if(snake[0]===snake[i]){
                 alert("Game Over");
                clearAll();
                return;
            }
            }
            if ($("." + snake[0]).hasClass("food")) {
                console.log("food is"+snake[0]);
                GenerateFood();
                if(speed>20)
                speed = speed - 10;
                $("." + snake[0]).removeClass("food");
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                var temp = snake[0] - 100;

                for (var i = snake.length-1; i >= 0; i--) {
                    snake[i + 1] = snake[i];

                }


                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");

                console.log("0 is "+snake[0]);
            } else {
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                $("." + snake[snake.length - 1]).removeClass("snakeTrail");

                var temp = snake[0] - 100;
                if (temp < 1000) {
                    alert("Game OVer");
                    clearAll();
                    return;
                }

                for (var i = snake.length - 1; i > 0; i--) {
                    snake[i] = snake[i - 1];

                }

                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            }
            moveUp();
        }, speed


    );

};



moveDown = function () {
    var check = true;
console.log(speed);
    setTimeout(function () {


            if (direction === "up") {
                alert("Game Over");
                clearAll();
                return;
            }
            if (!(direction === "down")) {

                return;
            }
         for(var i=1;i<snake.length;i++){
            if(snake[0]===snake[i]){
                 alert("Game Over");
                clearAll();
                return;
            }}
            if ($("." + snake[0]).hasClass("food")) {
                GenerateFood();
                if(speed>20)
                speed = speed - 10;
                $("." + snake[0]).removeClass("food");
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                var temp = parseInt(snake[0]) + 100;
                if (temp > maxLength) {
                    alert("Game Over");
                    clearAll();
                    return;
                }
                for (var i = snake.length-1; i >= 0; i--) {
                    snake[i + 1] = snake[i];

                }
                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            } else {
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                $("." + snake[snake.length - 1]).removeClass("snakeTrail");
                var temp = parseInt(snake[0]) + 100;
                if (temp > maxLength) {
                    alert("Game Over");
                    clearAll();
                    return;
                }

                for (var i = snake.length - 1; i > 0; i--) {
                    snake[i] = snake[i - 1];

                }

                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            }

            moveDown();
        }, speed


    );

};


moveRight = function () {
    var check = true;
console.log(speed);
    setTimeout(function () {


            if (direction === "left") {
                alert("Game Over");
                clearAll();
                return;
            }
            if (!(direction === "right")) {

                return;
            }
         for(var i=1;i<snake.length;i++){
            if(snake[0]===snake[i]){
                 alert("Game Over");
                clearAll();
                return;
            }}
            var chkLength = $(".snakeHead").attr("class").substr(7, 2);

            if (parseInt(chkLength) > 48) {
                alert("Game Over");
                clearAll();
                return;
            }
            if ($("." + snake[0]).hasClass("food")) {
                GenerateFood();
                if(speed>20)
                speed = speed - 10;
                $("." + snake[0]).removeClass("food");
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                var temp = parseInt(snake[0]) + 1;
                for (var i = snake.length-1; i >= 0; i--) {
                    snake[i + 1] = snake[i];

                }
                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            } else {
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                $("." + snake[snake.length - 1]).removeClass("snakeTrail");
                var temp = parseInt(snake[0]) + 1;
                for (var i = snake.length - 1; i > 0; i--) {
                    snake[i] = snake[i - 1];

                }

                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            }
            moveRight();
        }, speed


    );

};


moveLeft = function () {
    var check = true;
console.log(speed);
    setTimeout(function () {


            if (direction === "right") {
                alert("Game Over");
                clearAll();
                return;
            }
            if (!(direction === "left")) {

                return;
            }
         for(var i=1;i<snake.length;i++){
            if(snake[0]===snake[i]){
                 alert("Game Over");
                clearAll();
                return;
            }}
            var chkLength = $(".snakeHead").attr("class").substr(7, 2);

            if (parseInt(chkLength) < 2) {
                alert("Game Over");
                clearAll();
                return;
            }
            if ($("." + snake[0]).hasClass("food")) {

                GenerateFood();
                if(speed>20)
                speed = speed - 10;
                $("." + snake[0]).removeClass("food");
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                var temp = parseInt(snake[0]) - 1;
                for (var i = snake.length-1; i >= 0; i--) {
                    snake[i + 1] = snake[i];

                }
                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            } else {
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                $("." + snake[snake.length - 1]).removeClass("snakeTrail");
                var temp = parseInt(snake[0]) - 1;
                for (var i = snake.length - 1; i > 0; i--) {
                    snake[i] = snake[i - 1];

                }

                snake[0] = temp;
                $("." + snake[0]).addClass("snakeHead");
            }
            moveLeft();
        }, speed


    );

};




clearAll = function () {

    $(".grid").removeClass("snakeHead");
    $(".grid").removeClass("snakeTrail");
    var len = $(".grid").length;
    len = parseInt(len / 2);
    direction = "";
    snake.length = 3;

    createGrid(maxLength, maxwidth);
    //    $(".grid").eq(len).addClass("snakeHead");
    //    $(".grid").eq(len - 1).addClass("snakeTrail");
    //    $(".grid").eq(len - 2).addClass("snakeTrail");
    //    snake[0] = $(".grid").eq(len).attr("class").substr(5, 4);
    //    snake[1] = $(".grid").eq(len - 1).attr("class").substr(5, 4);
    //    snake[2] = $(".grid").eq(len - 2).attr("class").substr(5, 4);
}
