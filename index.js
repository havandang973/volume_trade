// var getdonBay = document.querySelector('select')
var getInput = document.querySelectorAll('.form-input input')
var getKLCoin = document.querySelectorAll('.form-output p')
var getBtn = document.querySelector('button')

console.log(getKLCoin)

// lay gia tri input
for(var i = 0; i < getInput.length; i++) {
    getInput[i].addEventListener("change", function(e) {
        console.log(+e.target.value)
    })
}   

// chặn mặc định nút botton
getBtn.onclick = function (e){
    e.preventDefault()
}

//tính phí giao dịch
function phiGD() {
    return ( (kiQuy () * +getInput[0].value * (2/100)/100) + (kiQuy () * +getInput[0].value * (4/100)/100))
}

//tính KLCoin
function KLCoin () {
   return ((Math.abs((+getInput[1].value) / ((+getInput[2].value) - (+getInput[3].value))) 
        * (100 - 0.08 * (+getInput[0].value)) / 100)).toFixed(3) 
}

//tính kĩ quỹ
function kiQuy () {
    return ((KLCoin () * +getInput[2].value) / +getInput[0].value).toFixed(4) 
}

//tính lợi nhuận
function loiNhuan () {
    return ( (Math.abs( ((+getInput[4].value) - (+getInput[2].value)) * KLCoin () )) - phiGD() ).toFixed(4) 
}

//btn
getBtn.addEventListener("click", function() {
        getKLCoin[0].innerText = KLCoin ()
        getKLCoin[1].innerText = kiQuy ()
        getKLCoin[2].innerText = loiNhuan ()
})








