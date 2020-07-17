const readline = require('readline');

Date.prototype.addDays = function(days) {
    let d = new Date(this.valueOf());
    d.setDate(d.getDate() + days);
    return d;
 }
 var date = new Date("2020-06-24");
 console.log(date.addDays(1));
console.log(date.addDays(2));
var x = readline();
