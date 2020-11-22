const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

let ticketprice = +movieselect.value;


// update price and seats number

function updateSelectedCount()
{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


const selectedSeatsCount = selectedSeats.length;


count.innerText = selectedSeatsCount;
total.innerText =  selectedSeatsCount* ticketprice;

}


// Movie change
movieselect.addEventListener ( 'change' , e =>
{

    ticketprice = +e.target.value;
    updateSelectedCount();


})


container.addEventListener ( 'click' , e=>

{
        if(
            e.target.classList.contains('seat') && 
            !e.target.classList.contains('occupied')
        )
{

    e.target.classList.toggle('selected');


    updateSelectedCount();

}
        

}

);