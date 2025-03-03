

// const mobileBtnIssue = document.querySelector('h2').textContent;
// console.log(mobileBtnIssue);



// Navber part
const navberDigit = getAlertandValueByID("navber-digit");

// head card part
const headCards = getAlertandValueByID("head-card-digit");




// catch Button part
const mainCard = document.getElementById('main-card');


const cards = document.getElementsByClassName('card');
console.log(cards);

// history
const clearHistory = document.getElementById('history');

for(const card of cards){
    // console.log(card);
    const btn = card.querySelector("button");
    console.log(btn);
    btn.addEventListener('click', function(){
        alert('Board Updated Successfully')
        btn.setAttribute("disabled", true);

    })

    

    // console.log(btn);
}