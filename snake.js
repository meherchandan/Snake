var mainspeed = 0;
var maxLength = 0;
var maxwidth = 0;
var score=0;

$(document).ready(function () {
     var $le = 3800;
     var $wid = 50;
        maxLength = $le;
        maxwidth = $wid;
    $('.small').click(function () {
        $('body').css({"background-image":"url(Images/Image1.jpeg)"});
        mainspeed = 200;
        gameScore();
         $('#scoreBoard').css({"display":"inline-block"});
        createGrid($le, $wid);
         $('#maingrid').hide();

        $('#maingrid').addClass("active");
         $('#maingrid').slideDown();
         $('#scoreBoard').hide();
         $('#scoreBoard').fadeIn();



    });

    $('.medium').click(function () {

       $('body').css({"background-image":"url(Images/Image1.jpeg)"});
        mainspeed = 150;
        gameScore();
         $('#scoreBoard').css({"display":"inline-block"});
        createGrid($le, $wid);
         $('#maingrid').hide();

        $('#maingrid').addClass("active");
         $('#maingrid').slideDown();
         $('#scoreBoard').hide();
         $('#scoreBoard').fadeIn();
    });

    $('.Expert').click(function () {

        $('body').css({"background-image":"url(Images/Image1.jpeg)"});
        mainspeed = 100;
        gameScore();
         $('#scoreBoard').css({"display":"inline-block"});
        createGrid($le, $wid);
         $('#maingrid').hide();

        $('#maingrid').addClass("active");
         $('#maingrid').slideDown();
         $('#scoreBoard').hide();
         $('#scoreBoard').fadeIn();
    });
});

var snake = [];

var direction = "";
var gridsize = 0;
var speed = 200;
createGrid = function (length, width) {
    var i = 1000;
    var j = 0;
    speed=mainspeed;
    maxLength = length;
    maxwidth = width;
    $("#maingrid").empty();
    for (i = 1000; i < length;) {
        $('#maingrid').append("<div id='row' class='" + i + "'></div>");
        for (j = i + 1; j < i + width; j++) {

            $("." + i + "").append("<div class='grid " + j + "'></div>");

        }
        i = i + 100;
    }

    var snakeclass=length/2+width/2+500;

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
 $('.snakeHead').css({
          "border-top-left-radius": "5px",
    "border-bottom-left-radius": "5px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "10px"
        });
          $('.snakeTrail').css({
          "border-top-left-radius": "5px",
    "border-bottom-left-radius": "5px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "10px"
        });

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
    var foodnumber1=Math.floor((Math.random() * (maxLength-1100)) + 1001);
    var foodnumber2=Math.floor((Math.random() * (maxwidth-2)) + 1);
    var foodNumber = parseInt(foodnumber1/100)*100+parseInt(foodnumber2);
    $("."+foodNumber).addClass("food");
    console.log("food1"+foodnumber1);
    console.log("food2"+foodnumber2);
    console.log(foodNumber);

     $('.food').css({
          "border-top-left-radius": "10px",
    "border-bottom-left-radius": "10px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "10px"
        });

    return;
}




moveUp = function () {
    var check = true;
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
                GenerateFood();
                score=parseInt(score)+10;
                gameScore();
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

            } else {
                $("." + snake[0]).removeClass("snakeHead");
                $("." + snake[0]).addClass("snakeTrail");
                $("." + snake[snake.length - 1]).removeClass("snakeTrail");

                var temp = snake[0] - 100;
                if (temp < 1000) {
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
        $('.snakeHead').css({
          "border-top-left-radius": "10px",
    "border-bottom-left-radius": "5px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "5px"
        });
          $('.snakeTrail').css({
          "border-top-left-radius": "10px",
    "border-bottom-left-radius": "5px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "5px"

        });
            moveUp();
        }, speed


    );

};



moveDown = function () {
    var check = true;
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
                 score=parseInt(score)+10;
                gameScore();
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

        $('.snakeHead').css({
          "border-top-left-radius": "5px",
    "border-bottom-left-radius": "10px",
     "border-top-right-radius": "5px",
    "border-bottom-right-radius": "10px"
        });
          $('.snakeTrail').css({
          "border-top-left-radius": "5px",
    "border-bottom-left-radius": "10px",
     "border-top-right-radius": "5px",
    "border-bottom-right-radius": "10px"
        });
            moveDown();
        }, speed


    );

};


moveRight = function () {
    var check = true;
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
                 score=parseInt(score)+10;
                gameScore();
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
        $('.snakeHead').css({
          "border-top-left-radius": "5px",
    "border-bottom-left-radius": "5px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "10px"
        });
          $('.snakeTrail').css({
          "border-top-left-radius": "5px",
    "border-bottom-left-radius": "5px",
     "border-top-right-radius": "10px",
    "border-bottom-right-radius": "10px"
        });

            moveRight();
        }, speed


    );

};


moveLeft = function () {
    var check = true;
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
                 score=parseInt(score)+10;
                gameScore();
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
        $('.snakeHead').css({
          "border-top-left-radius": "10px",
    "border-bottom-left-radius": "10px",
     "border-top-right-radius": "5px",
    "border-bottom-right-radius": "5px"
        });
          $('.snakeTrail').css({
          "border-top-left-radius": "10px",
    "border-bottom-left-radius": "10px",
     "border-top-right-radius": "5px",
    "border-bottom-right-radius": "5px"
        });
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
    score=0;
    gameScore();
    snake.length = 3;

    createGrid(maxLength, maxwidth);

}

gameScore = function(){

var str = $( "p" ).text();
$( "p" ).html( str.substr(0,8)+score );

return;
}
