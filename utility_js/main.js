

document.getElementById('fix-mobile-btn').addEventListener('click',function(event){
    event.preventDefault();

    // Heading Text
    const mobileBtnIssue = document.getElementById('Mobile-btn-issue').innerText;

    // button disabled
    // disabledBtn("fix-mobile-btn")

    // Navber part
    const navberDigit = getAlertandValueByID("navber-digit");
    // console.log(navberDigit);

    // head card part
    const headCards = getAlertandValueByID("head-card-digit");
    // console.log(headCards);

    // history
    const clearHistory = document.getElementById('history');

    if(headCards === 6){
        let fixed = 1;
        let newDigit = headCards - fixed   
        let newNavDigit = navberDigit + fixed  


        document.getElementById('head-card-digit').innerText = newDigit;
        document.getElementById('navber-digit').innerText = newNavDigit;


        const div = document.createElement('div')
        div.classList.add('bg-blue-200')
        div.classList.add('rounded-md')
        div.classList.add('p-3')
        div.classList.add('mb-3')
        div.innerHTML = `
        You have complete the task ${mobileBtnIssue} at 12:48 pm

        `
        clearHistory.appendChild(div)

    }

    if(headCards === 6){
        alert('Board Updated Successfully')
        
        return;
    }

})






document.getElementById('btn-2').addEventListener('click',function(event){
    event.preventDefault();

    // Heading Text
    const mobileBtnIssue = document.getElementById('add-dark').innerText;

    // button disabled
    // disabledBtn("fix-mobile-btn")

    // Navber part
    const navberDigit = getAlertandValueByID("navber-digit");
    // console.log(navberDigit);

    // head card part
    const headCards = getAlertandValueByID("head-card-digit");
    // console.log(headCards);

    // history
    const clearHistory = document.getElementById('history');

    if(headCards === 5){
        let fixed = 1;
        let newDigit = headCards - fixed   
        let newNavDigit = navberDigit + fixed  


        document.getElementById('head-card-digit').innerText = newDigit;
        document.getElementById('navber-digit').innerText = newNavDigit;


        const div = document.createElement('div')
        div.classList.add('bg-blue-200')
        div.classList.add('rounded-md')
        div.classList.add('p-3')
        div.classList.add('mb-3')
        div.innerHTML = `
        You have complete the task ${mobileBtnIssue} at 12:48 pm

        `
        clearHistory.appendChild(div)

    }

    if(headCards === 5){
        alert('Board Updated Successfully')
        
        return;
    }

})