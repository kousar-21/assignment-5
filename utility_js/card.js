
// month +1 because it's count start from zero not one.

// date part
    const dates = new Date();
    console.log(dates);
    let year = dates.getFullYear();
    let month = dates.getMonth()+1;
    let date = dates.getDate();

    console.log(year,',',month,',',date);
    

    let day = dates.getDay();
    console.log(day)
    let din = ['sun','mon','tue','wed','thu','fry','sat']
    console.log("Today is:", din[day]);
    
    // document.getElementById('navber-date').innerHTML = date;


// Navber part
const navberDigit = getAlertandValueByID("navber-digit");

// head card part
const headCards = getAlertandValueByID("head-card-digit");


// catch Button part
const mainCard = document.getElementById('main-card');


const cards = document.getElementsByClassName('card');
// console.log(cards);

// history
const clearHistory = document.getElementById('history');

for(const card of cards){
    // console.log(card);
    const btn = card.querySelector("button");
    // console.log(btn);
    btn.addEventListener('click', function(){
        alert('Board Updated Successfully')
        
        btn.setAttribute("disabled", true);

    })
     
}



// catch button - 6
const carsLast = document.getElementsByClassName('card-6');
// console.log(carsLast)

for(const last of carsLast){
    // console.log(last)
    const btnLast = last.querySelector("button");
    btnLast.addEventListener('click', function(){
        alert('Board Updated Successfully')
        btnLast.setAttribute("disabled", true)
        
    })
}
