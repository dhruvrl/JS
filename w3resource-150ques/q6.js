//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapyear(year){
    // if(year % 4===0){
    //     console.log("leap year");
    // }
    // else{
    //     console.log("not a leap year");
    // }
    if(year % 100 === 0 ){
        if(year % 400 ===0){
                console.log("leap year");}
            else{
                console.log("not a leap year");
            }
        }
        else if(year % 4===0){
            console.log("leap year");
        }
        else{
            console.log("not a leap year");
        }
    }
    


leapyear(1700);
leapyear(1800);
leapyear(1900);
leapyear(2000);
leapyear(100);
leapyear(2016);

