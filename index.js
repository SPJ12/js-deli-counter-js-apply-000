
function takeANumber(){
  var customerNo = 1;
  var message = "Order number:" + customerNo;
  customerNo++;
  return message;
}
console.log(takeANumber());
console.log(takeANumber());
console.log(takeANumber());

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length ===0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  }
}


function currentLine(katzDeliLine)
{
  if(katzDeliLine.length ===0)
  {
    return "The line is currently empty.";
  }
  else
  {
    var tempString = "The line is currently: ";
    for (var i=0; i<katzDeliLine.length; i++)
    {
      tempString = tempString + (i+1) + ". "+katzDeliLine[i] +", ";
    }
    var guestNames = tempString.substring(0,tempString.length-2);
    return guestNames;
  }
}

