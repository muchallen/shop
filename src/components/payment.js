import React from 'react'
const { Paynow } = require("paynow");

const Payment = () =>{
    
    let paynow = new Paynow("10177", "b5aa679e-1513-4bc7-948c-20e2070ae4a6");

    let payment = paynow.createPayment("Invoice 35");

// Add items to the payment list passing in the name of the item and it's price
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);

// Send off the payment to Paynow
paynow.send(payment).then( (response) => {

    // Check if request was successful
    if(response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response.redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;
    }

});
    return (
        <div> Wait for your Payment
            </div>
    )
}