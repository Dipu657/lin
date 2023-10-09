 
 let depositBtn = document.getElementById('btn-Deposit');
 depositBtn.addEventListener('click', function () {
    console.log( "Deposit Btn clicked");
    let depositField = document.getElementById('Deposit-field');
    let depositFieldstring = depositField.value;
    console.log(depositFieldstring);
    depositField.value=""
    if(depositFieldstring>0){
      alert('ok')
    }
   else{ alert('Error')
  }

 

  let depositTotal = document.getElementById('deposit-total');
  let previousdepositTotalString =depositTotal.innerText;
  console.log(previousdepositTotalString);


  let newdepositTotal = parseInt(previousdepositTotalString)  + parseInt(depositFieldstring) ;
  console.log(newdepositTotal);
  depositTotal.innerText =newdepositTotal;

  let balanceTotal =document.getElementById('balance-total')
  let previousbalanceTotalString =balanceTotal.innerText
  console.log(previousbalanceTotalString);

  let newbanlanceTotal = parseInt(previousbalanceTotalString) + parseInt(depositFieldstring);
  balanceTotal.innerText =newbanlanceTotal;
  console.log(newbanlanceTotal);
    
 })

 let WithdrawBtn = document.getElementById('btn-Withdraw');
 WithdrawBtn.addEventListener('click', function () {
    console.log( "Withdraw Btn clicked");
let withdrawField = document.getElementById('Withdraw-field');
    let withdrawFieldstring = withdrawField.value;
    console.log(withdrawFieldstring);
    withdrawField.value =""
    if (withdrawFieldstring>0 ){
      alert('ok')
    }
    else {alert('Error')}
    



let withdrawTotal = document.getElementById('Withdraw-total');
  let previouswithdrawTotalString =withdrawTotal.innerText;
  console.log(previouswithdrawTotalString);


  let newwithdrawTotal = parseInt (previouswithdrawTotalString)  - parseInt (withdrawFieldstring) ;
  withdrawTotal.innerText =newwithdrawTotal;
  console.log(newwithdrawTotal);

  let balanceTotal =document.getElementById('balance-total')
  let previousbalanceTotalString =balanceTotal.innerText
  console.log(previousbalanceTotalString);

  let newbanlanceTotal = parseInt(previousbalanceTotalString) - parseInt(withdrawFieldstring);
  balanceTotal.innerText =newbanlanceTotal;
  console.log(newbanlanceTotal);
    

})
 
