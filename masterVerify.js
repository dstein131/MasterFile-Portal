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

let countSig = null

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
    document.getElementById("parcelInfo").style.display = "none";
    // show the dom element id test
    document.getElementById("test").style.display = "block";
}

);

// add event lister on the button id backBtn1 to run the function setInfo
document.getElementById("backBtn2").addEventListener("click", function() {
    // hide the dom element id parcelInfo
    document.getElementById("test").style.display = "none";
    // show the dom element id countyInfo
    document.getElementById("parcelInfo").style.display = "block";


}
);

// add event lister on the button id backBtn3 to run the function setInfo
document.getElementById("backBtn3").addEventListener("click", function() {
    // hide the dom element id test
    document.getElementById("signature").style.display = "none";
    // show the dom element id countyInfo
    document.getElementById("test").style.display = "block";
}
)

// add event lister on the button id nextBtn3 to run the function setInfo
document.getElementById("nextBtn3").addEventListener("click", function() {
    // hide the dom element id test
    document.getElementById("test").style.display = "none";
    // show the dom element id countyInfo
    document.getElementById("signature").style.display = "block";
}
)

canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
canvas.addEventListener('pointerup', handlePointerUp, {passive: true});
canvas.addEventListener('pointermove', handlePointerMove, {passive: true});





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


const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.clear-button');
const ctx = canvas.getContext('2d');
let writingMode = false;
const handlePointerDown = (event) => {
    writingMode = true;
    ctx.beginPath();
    const [positionX, positionY] = getCursorPosition(event);
    ctx.moveTo(positionX, positionY);
  }
  const handlePointerUp = () => {
    writingMode = false;
  }
  const handlePointerMove = (event) => {
    if (!writingMode) return
    const [positionX, positionY] = getCursorPosition(event);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
  }
  const getCursorPosition = (event) => {
    positionX = event.clientX - event.target.getBoundingClientRect().x;
    positionY = event.clientY - event.target.getBoundingClientRect().y;
    return [positionX, positionY];
  }
  ctx.lineWidth = 3;
  ctx.lineJoin = ctx.lineCap = 'round';


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const imageURL = canvas.toDataURL();
    const image = document.createElement('img');
    image.src = imageURL;
    image.height = canvas.height;
    image.width = canvas.width;
    image.style.display = 'block';
    form.appendChild(image);
    countSig = image
    clearPad();
  })
  const clearPad = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearPad();
  })


let masterFieldsVerify = {}  
// add an event lister to the button id reviewBtn to run the function setInfo
document.getElementById("reviewBtn").addEventListener("click", function() {
    // take all the inputs and put them into an object
    masterFieldsVerify = {
        countyName: document.getElementById("countyName").value,
        dateToday: document.getElementById("countyDate").value,
        specialLanguage: document.getElementById("specialLanguage").checked,
        countyContact: document.getElementById("countyContact").value,
        countyEmail: document.getElementById("countyEmail").value,
        countyPhone: document.getElementById("countyPhone").value,
        countyFax: document.getElementById("countyFax").value,
        countyAddress: document.getElementById("countyAddress").value,
        countyCity: document.getElementById("countyCity").value,
        countyState: document.getElementById("countyState").value,
        countyZip: document.getElementById("countyZip").value
    }
    console.log(masterFieldsVerify);
   

    // take the signature and put it into an object
    masterFieldsVerify.signature = countSig.src;

// add all the items from the object masterFieldsVerify to the dom element id reviewModal
    document.getElementById("reviewModal").innerHTML = `
        
        <p>County Name: ${masterFieldsVerify.countyName}</p>
        <p>Special Language: ${masterFieldsVerify.specialLanguage}</p>
        <p>County Contact: ${masterFieldsVerify.countyContact}</p>
        <p>County Email: ${masterFieldsVerify.countyEmail}</p>
        <p>County Phone: ${masterFieldsVerify.countyPhone}</p>
        <p>County Fax: ${masterFieldsVerify.countyFax}</p>
        <p>County Address: ${masterFieldsVerify.countyAddress}</p>
        <p>County City: ${masterFieldsVerify.countyCity}</p>
        <p>County State: ${masterFieldsVerify.countyState}</p>
        <p>County Zip: ${masterFieldsVerify.countyZip}</p>
        <p>County Official Signature: <img src="${masterFieldsVerify.signature}" alt="signature"></p>
        <p>Date: ${masterFieldsVerify.dateToday}</p>
    `
  
   
    // take masterFieldsVerify and put it into local storage
localStorage.setItem("masterFieldsVerify", JSON.stringify(masterFieldsVerify));

}



);






setInfo(masterFields[0]);
languageCheck();