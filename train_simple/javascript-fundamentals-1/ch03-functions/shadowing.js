var myNumber = 3;
alert("Before the function: " + myNumber);

function callMe()
{
  var myNumber = 10;
  alert("inside of the function: " + myNumber);
}

callMe();
alert("After the function: " + myNumber);
