//Write a JavaScript program to calculate days left until next Christmas.

var today = new Date();
var target = new Date(today.getFullYear(), 11, 25);
if(today.getMonth()==11 && today.getDate()>25)
{
    target.setFullYear(cmas.getFullYear()+1);
}

var one_day = 1000*60*60*24; // here 1 day is represented in ms ---- 1000 for milli, 60 for second, 60 for minutes, 24 for hours   (ms in a day)

remaining_days = Math.ceil((target.getTime() - today.getTime()) / (one_day));

console.log(`${remaining_days} days are left until next Christmas`);