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

  canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
canvas.addEventListener('pointerup', handlePointerUp, {passive: true});
canvas.addEventListener('pointermove', handlePointerMove, {passive: true});


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
// add event lister on the button id reviewBtn to run the function setInfo
document.getElementById("reviewBtn").addEventListener("click", function() {
    // take the input values and add it to the object masterFieldsVerify
    masterFieldsVerify = {

        countyName: document.getElementById("countyName").value,
        countyCode: document.getElementById("countyCode").value,
        countyContact: document.getElementById("countyContact").value,
        countyEmail: document.getElementById("countyEmail").value,
        countyPhone: document.getElementById("countyPhone").value,
        countyFax: document.getElementById("countyFax").value,
        countyAddress: document.getElementById("countyAddress").value,
        countyCity: document.getElementById("countyCity").value,
        countyState: document.getElementById("countyState").value,
        countyZip: document.getElementById("countyZip").value,
        audName: document.getElementById("audName").value,
        audPhone: document.getElementById("audPhone").value,
        audContName: document.getElementById("audContName").value,
        audContPhone: document.getElementById("audContPhone").value,
        audContEmail: document.getElementById("audContEmail").value,
        treasName: document.getElementById("treasName").value,
        treasPhone: document.getElementById("treasPhone").value,
        treasEmail: document.getElementById("treasEmail").value,
        countAtty: document.getElementById("countAtty").value,
        countAttyPhone: document.getElementById("countAttyPhone").value,
        assessor: document.getElementById("assessor").value,
        assessorPhone: document.getElementById("assessorPhone").value,
        countyClerk: document.getElementById("countyClerk").value,
        countyClerkPhone: document.getElementById("countyClerkPhone").value,
        commiss1: document.getElementById("commiss1").value,
        commiss2: document.getElementById("commiss2").value,
        commiss3: document.getElementById("commiss3").value,
        commissionPhone: document.getElementById("commissionPhone").value,
        remindEmail: document.getElementById("remindEmail").value,
        docEmail: document.getElementById("docEmail").value,
        signature: countSig.src

    }

    // add the object masterFieldsVerify to the local storage
    localStorage.setItem("masterFieldsVerify", JSON.stringify(masterFieldsVerify));

    // add the values of the object masterFieldsVerify to the dom id reviewModal
    document.getElementById("reviewModal").innerHTML = `
  
      
        <h5>County Information</h5>
        <p>County Name: ${masterFieldsVerify.countyName}</p>
        <p>County Code: ${masterFieldsVerify.countyCode}</p>
        <p>County Contact: ${masterFieldsVerify.countyContact}</p>
        <p>County Email: ${masterFieldsVerify.countyEmail}</p>
        <p>County Phone: ${masterFieldsVerify.countyPhone}</p>
        <p>County Fax: ${masterFieldsVerify.countyFax}</p>
        <p>County Address: ${masterFieldsVerify.countyAddress}</p>
        <p>County City: ${masterFieldsVerify.countyCity}</p>
        <p>County State: ${masterFieldsVerify.countyState}</p>
        <p>County Zip: ${masterFieldsVerify.countyZip}</p>
       
        <h5>Auditor Information</h5>
        <p>Auditor Name: ${masterFieldsVerify.audName}</p>
        <p>Auditor Phone: ${masterFieldsVerify.audPhone}</p>
        <p>Auditor Contact Name: ${masterFieldsVerify.audContName}</p>
        <p>Auditor Contact Phone: ${masterFieldsVerify.audContPhone}</p>
        <p>Auditor Contact Email: ${masterFieldsVerify.audContEmail}</p>
      
        <h5>Treasurer Information</h5>
        <p>Treasurer Name: ${masterFieldsVerify.treasName}</p>
        <p>Treasurer Phone: ${masterFieldsVerify.treasPhone}</p>
        <p>Treasurer Email: ${masterFieldsVerify.treasEmail}</p>
     

        <h5>County Attorney Information</h5>
            
        <p>County Attorney: ${masterFieldsVerify.countAtty}</p>
        <p>County Attorney Phone: ${masterFieldsVerify.countAttyPhone}</p>
       
        <h5>Assessor Information</h5>
        <p>Assessor: ${masterFieldsVerify.assessor}</p>
        <p>Assessor Phone: ${masterFieldsVerify.assessorPhone}</p>
      >
        <h5>County Clerk Information</h5>
        <p>County Clerk: ${masterFieldsVerify.countyClerk}</p>
        <p>County Clerk Phone: ${masterFieldsVerify.countyClerkPhone}</p>
     
     
        <h5>Commissioner Information</h5>
        <p>Commissioner 1: ${masterFieldsVerify.commiss1}</p>
        <p>Commissioner 2: ${masterFieldsVerify.commiss2}</p>
        <p>Commissioner 3: ${masterFieldsVerify.commiss3}</p>
        <p>Commissioner Phone: ${masterFieldsVerify.commissionPhone}</p>
    
        <h5>Reminder Email</h5>
        <p>Reminder Email: ${masterFieldsVerify.remindEmail}</p>
        <h5>Document Email</h5>
        <p>Document Email: ${masterFieldsVerify.docEmail}</p>
        <h5>Signatures</h5>
        <p>County Official Signature: <img src="${masterFieldsVerify.signature}" alt="signature"></p>
        `


    // console log the object masterFieldsVerify
    console.log(masterFieldsVerify);

    // add the object masterFieldsVerify to the local storage
    localStorage.setItem("masterFieldsVerify", JSON.stringify(masterFieldsVerify));
    














}
);


