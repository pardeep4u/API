const express = require("express");
const app = express();

// data for seats

var seats = [];
const data = () => {
    for (let index = 0; index < 499; index++) {
        
        seats.push({
            id : index + 1,
            booked : false
        }); 
        
    }
}
data();

// Function for available seats

const availableSeats = () => {

    let available_seats = [];

    seats.forEach( (value,index)=> {

        if(value.booked === false){
            available_seats.push(value);
        }

    });

    return available_seats;

}

// Function FOR book a seat

const bookSeat = (index) => {

    if(seats[index - 1].booked === true){
        return "Already booked!";
    }

    else{

        seats[index - 1] = {
            id: index,
            booked : true
        }

        return "Done!"
    }
    

}



// Routes


app.get("/available" , (req,res,next)=> {

    let a_seats = availableSeats();
    res.send(a_seats);

});

app.post("/book/:id",(req,res,next)=> {


    var response = bookSeat(parseInt(req.params.id));
    res.send(response);



});


// server port

app.listen(3000,()=> {

    console.log(" ON port 3000 ")

});