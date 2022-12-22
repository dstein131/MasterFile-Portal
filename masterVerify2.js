
let masterFields = {
  countyCode: "01",
  countyName: "Adams",
  countyStreetAddress: "200 S 3rd St",
  countyCity: "West Union",
  countyState: "IA",
  countyZip: "52175",
  auditorName: "Jill Smith",
  auditorPhone: "563-422-1234",
  auditorEmail: "jsmith@gmail.com",
  treasurerName: "John Doe",
  treasurerPhone: "563-422-1234",
  treasurerEmail: "jdoe@gmail.com",
  attorneyName: "Bobcat Jones",
  attorneyPhone: "563-422-1234",
  attorneyEmail: "Bjones@gmail.com",
  assessorName: "Mike Davis",
  assessorPhone: "563-422-1234",
  assessorEmail: "mdavis@gmail.com",
  commissioner1Name: "Michael Johnson",
  commissioner2Name: "Chris Brown",
  commissioner3Name: "Brad Johnson",
  commissionerPhone: "563-422-1234",
  courtHouseName: "Adams County Courthouse",
  courtLocation: "200 S 3rd St, West Union, IA 52175",
  presidingJudge: "Judge Smith",
  presidingJudgePhone: "563-422-1234",
  newspaper1Name: "West Union Times",
  newspaper1Contact: "Zachary Smith",
  newspaper1Phone: "563-422-1234",
  newspaper1AdFormat: "Full Page",
  newspaper1LeadTime: "2 Weeks",
  newspaper1DayAdRuns: "Monday",
  newspaper1URL: "www.westuniontimes.com",
  newspaper2Name: "Elkader Register",
  newspaper2Contact: "Zachary Smith",
  newspaper2Phone: "563-422-1234",
  newspaper2AdFormat: "Full Page",
  newspaper2LeadTime: "2 Weeks",
  newspaper2DayAdRuns: "Tuesday",
  newspaper2URL: "www.elkaderregister.com",
  
}

// disable to button id approveBtn
document.getElementById("approveBtn").disabled = true



// set the dom objects matching the masterFields object keys to the values of the the dom element named the same as the key
for (let key in masterFields) {
  if (document.getElementById(key)) {
    document.getElementById(key).value = masterFields[key]
  }
}



// previous data modal filler //
document.getElementById("previousDataModalBody").innerHTML = `
  
        <div class="border px-2 py-2 mb-2">
        <h5>County Information</h5>
        <div>County Code: ${masterFields.countyCode}</div>
        <div>County Name: ${masterFields.countyName}</div>
        <div>County Street Address: ${masterFields.countyStreetAddress}</div>
        <div>County City: ${masterFields.countyCity}</div>
        <div>County State: ${masterFields.countyState}</div>
        <div>County Zip: ${masterFields.countyZip}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Auditor Information</h5>
        <div>Auditor Name: ${masterFields.auditorName}</div>
        <div>Auditor Phone: ${masterFields.auditorPhone}</div>
        <div>Auditor Email: ${masterFields.auditorEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Treasurer Information</h5>
        <div>Treasurer Name: ${masterFields.treasurerName}</div>
        <div>Treasurer Phone: ${masterFields.treasurerPhone}</div>
        <div>Treasurer Email: ${masterFields.treasurerEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Attorney Information</h5>
        <div>Attorney Name: ${masterFields.attorneyName}</div>
        <div>Attorney Phone: ${masterFields.attorneyPhone}</div>
        <div>Attorney Email: ${masterFields.attorneyEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Assessor Information</h5>
        <div>Assessor Name: ${masterFields.assessorName}</div>
        <div>Assessor Phone: ${masterFields.assessorPhone}</div>
        <div>Assessor Email: ${masterFields.assessorEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Commissioner Information</h5>
        <div>Commissioner 1 Name: ${masterFields.commissioner1Name}</div>
        <div>Commissioner 2 Name: ${masterFields.commissioner2Name}</div>
        <div>Commissioner 3 Name: ${masterFields.commissioner3Name}</div>
        <div>Commissioner Phone: ${masterFields.commissionerPhone}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Court House Information</h5>
        <div>Court House Name: ${masterFields.courtHouseName}</div>
        <div>Court Location: ${masterFields.courtLocation}</div>
        <div>Presiding Judge: ${masterFields.presidingJudge}</div>
        <div>Presiding Judge Phone: ${masterFields.presidingJudgePhone}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Newspaper 1 Information</h5>
        <div>Newspaper 1 Name: ${masterFields.newspaper1Name}</div>
        <div>Newspaper 1 Contact: ${masterFields.newspaper1Contact}</div>
        <div>Newspaper 1 Phone: ${masterFields.newspaper1Phone}</div>
        <div>Newspaper 1 Ad Format: ${masterFields.newspaper1AdFormat}</div>
        <div>Newspaper 1 Lead Time: ${masterFields.newspaper1LeadTime}</div>
        <div>Newspaper 1 Day Ad Runs: ${masterFields.newspaper1DayAdRuns}</div>
        <div>Newspaper 1 URL: ${masterFields.newspaper1URL}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Newspaper 2 Information</h5>
        <div>Newspaper 2 Name: ${masterFields.newspaper2Name}</div>
        <div>Newspaper 2 Contact: ${masterFields.newspaper2Contact}</div>
        <div>Newspaper 2 Phone: ${masterFields.newspaper2Phone}</div>
        <div>Newspaper 2 Ad Format: ${masterFields.newspaper2AdFormat}</div>
        <div>Newspaper 2 Lead Time: ${masterFields.newspaper2LeadTime}</div>
        <div>Newspaper 2 Day Ad Runs: ${masterFields.newspaper2DayAdRuns}</div>
        <div>Newspaper 2 URL: ${masterFields.newspaper2URL}</div>
        </div>

`


let masterFieldsVerify = {}

// add an event listener to the button with the id of "reviewBtn" that will set the masterFieldsVerify object to the values of the dom elements with the same id as the key

document.getElementById("reviewBtn").addEventListener("click", function() {
  for (let key in masterFields) {
    if (document.getElementById(key)) {
      masterFieldsVerify[key] = document.getElementById(key).value
    }
  }
  console.log(masterFieldsVerify)

  // add the values of the masterFieldsVerify object to the dom element id "reviewModal" //
  document.getElementById("reviewModal").innerHTML = `
  
  <div class="border px-2 py-2 mb-2">
  <h5>County Information</h5>
  <div id="verifycountyCode">County Code: ${masterFieldsVerify.countyCode}</div>
  <div id="verifycountyName">County Name: ${masterFieldsVerify.countyName}</div>
  <div id="verifycountyStreetAddress">County Street Address: ${masterFieldsVerify.countyStreetAddress}</div>
  <div id="verifycountyCity">County City: ${masterFieldsVerify.countyCity}</div>
  <div id="verifycountyState">County State: ${masterFieldsVerify.countyState}</div>
  <div id="verifycountyZip">County Zip: ${masterFieldsVerify.countyZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Auditor Information</h5>
  <div id="verifyauditorName">Auditor Name: ${masterFieldsVerify.auditorName}</div>
  <div id="verifyauditorPhone">Auditor Phone: ${masterFieldsVerify.auditorPhone}</div>
  <div id="verifyauditorEmail">Auditor Email: ${masterFieldsVerify.auditorEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Treasurer Information</h5>
  <div id="verifytreasurerName">Treasurer Name: ${masterFieldsVerify.treasurerName}</div>
  <div id="verifytreasurerPhone">Treasurer Phone: ${masterFieldsVerify.treasurerPhone}</div>
  <div id="verifytreasurerEmail">Treasurer Email: ${masterFieldsVerify.treasurerEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Attorney Information</h5>
  <div id="verifyattorneyName">Attorney Name: ${masterFieldsVerify.attorneyName}</div>
  <div id="verifyattorneyPhone">Attorney Phone: ${masterFieldsVerify.attorneyPhone}</div>
  <div id="verifyattorneyEmail">Attorney Email: ${masterFieldsVerify.attorneyEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Commissioner Information</h5>
  <div id="verifycommissioner1Name">Commissioner 1 Name: ${masterFieldsVerify.commissioner1Name}</div>
  <div id="verifycommissioner2Name">Commissioner 2 Name: ${masterFieldsVerify.commissioner2Name}</div>
  <div id="verifycommissioner3Name">Commissioner 3 Name: ${masterFieldsVerify.commissioner3Name}</div>
  <div id="verifycommissionerPhone">Commissioner Phone: ${masterFieldsVerify.commissionerPhone}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Court House Information</h5>
  <div id="verifycourtHouseName">Court House Name: ${masterFieldsVerify.courtHouseName}</div>
  <div id="verifycourtLocation>Presiding Judge: ${masterFieldsVerify.presidingJudge}</div>
  <div id="verifypresidingJudgePhone">Presiding Judge Phone: ${masterFieldsVerify.presidingJudgePhone}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Newspaper 1 Information</h5>
  <div id="verifynewspaper1Name">Newspaper 1 Name: ${masterFieldsVerify.newspaper1Name}</div>
  <div id="verifynewspaper1Contact">Newspaper 1 Contact: ${masterFieldsVerify.newspaper1Contact}</div>
  <div id="verifynewspaper1Phone">Newspaper 1 Phone: ${masterFieldsVerify.newspaper1Phone}</div>
  <div id="verifynewspaper1AdFormat">Newspaper 1 Ad Format: ${masterFieldsVerify.newspaper1AdFormat}</div>
  <div id="verifynewspaper1LeadTime">Newspaper 1 Lead Time: ${masterFieldsVerify.newspaper1LeadTime}</div>
  <div id="verifynewspaper1DayAdRuns">Newspaper 1 Day Ad Runs: ${masterFieldsVerify.newspaper1DayAdRuns}</div>
  <div id="verifynewspaper1URL">Newspaper 1 URL: ${masterFieldsVerify.newspaper1URL}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Newspaper 2 Information</h5>
  <div id="verifyewspaper2Name">Newspaper 2 Name: ${masterFieldsVerify.newspaper2Name}</div>
  <div id="verifynewspaper2Contact">Newspaper 2 Contact: ${masterFieldsVerify.newspaper2Contact}</div>
  <div id="verifynewspaper2Phone">Newspaper 2 Phone: ${masterFieldsVerify.newspaper2Phone}</div>
  <div id="verifynewspaper2AdFormat">Newspaper 2 Ad Format: ${masterFieldsVerify.newspaper2AdFormat}</div>
  <div id="verifynewspaper2LeadTime">Newspaper 2 Lead Time: ${masterFieldsVerify.newspaper2LeadTime}</div>
  <div id="verifynewspaper2DayAdRuns">Newspaper 2 Day Ad Runs: ${masterFieldsVerify.newspaper2DayAdRuns}</div>
  <div id="verifynewspaper2URL">Newspaper 2 URL: ${masterFieldsVerify.newspaper2URL}</div>
  </div>
  `;

// compare the two objects masterFields and masterFieldsVerify and return the differences
function compareObjects(obj1, obj2) {
  let differences = {};
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      differences[key] = obj2[key];
    }
  }
  // take all values from different and highlight the dom element which is the id of verify + key
  for (let key in differences) {
    let element = document.getElementById(`verify${key}`);
    element.style.backgroundColor = "yellow";
  }

// add an approal check to the changed dom elements
  for (let key in differences) {
    let element = document.getElementById(`verify${key}`);
    element.innerHTML += `<div class="float-end">
    <label for="approve${key}">Approve</label>
    <input type="checkbox" id="approve${key}" name="approve${key}" value="approve${key} class=" ms-5">
    
    </div>`;
  }


// if all the checkboxes are checked then enable the submit button
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let submitButton = document.getElementById("approveBtn");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
   

  
  }


  );

  // if there are no checkboxes then enable the submit button
  if (checkboxes.length === 0) {
    submitButton.disabled = false;
  }

  


  
}

// add an event listener to the id approveBtn that hides the dom element reviewBtn and shows the dom element padCont
document.getElementById("approveBtn").addEventListener("click", (e) => {
  document.getElementById("reviewBtn").style.display = "none";
  document.getElementById("padCont").
  style.display = "block";
});




// add an event listener to the button signSub that shows the dom element finalsubbutn
document.getElementById("signSub").addEventListener("click", (e) => {
  document.getElementById("finalsubbtn").style.display = "block";
});





compareObjects(masterFields, masterFieldsVerify);






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



  // create a function that will take the object masterFieldsVerify, convert it to a json object then download it
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// add an event listener to the id finalsubbtn that will download the object masterFieldsVerify as a json file
document.getElementById("finalsubbtn").addEventListener("click", (e) => {
  downloadObjectAsJson(masterFieldsVerify, "masterFieldsVerify");
}
)




       
        