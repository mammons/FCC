function checkCashRegister(price, cash, cid) {
    var change=[];
      var changeDue = cash - price;
      var currentBalance = 0;
      var highestDenomination = "";
      var hDindex = -1;
      var money = {
    	  "PENNY": .01,
    	  "NICKEL": .05,
    	  "DIME": .1,
    	  "QUARTER": .25,
    	  "ONE": 1,
    	  "FIVE": 5,
    	  "TEN": 10,
    	  "TWENTY": 20,
    	  "ONE HUNDRED": 100
      };
  
  //find the upper bound index needed to return change
  for(var key in money){
      if(money[key] > changeDue){
          //console.log("key: " + key + " value: " + money[key]);
          highestDenomination = key;
          //console.log("Highest denomination: " + highestDenomination);
          break;
      }
      highestDenomination = "ONE HUNDRED";
  }
  
  //find the highestDenomination index in the cid array
  for(var i = 0; i < cid.length; i++){
      if(cid[i][0] == highestDenomination){
          i--;
          hDindex = i;
          highestDenomination = cid[i][0];
          console.log("hDindex: " + hDindex + " highestDenomination: " + highestDenomination + " is worth " + money[highestDenomination]);
          break;
      }
  }
  
  console.log("change due: " + changeDue);
  dispenseChange(hDindex);
  
  //dispense change from the highest appropriate denomination until the value of it exceeds the value that is due to the customer
  function dispenseChange(currentDrawerIndex){
      console.log("current drawer value: " + cid[currentDrawerIndex][1]);
      if(cid[currentDrawerIndex][1] > 0){
          console.log("value is greater than 0");
          while(cid[currentDrawerIndex][1] > 0 && changeDue >= money[highestDenomination]){
              console.log("there's enough change so we're going to add it");
              cid[currentDrawerIndex][1] -= money[highestDenomination].toFixed(2);
              cid[currentDrawerIndex][1] = cid[currentDrawerIndex][1].toFixed(2);
              console.log("new drawer value: " + cid[currentDrawerIndex][1]);
              changeDue -= money[highestDenomination];
              changeDue = changeDue.toFixed(2);
              console.log("new change due: " + changeDue);
              currentBalance += money[highestDenomination];
              console.log("current balance of change to push: " + currentBalance);
          }
          if(currentBalance > 0) change.push([cid[currentDrawerIndex][0],Number(currentBalance.toFixed(2))]);
          console.log("current look of change array: " + change);
          currentBalance = 0; //reset this variable for the next denomination
      }
      if(changeDue > 0){
          console.log("current drawer index: " + currentDrawerIndex);
          if(currentDrawerIndex > 0){
              currentDrawerIndex--;
              highestDenomination = cid[currentDrawerIndex][0];
              dispenseChange(currentDrawerIndex);
          }
          else{
              console.log("should return insufficient funds");
              change = "Insufficient Funds";
          }
      }
  }
  
  //check if cid is empty and if not return the change array else return "CLOSED"
 


  for(i = 0; i < cid.length; i++){
      if(cid[i][1] > 1 || changeDue > 0){
          console.log("returning change: " + change);
          return change;
      }
  }
  return "Closed";
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);