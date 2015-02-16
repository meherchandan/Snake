
$(document).ready(function(){
$('.small').click(function(){
    var $le=5100;
    var $wid=50;
createGrid($le,$wid);
});

    $('.medium').click(function(){
    var $le=7100;
    var $wid=70;
createGrid($le,$wid);
});

    $('.large').click(function(){
    var $le=9100;
    var $wid=100;
createGrid($le,$wid);
});




});

var snake=[];
var maxLength=0;
var direction="";
createGrid = function(length,width){
    var i=1000;
var j=0;
    maxLength=length;
    $("#maingrid").empty();
 for( i=1000;i<length;)
    {
        $('#maingrid').append("<div id='row' class='"+i+"'></div>");
        for(j=i+1;j<i+width;j++)
        {

        $("."+i+"").append("<div class='grid "+j+"'></div>");

        }
i=i+100;
    }
    var len=$(".grid").length;
    len=parseInt(len/2);

   $(".grid").eq(len).addClass("snakeHead");
    $(".grid").eq(len-1).addClass("snakeTrail");
    $(".grid").eq(len-2).addClass("snakeTrail");
    snake[0]=$(".grid").eq(len).attr("class").substr(5,4);
    snake[1]=$(".grid").eq(len-1).attr("class").substr(5,4);
    snake[2]=$(".grid").eq(len-2).attr("class").substr(5,4);

 //$("body").keypress(function(){
     $( "body" ).keypress(function( event ) {
         if ( event.keyCode === 38 ) {//Up arrow
         event.preventDefault();
             direction="up";
             moveUp();
}
else if ( event.keyCode === 40 ) {//Down arrow
   event.preventDefault();
    direction="down";
    moveDown();
}


     else   if ( event.keyCode === 37 ) {//Left arrow
            event.preventDefault();
         direction="left";
         moveLeft();

}
       else if ( event.keyCode === 39 ) {//Right arrow
              event.preventDefault();
           direction="right";
            moveRight();

}

    else
    { }
    });
}






moveUp= function(){
var check=true;

     setTimeout(function() {


         if(direction==="down"){
           alert("Game Over");
             clearAll();
             return;
         }
         if(!(direction==="up")){

             return;
         }
       $("."+snake[0]).removeClass("snakeHead");
         $("."+snake[0]).addClass("snakeTrail");
         $("."+snake[2]).removeClass("snakeTrail");
       var temp=snake[0]-100;
         if(temp<1000){
             alert("Game OVer");
             clearAll();
             return;
         }


       snake[2]= snake[1];
         snake[1]=snake[0];

          snake[0]=temp;
         $("."+snake[0]).addClass("snakeHead");

       moveUp();
       },200


    );

};



moveDown= function(){
var check=true;

     setTimeout(function() {


         if(direction==="up"){
           alert("Game Over");
             clearAll();
             return;
         }
         if(!(direction==="down")){

             return;
         }
       $("."+snake[0]).removeClass("snakeHead");
         $("."+snake[0]).addClass("snakeTrail");
         $("."+snake[2]).removeClass("snakeTrail");
       var temp=parseInt(snake[0])+100;
       if(temp>maxLength){
           alert("Game Over");
             clearAll();
             return;
         }



       snake[2]= snake[1];
         snake[1]=snake[0];

          snake[0]=temp;
          console.log(snake[0]);
         console.log(snake[1]);
         console.log(snake[2]);
         $("."+snake[0]).addClass("snakeHead");

           moveDown();
       },200


    );

};


moveRight= function(){
var check=true;

     setTimeout(function() {


         if(direction==="left"){
           alert("Game Over");
             clearAll();
             return;
         }
          if(!(direction==="right")){

             return;
         }
       $("."+snake[0]).removeClass("snakeHead");
         $("."+snake[0]).addClass("snakeTrail");
         $("."+snake[2]).removeClass("snakeTrail");
       var temp=parseInt(snake[0])+1;
//       if(temp>maxLength){
//           alert("Game Over");
//             clearAll();
//             return;
//         }


       snake[2]= snake[1];
         snake[1]=snake[0];

          snake[0]=temp;
          console.log(snake[0]);
         console.log(snake[1]);
         console.log(snake[2]);
        $("."+snake[0]).addClass("snakeHead");
           moveRight();
       },200


    );

};


moveLeft= function(){
var check=true;

     setTimeout(function() {


         if(direction==="right"){
           alert("Game Over");
             clearAll();
             return;
         }
          if(!(direction==="left")){

             return;
         }
       $("."+snake[0]).removeClass("snakeHead");
         $("."+snake[0]).addClass("snakeTrail");
         $("."+snake[2]).removeClass("snakeTrail");
       var temp=parseInt(snake[0])-1;
//       if(temp>maxLength){
//           alert("Game Over");
//             clearAll();
//             return;
//         }


       snake[2]= snake[1];
         snake[1]=snake[0];

          snake[0]=temp;
          console.log(snake[0]);
         console.log(snake[1]);
         console.log(snake[2]);
        $("."+snake[0]).addClass("snakeHead");
           moveLeft();
       },200


    );

};




clearAll=function(){

 $(".grid").removeClass("snakeHead");
    $(".grid").removeClass("snakeTrail");
     var len=$(".grid").length;
    len=parseInt(len/2);
    direction="";
   $(".grid").eq(len).addClass("snakeHead");
    $(".grid").eq(len-1).addClass("snakeTrail");
    $(".grid").eq(len-2).addClass("snakeTrail");
     snake[0]=$(".grid").eq(len).attr("class").substr(5,4);
    snake[1]=$(".grid").eq(len-1).attr("class").substr(5,4);
    snake[2]=$(".grid").eq(len-2).attr("class").substr(5,4);
}

