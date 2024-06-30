'use strict';

// const bookings =[];

// const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
//     // numPassengers=numPassengers ||1;
//     // price = price ||199;
    
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);

const flight = 'LH234';
const jonas ={
    name: 'Jonas Schmetdmann',
    passport: 24739479285
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name='Mr. '+ passenger.name;

    if (passenger.passport===24739479285){
        alert('Checked in')
    }else{
        alert('Wrong credentials!')
    }


}

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*1000000000);
}
newPassport(jonas);
checkIn(flight,jonas);