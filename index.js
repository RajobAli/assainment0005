let total = 0;
let count = 0;
function addTotal(a){
    const buttonValue = parseFloat(a.querySelector("p").textContent);
    const  text =a.querySelector("h1").textContent;
   
    count++
    const e = document.getElementById("elements");
    const pp = document.createElement("p");
    pp.innerHTML = count+" "+ text;
    e.appendChild(pp)
    total += buttonValue;
     document.getElementById("totalValue").textContent ="Total " + total.toFixed(2) + " TK";
   

   const p =  document.getElementById("apply");
   const make =  document.getElementById("make");
   const input =  document.getElementById("inputid");
   const inputvalue = input.value ;
   const dis = document.getElementById("discount");
   const totalpay = document.getElementById("totalpay");
   
   
 
  
 

   if(total>0){
    make.disabled = false;
    make.style.color= 'red'
   }
  if(total>200){
    p.disabled = false;
    p.style.color = 'red'
  }


  if(inputvalue==='SELL200'){
   const Discount =  total*20/100;
   dis.innerText ="Discount  " + Discount.toFixed(2) + " TK";
   const pay  = total - Discount;
   totalpay.innerText ="Total Pay " +  pay.toFixed(2) + " TK";
 
  }

  const modalclose = document.getElementById("modalbutton");
  modalclose.addEventListener('click',function(){
    pp.innerHTML = '';
    dis.innerText = '';
    totalpay.innerText = '';
    text.innerText = '';
    document.getElementById("totalValue").textContent= ''
  
 


  


   
    
  
  });
  

};
