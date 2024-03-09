let numberofChilds = 2;
let numberofAdults = 1;
let numberofSeniors = 1;

let ticketpriceofChilds = 100;
let ticketpriceofAdults = 150;
let ticketpriceofSeniors = 120;

let totalprice = numberofChilds * ticketpriceofChilds + 
numberofAdults * ticketpriceofAdults + 
numberofSeniors * ticketpriceofSeniors;

console.log(`The total ticket price is ${totalprice}`);