

document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById('history').innerHTML = "";
})


function getAlertandValueByID(id){
    const digit = document.getElementById(id).innerText;
    const convertedDigit = parseInt(digit);
    return convertedDigit;


}







// function disabledBtn(this){
//     const button = document.getElementById(this).disabled = true;
//     console.log(button);
// }

// function getCalculation(){
//     console.log('this function okay')
// }