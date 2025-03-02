

document.getElementById('fix-mobile-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const navberDigit = getAlertandValueByID("navber-digit");
    // console.log(navberDigit);

    const headCards = getAlertandValueByID("head-card-digit");
    // console.log(headCards);

    

    let fixed = 1;
    let newDigit = headCards - fixed;

    let newNavDigit = navberDigit + fixed;

    
    document.getElementById('head-card-digit').innerText = newDigit;
    document.getElementById('navber-digit').innerText = newNavDigit;
   






})