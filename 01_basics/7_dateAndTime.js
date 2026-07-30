//     Dates

let myDate = new Date();
console.log(myDate);                                      // => 2026-07-24T12:13:20.196Z
console.log(typeof myDate);                               // => object

console.log(myDate.toString());                           // => Fri Jul 24 2026 12:13:20 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());                       // => Fri Jul 24 2026
console.log(myDate.toLocaleString());                     // => 7/24/2026, 12:13:20 PM
console.log(myDate.toLocaleDateString());                 // => 7/24/2026
console.log(myDate.toLocaleTimeString());                 // => 12:13:20 PM
console.log(myDate.toISOString());                        // => 2026-07-24T12:13:20.196Z
console.log(myDate.toJSON());                             // => 2026-07-24T12:13:20.196Z
console.log(myDate.toTimeString());                       // => 12:15:38 GMT+0000 (Coordinated Universal Time)

let newDate = new Date(2014, 0, 14);
console.log(newDate.toDateString());                             // => Tue Jan 14 2014

let newDate1 = new Date(2014, 0, 14, 5, 24);
console.log(newDate1.toLocaleString());                          // => 1/14/2014, 5:24:00 AM

let newDate2 = new Date("2014-12-23");
console.log(newDate2.toDateString());                            // => Tue Dec 23 2014

let newDate3 = new Date("2-04-2014");
console.log(newDate3.toDateString());                            // => Tue Feb 04 2014


let myTimeStamp = Date.now();
console.log(myTimeStamp);                                           // => 1784896170630        (in milli seconds)

console.log(newDate.getTime());                                     // => 1389657600000
console.log(Math.floor(newDate.getTime()/1000));                    // => 1389657600           (in seconds)
console.log(Math.floor(newDate.getTime()/60000));                   // => 23160960             (in minutes)
console.log(Math.floor(newDate.getTime()/3600000));                 // => 386016               (in hours)



console.log(myDate.getDate());                                         // => 24
console.log(myDate.getDay());                                          // => 5 (Friday)
console.log(myDate.getMonth() + 1);                                    // => 7


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long" 
}));                                                                   // => January Tuesday
