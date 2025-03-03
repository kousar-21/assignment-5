
// month +1 because it's count start from zero not one.

// date part
    const dates = new Date();
    console.log(dates);

    let year = dates.getFullYear();
    console.log(year);

    let month = dates.getMonth();
    let mash = ['Jan','Feb','Mar','Apr','May','jun','july','Aug','Sep','Oct','Nov','Dec']
    let thisMonth = mash[month];
    console.log(thisMonth)
    // console.log(mash[month]);

    let date = dates.getDate();
    console.log(date);
    
    let day = dates.getDay();
    let dins = ['Sun','Mon','Tue','Wed','Thu','Fry','Sat']
    let din = dins[day];
    console.log(din)
    // console.log(din[day]);
    
    document.getElementById('navber-date').innerHTML = `
    ${din}, ${thisMonth} ${date} ${year}
    `;


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
