var data = JSON.parse(localStorage.getItem('data'));
var total = localStorage.getItem('total')
var ul = document.getElementsByClassName('order-table')[0]

for(var i =0 ; i<data.length; i++)


{
    
    var li = document.createElement("li");
    li.className="fw-normal";
    
    var content = `
    <li class="fw-normal">${data[i].category}-${data[i].name} x ${data[i].quantity} <span>$${parseFloat(data[i].price.replace("$",""))*parseFloat(data[i].quantity)}.00 </span></li>
    `
    li.innerHTML=content
    
    ul.appendChild(li)
}

document.getElementsByClassName("sub-total")[0].innerHTML="$RTGS "+total.replace("$", "")
 document.getElementsByClassName("total-price")[0].innerHTML="$RTGS "+total.replace("$","")



var moneyOptions = document.getElementById('money-option')

moneyOptions.addEventListener("change", function() {
    if(moneyOptions.value=="2"){
                        ul.innerHTML=""
        for(var i =0 ; i<data.length; i++)
        {
            console.log(data[i])
            var li = document.createElement("li");
            li.className="fw-normal";
            
            var content = `
            <li class="fw-normal">${data[i].category}-${data[i].name} x ${data[i].quantity} <span class="prices">$${parseFloat(data[i].price.replace("$",""))*parseFloat(data[i].quantity)*0.25}.00 </span></li>
            `
            li.innerHTML=content
            
            ul.appendChild(li)
        }
        
        var prices = document.getElementsByClassName("prices")
        var sumtotal= 0;
        for( var x =0 ; x<prices.length; x++){
            var price = parseFloat(prices[x].innerHTML.replace("$",""));
            sumtotal+=price
        }
        
         document.getElementsByClassName("sub-total")[0].innerHTML="$USD "+ sumtotal+".00"
         document.getElementsByClassName("total-price")[0].innerHTML="$USD "+ sumtotal+".00"
    }

    if(moneyOptions.value=="1"){
            ul.innerHTML=""
        for(var i =0 ; i<data.length; i++)
        {
            
            var li = document.createElement("li");
            li.className="fw-normal";
            
            var content = `
            <li class="fw-normal">${data[i].category}-${data[i].name} x ${data[i].quantity} <span class="prices">$${parseFloat(data[i].price.replace("$",""))*parseFloat(data[i].quantity)}.00 </span></li>
            `
            li.innerHTML=content
            
            ul.appendChild(li)
        }
        var prices = document.getElementsByClassName("prices")
        var sumtotal= 0;
        for( var x =0 ; x<prices.length; x++){
            var price = parseFloat(prices[x].innerHTML.replace("$",""));
            sumtotal+=price
        }
        
         document.getElementsByClassName("sub-total")[0].innerHTML="$RTGS "+ sumtotal+".00"
         document.getElementsByClassName("total-price")[0].innerHTML="$RTGS "+ sumtotal+".00"
        
                    }
        

        
});


// var prices = document.getElementsByClassName("prices")
// var sumtotal= 0;
// for( var x =0 ; x<prices.length; x++){
//     var price = parseFloat(prices[x].innerHTML.replace("$",""));
//     sumtotal+=price
// }

//  document.getElementsByClassName("sub-total")[0].innerHTML="$RTGS "+ sumtotal+".00"
//  document.getElementsByClassName("total-price")[0].innerHTML="$RTGS "+ sumtotal+".00"

    

var payementOptions = document.getElementsByClassName('payment-method')[0].getElementsByTagName('option')

for(var a=0; a<payementOptions; a++){
    var option = payementOptions[a].innerHTML

    if(option=="Ecocash"){
        
    }
}


