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
        docEmail: document.getElementById("docEmail").value

    }

  
    



    // add the object masterFieldsVerify to the local storage
    localStorage.setItem("masterFieldsVerify", JSON.stringify(masterFieldsVerify));

    // add the values of the object masterFieldsVerify to the dom id reviewModal
    document.getElementById("reviewModal").innerHTML = `
  
      
        <h5>County Information</h5>
        <div>County Name: ${masterFieldsVerify.countyName}</div>
        <div>County Code: ${masterFieldsVerify.countyCode}</div>
        <div>County Contact: ${masterFieldsVerify.countyContact}</div>
        <div>County Email: ${masterFieldsVerify.countyEmail}</div>
        <div>County Phone: ${masterFieldsVerify.countyPhone}</div>
        <div>County Fax: ${masterFieldsVerify.countyFax}</div>
        <div>County Address: ${masterFieldsVerify.countyAddress}</div>
        <div>County City: ${masterFieldsVerify.countyCity}</div>
        <div>County State: ${masterFieldsVerify.countyState}</div>
        <div>County Zip: ${masterFieldsVerify.countyZip}</div>
       
        <h5 class="mt-2">Auditor Information</h5>
        <div>Auditor Name: ${masterFieldsVerify.audName}</div>
        <div>Auditor Phone: ${masterFieldsVerify.audPhone}</div>
        <div>Auditor Contact Name: ${masterFieldsVerify.audContName}</div>
        <div>Auditor Contact Phone: ${masterFieldsVerify.audContPhone}</div>
        <div>Auditor Contact Email: ${masterFieldsVerify.audContEmail}</div>
      
        <h5 class="mt-2">Treasurer Information</h5>
        <div>Treasurer Name: ${masterFieldsVerify.treasName}</div>
        <div>Treasurer Phone: ${masterFieldsVerify.treasPhone}</div>
        <div>Treasurer Email: ${masterFieldsVerify.treasEmail}</div>
     

        <h5 class="mt-2">County Attorney Information</h5>
            
        <div>County Attorney: ${masterFieldsVerify.countAtty}</div>
        <div>County Attorney Phone: ${masterFieldsVerify.countAttyPhone}</div>
       
        <h5 class="mt-2">Assessor Information</h5>
        <div>Assessor: ${masterFieldsVerify.assessor}</div>
        <div>Assessor Phone: ${masterFieldsVerify.assessorPhone}</div>
      
        <h5 class="mt-2">County Clerk Information</h5>
        <div>County Clerk: ${masterFieldsVerify.countyClerk}</div>
        <div>County Clerk Phone: ${masterFieldsVerify.countyClerkPhone}</div>
     
     
        <h5 class="mt-2">Commissioner Information</h5>
        <div>Commissioner 1: ${masterFieldsVerify.commiss1}</div>
        <div>Commissioner 2: ${masterFieldsVerify.commiss2}</div>
        <div>Commissioner 3: ${masterFieldsVerify.commiss3}</div>
        <div>Commissioner Phone: ${masterFieldsVerify.commissionPhone}</div>
    
        <h5 class="mt-2">Reminder Email</h5>
        <div>Reminder Email: ${masterFieldsVerify.remindEmail}</div>
        <h5 class="mt-2">Document Email</h5>
        <div>Document Email: ${masterFieldsVerify.docEmail}</div>
        <h5 class="mt-2">Signatures</h5>
        <div>County Official Signature: <img src="${masterFieldsVerify.signature}" alt="signature"></div>
        `


    // console log the object masterFieldsVerify
    console.log(masterFieldsVerify);

    // add the object masterFieldsVerify to the local storage
    localStorage.setItem("masterFieldsVerify", JSON.stringify(masterFieldsVerify));











}
);


