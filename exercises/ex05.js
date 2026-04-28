let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";
 
$("#needy-button").click(function () {
colorCount = count + 1;

   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
  
   console.log(colors[colorCount]);
   if (count==4) {
    count=0;
    console.log("it happened!!!!");
    }
    if (colors[colorCount]=="HotPink") {
    $("#needy-button").after("notpink");
    }
    else if(colors[colorCount]=="Orchid")
    {
        $("#needy-button").after("...hey Orchid");
    }
    else {
        $("needy-button").after("all the other colors");
    }
 count = count + 1;

 if(count<5) {mood="fresh and happy :D";}

 console.log(mood)
});
