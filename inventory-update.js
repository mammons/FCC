function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var inv = arr1;
    var shipment = arr2;
    
    console.log("inventory: " + inv + " ------ shipment " + shipment);
    
    for(var i = 0; i < shipment.length; i++){
        for (var j = 0; j < inv.length; j++) {
            console.log("comparing shipment item " + shipment[i] + " to inventory item " + inv[j]);
            if(shipment[i][1] == inv[j][1]){
                console.log("match! adding shipment to inventory");
                inv[j][0] += shipment[i][0];
                console.log("new inventory: " + inv[j]);
                break;
                //continue;
            }
            else if(j == shipment.length-1){
                console.log("no match. adding to end of inventory array");
                inv.push(shipment[i]);
                console.log("new inventory: " + inv);
                break;
            }
        }
    }
    
      if(inv.length < 1) inv = shipment;
    
    console.log("Shipment added to inventory. Current inventory:  " + inv);
    var sortedInventory = inv.sort(function(a,b){
        if(a[1] < b[1]) return -1;
        if(a[1] > b[1]) return 1;
        return 0;
    });
    
    console.log(" Sorted inventory: " + sortedInventory);
    return sortedInventory;
}

// Example inventory lists


updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);