// create an object with all the master fields
masterFields = [
    {
        countyName: "Polk County",
        dateToday: new Date(),
        specialLanguage: false,
        specialLanguageText: "Special Language",
        PayMailAddress: "Pay Mail Address",
        includeCityZip: true,
        legalDescription: "Legal Description",
        sameUpdateAd: true,
        sriSends: true,
        paymentCutOffDate: "August 1, 2024",
        paymentCutOffTime: "11:59 PM",
        BuyerPaymentOption: "Cash",
        BuyerPayCutOffTime: "11:59 PM",
        sepCheck: true,
        payLocation: "Treasurer",
        addParcel: true,
        sellRedeemTogether: true,
        specialInstructions: "Special Instructions"
    }
];

// add an event listener for checking the special language checkbox
function languageCheck() { 
    document.getElementById("specialLanguage").addEventListener("change", function() {
    // if the checkbox is checked
    if (document.getElementById("specialLanguage").checked) {
        // show the dom element id specLang
        document.getElementById("specLang").style.display = "block";
    } else {
        // hide the dom element id specLang
        document.getElementById("specLang").style.display = "none";
    }
});
// add an event listen on the button id nextBtn1 to run the function setInfo
document.getElementById("nextBtn1").addEventListener("click", function() {
    // hide the dom element id countyInfo
    document.getElementById("countyInfo").style.display = "none";
    // show the dom element id parcelInfo
    document.getElementById("parcelInfo").style.display = "block"

}
);

// add event lister on the button id backBtn1 to run the function setInfo
document.getElementById("backBtn1").addEventListener("click", function() {
    // hide the dom element id parcelInfo
    document.getElementById("parcelInfo").style.display = "none";
    // show the dom element id countyInfo
    document.getElementById("countyInfo").style.display = "block";


}
);

// add event lister on the button id nextBtn2 to run the function setInfo
document.getElementById("nextBtn2").addEventListener("click", function() {
    // hide the dom element id countyInfo
    document.getElementById("countyInfo").style.display = "none";
    // show the dom element id test
    document.getElementById("test").style.display = "block";
}

);

// add event lister on the button id backBtn3 to run the function setInfo
document.getElementById("backBtn3").addEventListener("click", function() {
    // hide the dom element id test
    document.getElementById("test").style.display = "none";
    // show the dom element id countyInfo
    document.getElementById("countyInfo").style.display = "block";
}
)
}
    






console.log(masterFields);
console.log(document.getElementById("specialLanguage").value);

function setInfo(masterFields) {
    // set the county name
    document.getElementById("countyName").value = masterFields.countyName;
 
    // set the date
    document.getElementById("countyDate").value = masterFields.dateToday;

    // set the special language
    document.getElementById("specialLanguage").checked = masterFields.specialLanguage;

}

setInfo(masterFields[0]);
languageCheck();