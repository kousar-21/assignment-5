

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



document.getElementById('backround-img').addEventListener('click', function(){
    console.log('working')

    document.body.style.backgroundColor = randomColor();

})

function randomColor(){
    let num1 = Math.round(Math.random() * 255);
    let num2 = Math.round(Math.random() * 255);
    let num3 = Math.round(Math.random() * 255);
    // return 'rgb(${num1}, ${num2}, ${num3})';
    return `rgb(${num1}, ${num2}, ${num3})`;
    
}
