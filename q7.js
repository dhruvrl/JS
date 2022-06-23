// Question :-  Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

for ( var year = 2014 ; year<=2050;year++){
    var d = new Date(year, 0 , 1); //here the format is Date(year,month,date) -- month is 0 indexed in JS Date
    // so we are getting the date of the 1st month that is 1st jan accoordingly to the year and now we will check if that is sunday or not!!

    if(d.getDay()===0){//sunday's number is 0 in the week 0-6
        console.log(`this is the 1st day of ${year} which is sunday`);
    }
} 