let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";
 
$("#needy-button").click(function () {


   count = count + 1;
  
   console.log(colors[colorCounter]);
   if (colorCounter >=4) {
    colorCounter=0;
    console.log("it happened!!!!");
    }

$("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCounter] );
   $("body").css("background-color", colors[colorCounter]);

    if (colors[colorCounter]=="HotPink") {
    $("#needy-button").after("notpink");
    }
    else if(colors[colorCounter]=="Orchid")
    {
        $("#needy-button").after("...hey Orchid");
    }

    else if(colors[colorCounter]!="HotPink"||colors[colorCounter]!="Orchid"){
        $("needy-button").after("all the other colors");
    }
 
colorCounter = colorCounter + 1;
 if(count<5) {mood="fresh and happy :D";}

 console.log(mood)
});
