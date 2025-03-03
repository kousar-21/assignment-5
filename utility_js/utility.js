

document.getElementById('Discover-card').addEventListener('click', function(){
    window.location.href = "./text.html"
})





document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById('history').innerHTML = "";
})


function getAlertandValueByID(id){
    const digit = document.getElementById(id).innerText;
    const convertedDigit = parseInt(digit);
    return convertedDigit;


}


function getCalculation(number){
   
    let sum = number - 1;
    return sum;
       
}

function getCalculation2(num){
    let sum = num + 1;
    return sum;
}


