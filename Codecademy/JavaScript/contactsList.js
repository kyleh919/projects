// Try adding formatting to improve output

var friends = new Object();

friends.bill = new Object();
friends.bill.firstName = "Bill";
friends.bill.lastName = "Gates";
friends.bill.number = "(518) 813-3895"
friends.bill.address = ["One Microsoft Way", "Redmond", "WA", "98052"];

friends.steve = new Object();
friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(518) 813-2949"
friends.steve.address = ["1 Infinite Loop", "San Juan", "CA", "11111"];

var list = function(blah){
    for(var key in friends){
        console.log(key)
        
    }
};



var search = function(name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key]; 
        }
    }
};

