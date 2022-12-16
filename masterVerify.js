// create an object called masterFeiields with the following items
//         countyName        
//   countyContact       
//   countyEmail
//   countyPhone
//   countyFax
//  countyAddress
//   countyCity
//   countyState
//   countyZip
//   audName
//   audPhone
//   audContName
//   audContPhone
//   audContEmail
//   treasName
//   treasPhone
//   treasEmail
//   countAtty
//   countAttyPhone
//   assessor
//   assessorPhone
//   countyClerk
//   countyClerkPhone
//   commiss1
//   commiss2
//   commiss3
//   commissionPhone
//   remindEmail
//   docEmail



let masterFields = {
    countyName: "Adams",
    countyCode: "01",
    countyContact: "David Stein",
    countyEmail: "dstein@sriservices.com",
    countyPhone: "305-984-7004",
    countyFax: "905-403-3123",
    countyAddress: "1234 Main St",
    countyCity: "Test City",
    countyState: "Indiana",
    countyZip: "46201",
    audName: "Gail Smith",
    audPhone: "555-555-5555",
    audContName: "Helen Jones",
    audContPhone: "432-432-4321",
    audContEmail: "hjones@hmail.com",
    treasName: "Robert Smith",
    treasPhone: "432-432-4321",
    treasEmail: "rsmith@hmail.com",
    countAtty: "Yvonne Jones",
    countAttyPhone: "643-643-6432",
    assessor: "Mary Smith",
    assessorPhone: "321-321-3210",
    countyClerk: "Irene Jones",
    countyClerkPhone: "321-321-3210",
    commiss1: "Ed Jones",
    commiss2: "Fred Smith",
    commiss3: "Tom Roberts",
    commissionPhone: "754-754-7540",
    remindEmail: "resind@hmail.com",
    docEmail: "remind@hmail.com"
}

// take all the values from the masterFields object and put them in the dom elements that are named the same as the object keys
document.getElementById("countyName").value = masterFields.countyName;
document.getElementById("countyCode").value = masterFields.countyCode;
document.getElementById("countyContact").value = masterFields.countyContact;
document.getElementById("countyEmail").value = masterFields.countyEmail;
document.getElementById("countyPhone").value = masterFields.countyPhone;
document.getElementById("countyFax").value = masterFields.countyFax;
document.getElementById("countyAddress").value = masterFields.countyAddress;
document.getElementById("countyCity").value = masterFields.countyCity;
document.getElementById("countyState").value = masterFields.countyState;
document.getElementById("countyZip").value = masterFields.countyZip;
document.getElementById("audName").value = masterFields.audName;
document.getElementById("audPhone").value = masterFields.audPhone;
document.getElementById("audContName").value = masterFields.audContName;
document.getElementById("audContPhone").value = masterFields.audContPhone;
document.getElementById("audContEmail").value = masterFields.audContEmail;
document.getElementById("treasName").value = masterFields.treasName;
document.getElementById("treasPhone").value = masterFields.treasPhone;
document.getElementById("treasEmail").value = masterFields.treasEmail;
document.getElementById("countAtty").value = masterFields.countAtty;
document.getElementById("countAttyPhone").value = masterFields.countAttyPhone;
document.getElementById("assessor").value = masterFields.assessor;
document.getElementById("assessorPhone").value = masterFields.assessorPhone;
document.getElementById("countyClerk").value = masterFields.countyClerk;
document.getElementById("countyClerkPhone").value = masterFields.countyClerkPhone;
document.getElementById("commiss1").value = masterFields.commiss1;
document.getElementById("commiss2").value = masterFields.commiss2;
document.getElementById("commiss3").value = masterFields.commiss3;
document.getElementById("commissionPhone").value = masterFields.commissionPhone;
document.getElementById("remindEmail").value = masterFields.remindEmail;
document.getElementById("docEmail").value = masterFields.docEmail;
  


// disable the button with the id subBtn
document.getElementById("subBtn").disabled = true;


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

// add event listener to the button id approveBtn to run the function setInfo
document.getElementById("approveBtn").addEventListener("click", function() {

  // show the dom element id padCont
  document.getElementById("padCont").style.display = "block";
}
)

// add event listener to the dom id signSub to run the function setInfo
document.getElementById("signSub").addEventListener("click", function() {
  // set button with id subBtn to active
  document.getElementById("subBtn").disabled = false;
}
)

// add event listener to the dom id subBtn to run the function downloadMasterFieldsVerify
document.getElementById("subBtn").addEventListener("click", function() {
  // run the function downloadMasterFieldsVerify
  downloadMasterFieldsVerify();
}
)

document.getElementById("previousDataModalBody").innerHTML = `
  
        <div class="border px-2 py-2 mb-2">
        <h5>County Information</h5>
        <div>County Name: ${masterFields.countyName}</div>
        <div>County Code: ${masterFields.countyCode}</div>
        <div>County Contact: ${masterFields.countyContact}</div>
        <div>County Email: ${masterFields.countyEmail}</div>
        <div>County Phone: ${masterFields.countyPhone}</div>
        <div>County Fax: ${masterFields.countyFax}</div>
        <div>County Address: ${masterFields.countyAddress}</div>
        <div>County City: ${masterFields.countyCity}</div>
        <div>County State: ${masterFields.countyState}</div>
        <div>County Zip: ${masterFields.countyZip}</div>
        </div>
       
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Auditor Information</h5>
        <div>Auditor Name: ${masterFields.audName}</div>
        <div>Auditor Phone: ${masterFields.audPhone}</div>
        <div>Auditor Contact Name: ${masterFields.audContName}</div>
        <div>Auditor Contact Phone: ${masterFields.audContPhone}</div>
        <div>Auditor Contact Email: ${masterFields.audContEmail}</div>
        </div>

      <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Treasurer Information</h5>
        <div>Treasurer Name: ${masterFields.treasName}</div>
        <div>Treasurer Phone: ${masterFields.treasPhone}</div>
        <div>Treasurer Email: ${masterFields.treasEmail}</div>
        </div>
     
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">County Attorney Information</h5>
            
        <div>County Attorney: ${masterFields.countAtty}</div>
        <div>County Attorney Phone: ${masterFields.countAttyPhone}</div>
        </div>
       
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Assessor Information</h5>
        <div>Assessor: ${masterFields.assessor}</div>
        <div>Assessor Phone: ${masterFields.assessorPhone}</div>
        </div>
      
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">County Clerk Information</h5>
        <div>County Clerk: ${masterFields.countyClerk}</div>
        <div>County Clerk Phone: ${masterFields.countyClerkPhone}</div>
        </div>
     
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Commissioner Information</h5>
        <div>Commissioner 1: ${masterFields.commiss1}</div>
        <div>Commissioner 2: ${masterFields.commiss2}</div>
        <div>Commissioner 3: ${masterFields.commiss3}</div>
        <div>Commissioner Phone: ${masterFields.commissionPhone}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Reminder Email</h5>
        <div>Reminder Email: ${masterFields.remindEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Document Email</h5>
        <div>Document Email: ${masterFields.docEmail}</div>
        </div>

        `





    






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
  
    <div class="border px-2 py-2 mb-2">
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
        </div>
       
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Auditor Information</h5>
        <div>Auditor Name: ${masterFieldsVerify.audName}</div>
        <div>Auditor Phone: ${masterFieldsVerify.audPhone}</div>
        <div>Auditor Contact Name: ${masterFieldsVerify.audContName}</div>
        <div>Auditor Contact Phone: ${masterFieldsVerify.audContPhone}</div>
        <div>Auditor Contact Email: ${masterFieldsVerify.audContEmail}</div>
        </div>


        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Treasurer Information</h5>
        <div>Treasurer Name: ${masterFieldsVerify.treasName}</div>
        <div>Treasurer Phone: ${masterFieldsVerify.treasPhone}</div>
        <div>Treasurer Email: ${masterFieldsVerify.treasEmail}</div>
      </div>

      <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">County Attorney Information</h5>
            
        <div>County Attorney: ${masterFieldsVerify.countAtty}</div>
        <div>County Attorney Phone: ${masterFieldsVerify.countAttyPhone}</div>
        </div>
       
        
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Assessor Information</h5>
        <div>Assessor: ${masterFieldsVerify.assessor}</div>
        <div>Assessor Phone: ${masterFieldsVerify.assessorPhone}</div>
        </div>
      
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">County Clerk Information</h5>
        <div>County Clerk: ${masterFieldsVerify.countyClerk}</div>
        <div>County Clerk Phone: ${masterFieldsVerify.countyClerkPhone}</div>
        </div>
     
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Commissioner Information</h5>
        <div>Commissioner 1: ${masterFieldsVerify.commiss1}</div>
        <div>Commissioner 2: ${masterFieldsVerify.commiss2}</div>
        <div>Commissioner 3: ${masterFieldsVerify.commiss3}</div>
        <div>Commissioner Phone: ${masterFieldsVerify.commissionPhone}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Reminder Email</h5>
        <div>Reminder Email: ${masterFieldsVerify.remindEmail}</div>
        </div>
        
        <div class="border px-2 py-2 mb-2">
        <h5 class="mt-2">Document Email</h5>
        <div>Document Email: ${masterFieldsVerify.docEmail}</div>
      
        
        </div>
        `


    // console log the object masterFieldsVerify
    console.log(masterFieldsVerify);

    // add the object masterFieldsVerify to the local storage
    localStorage.setItem("masterFieldsVerify", JSON.stringify(masterFieldsVerify));











}
);

// convert the object masterFieldsVerify to a downloadable file
function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// download the object masterFieldsVerify as a json file
function downloadMasterFieldsVerify() {
    downloadObjectAsJson(masterFieldsVerify, "masterFieldsVerify");
}

// download the object masterFieldsVerify as an excel file
function downloadMasterFieldsVerifyExcel() {
    downloadObjectAsJson(masterFieldsVerify, "masterFieldsVerify");
}




// add an event listener to canvas to check if it is blank
