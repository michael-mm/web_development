function hoistingTest(boo)

{
    var myNumber = 10;
    var myColor;
    if(boo){
     myNumber = 3;
     var myColor = "blue";
     alert("Value of myNumber in condition: ", myNumber, "<br />");
    }
    alert("Value of myNumber after condition: ", myNumber, "<br />");
}

hoistingTest(true);
//hoistingTest(false);
