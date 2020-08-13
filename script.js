const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');
const body = document.body;
var movie = document.getElementById('movie');

function updatePrice() {
    const numberOfSeats = count.innerText;
    let total = movie.value;
    price.innerText = numberOfSeats * total;

}

container.addEventListener('click',function(e){
    updatePrice()
    if ((e.target.classList.contains("seat")) && !(e.target.classList.contains("occupied")) && !(e.target.classList.contains("selected")))
    {
        e.target.className = "seat selected";
        count.innerText++;
        updatePrice() 
    }
   
    else if ((e.target.classList.contains("selected"))) {
        e.target.className = "seat";
        count.innerText--;
        updatePrice()  
    }
});

movie.addEventListener("change",function(e){
    updatePrice();
});








