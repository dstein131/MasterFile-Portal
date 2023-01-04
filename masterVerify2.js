
let masterFields = {
  countyCode: "01",
  countyName: "Adams",
  countyStreetAddress: "200 S 3rd St",
  countyCity: "West Union",
  countyState: "IA",
  countyZip: "52175",
  auditorFirstName: "Jill",
  auditorLastName: "Smith",
  auditorPhone: "563-422-1234",
  auditorEmail: "jsmith@gmail.com",
  treasurerFirstName: "John",
  treasurerLastName: "Doe",
  treasurerPhone: "563-422-1234",
  treasurerEmail: "jdoe@gmail.com",
  attorneyFirstName: "Bobcat",
  attorneyLastName: "Jones",
  attorneyPhone: "563-422-1234",
  attorneyEmail: "Bjones@gmail.com",
  assessorFirstName: "Mike",
  assessorLastName: "Davis",
  assessorPhone: "563-422-1234",
  assessorEmail: "mdavis@gmail.com",
  commissioner1FirstName: "Michael",
  commissioner1LastName: "Johnson",
  commissioner1Phone: "563-422-1234",
  commissioner2FirstName: "Griffin",
  commissioner2LastName: "Anderson",
  commissioner2Phone: "563-422-1234",
  commissioner3FirstName: "David",
  commissioner3LastName: "Reed",
  commissioner3Phone: "563-422-1234",
  courtHouseName: "Adams County Courthouse",
  courtLocation: "200 S 3rd St, West Union, IA 52175",
  courtType: "Circuit",
  presidingJudgeFirstName: "Albert",
  presidingJudgeLastName: "Smith",
  presidingJudgePhone: "563-422-1234",
  newspaper1Name: "West Union Times",
  newspaper1ContactFirstName: "Zach",
  newspaper1ContactLastName: "Wylde", 
  newspaper1Phone: "563-422-1234",
  newspaper1AdFormat: "Full Page",
  newspaper1LeadTime: "2 Weeks",
  newspaper1DayAdRuns: "Monday",
  newspaper1URL: "www.westuniontimes.com",
  newspaper2Name: "Elkader Register",
  newspaper2ContactFirstName: "Zachary",
  newspaper2ContactLastName: "Smith",
  newspaper2Phone: "563-422-1234",
  newspaper2AdFormat: "Full Page",
  newspaper2LeadTime: "2 Weeks",
  newspaper2DayAdRuns: "Tuesday",
  newspaper2URL: "www.elkaderregister.com",
  saleMethod: "Online",
  salestartdatetime: "2023-01-01T12:43:44",
  saleenddatetime: "2023-05-01T14:04:03",
  salelocation: "200 S 3rd St, West Union, IA 52175",
  addcont1firstname: "John",
  addcont1lastname: "Doe",
  addcont1title: "Deputy",
  addcont1phone: "563-422-1234",
  addcont1email: "depjoe@gmail.com",
  addcont2firstname: "Jane",
  addcont2lastname: "Doe",
  addcont2title: "Sheriff",
  addcont2phone: "563-422-1234",
  addcont2email: "jdoe@hmail.biz",

  
}

if (masterFields.saleMethod === "Online") {
  document.getElementById("enddatediv").style.display = "block";
}

document.getElementById("saleMethod").addEventListener("change", (e) => {
  // if the value of saleMethod is "Online" then show the dom element id enddatediv, else hide it
  if (document.getElementById("saleMethod").value === "Online") {
    document.getElementById("enddatediv").style.display = "block";
  }
  else {
    document.getElementById("enddatediv").style.display = "none";
  }
}
);

// disable to button id approveBtn
document.getElementById("approveBtn").disabled = true



// set the dom objects matching the masterFields object keys to the values of the the dom element named the same as the key
for (let key in masterFields) {
  if (document.getElementById(key)) {
    document.getElementById(key).value = masterFields[key]
  }
}

// set the sales start date and time to the value of the masterFields object
// document.getElementById("salestartdatetime").value = masterFields.salestartedatetime


let saleStart = new Date(masterFields.salestartdatetime).toLocaleString(('en-US'))
let saleEnd = new Date(masterFields.saleenddatetime).toLocaleString(('en-US'))

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
        <div>Auditor First Name: ${masterFields.auditorFirstName}</div>
        <div>Auditor Last Name: ${masterFields.auditorLastName}</div>
        <div>Auditor Phone: ${masterFields.auditorPhone}</div>
        <div>Auditor Email: ${masterFields.auditorEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Treasurer Information</h5>
        <div>Treasurer First Name: ${masterFields.treasurerFirstName}</div>
        <div>Treasurer Last Name: ${masterFields.treasurerLastName}</div>
        <div>Treasurer Phone: ${masterFields.treasurerPhone}</div>
        <div>Treasurer Email: ${masterFields.treasurerEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Attorney Information</h5>
        <div>Attorney First Name: ${masterFields.attorneyFirstName}</div>
        <div>Attorney Last Name: ${masterFields.attorneyLastName}</div>
        <div>Attorney Phone: ${masterFields.attorneyPhone}</div>
        <div>Attorney Email: ${masterFields.attorneyEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Assessor Information</h5>
        <div>Assessor First Name: ${masterFields.assessorFirstName}</div>
        <div>Assessor Last Name: ${masterFields.assessorLastName}</div>
        <div>Assessor Phone: ${masterFields.assessorPhone}</div>
        <div>Assessor Email: ${masterFields.assessorEmail}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Commissioner Information</h5>
        <div>Commissioner 1 First Name: ${masterFields.commissioner1FirstName}</div>
        <div>Commissioner 1 Last Name: ${masterFields.commissioner1LastName}</div>
        <div>Commissioner 1 Phone: ${masterFields.commissioner1Phone}</div>
        <div>Commissioner 2 First Name: ${masterFields.commissioner2FirstName}</div>
        <div>Commissioner 2 Last Name: ${masterFields.commissioner2LastName}</div>
        <div>Commissioner 2 Phone: ${masterFields.commissioner2Phone}</div>
        <div>Commissioner 3 First Name: ${masterFields.commissioner3FirstName}</div>
        <div>Commissioner 3 Last Name: ${masterFields.commissioner3LastName}</div>
        <div>Commissioner 3 Phone: ${masterFields.commissioner3Phone}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Court House Information</h5>
        <div>Court House Name: ${masterFields.courtHouseName}</div>
        <div>Court Type: ${masterFields.courtType}</div>
        <div>Court Location: ${masterFields.courtLocation}</div>
        <div>Presiding Judge First Name: ${masterFields.presidingJudgeFirstName}</div>
        <div>Presiding Judge Last Name: ${masterFields.presidingJudgeLastName}</div>
        <div>Presiding Judge Phone: ${masterFields.presidingJudgePhone}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Sale Information</h5>
        <div>Sale Method: ${masterFields.saleMethod}</div>
        <div>Sale Start Date: ${masterFields.salestartdatetime}</div>
        <div>Sale End Date: ${masterFields.saleenddatetime}</div>
        <div>Sale Location: ${masterFields.salelocation}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Newspaper 1 Information</h5>
        <div>Newspaper 1 Name: ${masterFields.newspaper1Name}</div>
        <div>Newspaper 1 Contact First Name: ${masterFields.newspaper1ContactFirstName}</div>
        <div>Newspaper 1 Contact Last Name: ${masterFields.newspaper1ContactLastName}</div>
        <div>Newspaper 1 Phone: ${masterFields.newspaper1Phone}</div>
        <div>Newspaper 1 Ad Format: ${masterFields.newspaper1AdFormat}</div>
        <div>Newspaper 1 Lead Time: ${masterFields.newspaper1LeadTime}</div>
        <div>Newspaper 1 Day Ad Runs: ${masterFields.newspaper1DayAdRuns}</div>
        <div>Newspaper 1 URL: ${masterFields.newspaper1URL}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Newspaper 2 Information</h5>
        <div>Newspaper 2 Name: ${masterFields.newspaper2Name}</div>
        <div>Newspaper 2 Contact First Name: ${masterFields.newspaper2ContactFirstName}</div>
        <div>Newspaper 2 Contact Last Name: ${masterFields.newspaper2ContactLastName}</div>
        <div>Newspaper 2 Phone: ${masterFields.newspaper2Phone}</div>
        <div>Newspaper 2 Ad Format: ${masterFields.newspaper2AdFormat}</div>
        <div>Newspaper 2 Lead Time: ${masterFields.newspaper2LeadTime}</div>
        <div>Newspaper 2 Day Ad Runs: ${masterFields.newspaper2DayAdRuns}</div>
        <div>Newspaper 2 URL: ${masterFields.newspaper2URL}</div>
        </div>

        <div class="border px-2 py-2 mb-2">
        <h5>Additional Contact Info</h5>
        <div>Additional Contact 1 First Name: ${masterFields.addcont1firstname}</div>
        <div>Additional Contact 1 Last Name: ${masterFields.addcont1lastname}</div>
        <div>Additional Contact 1 Title: ${masterFields.addcont1title}</div>
        <div>Additional Contact 1 Phone: ${masterFields.addcont1phone}</div>
        <div>Additional Contact 1 Email: ${masterFields.addcont1email}</div>
        <div>Additional Contact 2 First Name: ${masterFields.addcont2firstname}</div>
        <div>Additional Contact 2 Last Name: ${masterFields.addcont2lastname}</div>
        <div>Additional Contact 2 Title: ${masterFields.addcont2title}</div>
        <div>Additional Contact 2 Phone: ${masterFields.addcont2phone}</div>
        <div>Additional Contact 2 Email: ${masterFields.addcont2email}</div>
 

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

//  let saleStart = new Date(masterFieldsVerify.salestartdatetime).toLocaleString(('en-US'))
//   let saleEnd = new Date(masterFieldsVerify.saleenddatetime).toLocaleString(('en-US'))




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
  <div id="verifyauditorFirstName">Auditor Name: ${masterFieldsVerify.auditorFirstName}</div>
  <div id="verifyauditorLastName">Auditor Name: ${masterFieldsVerify.auditorLastName}</div>
  <div id="verifyauditorPhone">Auditor Phone: ${masterFieldsVerify.auditorPhone}</div>
  <div id="verifyauditorEmail">Auditor Email: ${masterFieldsVerify.auditorEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Treasurer Information</h5>
  <div id="verifytreasurerFirstName">Treasurer Name: ${masterFieldsVerify.treasurerFirstName}</div>
  <div id="verifytreasurerLastName">Treasurer Name: ${masterFieldsVerify.treasurerLastName}</div>
  <div id="verifytreasurerPhone">Treasurer Phone: ${masterFieldsVerify.treasurerPhone}</div>
  <div id="verifytreasurerEmail">Treasurer Email: ${masterFieldsVerify.treasurerEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Attorney Information</h5>
  <div id="verifyattorneyFirstName">Attorney Name: ${masterFieldsVerify.attorneyFirstName}</div>
  <div id="verifyattorneyLastName">Attorney Name: ${masterFieldsVerify.attorneyLastName}</div>
  <div id="verifyattorneyPhone">Attorney Phone: ${masterFieldsVerify.attorneyPhone}</div>
  <div id="verifyattorneyEmail">Attorney Email: ${masterFieldsVerify.attorneyEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Assessor Information</h5>
  <div id="verifyassessorFirstName">Assessor Name: ${masterFieldsVerify.assessorFirstName}</div>
  <div id="verifyassessorLastName">Assessor Name: ${masterFieldsVerify.assessorLastName}</div>
  <div id="verifyassessorPhone">Assessor Phone: ${masterFieldsVerify.assessorPhone}</div>
  <div id="verifyassessorEmail">Assessor Email: ${masterFieldsVerify.assessorEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Commissioner Information</h5>
  <div id="verifycommissioner1FirstName">Commissioner 1 Name: ${masterFieldsVerify.commissioner1FirstName}</div>
  <div id="verifycommissioner1LastName">Commissioner 1 Name: ${masterFieldsVerify.commissioner1LastName}</div>
  <div id="verifycommissioner1Phone">Commissioner 1 Phone: ${masterFieldsVerify.commissioner1Phone}</div>
  <div id="verifycommissioner2FirstName">Commissioner 2 Name: ${masterFieldsVerify.commissioner2FirstName}</div>
  <div id="verifycommissioner2LastName">Commissioner 2 Name: ${masterFieldsVerify.commissioner2LastName}</div>
  <div id="verifycommissioner2Phone">Commissioner 2 Phone: ${masterFieldsVerify.commissioner2Phone}</div>
  <div id="verifycommissioner3FirstName">Commissioner 3 Name: ${masterFieldsVerify.commissioner3FirstName}</div>
  <div id="verifycommissioner3LastName">Commissioner 3 Name: ${masterFieldsVerify.commissioner3LastName}</div>
  <div id="verifycommissioner3Phone">Commissioner 3 Phone: ${masterFieldsVerify.commissioner3Phone}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Court House Information</h5>
  <div id="verifycourtHouseName">Court House Name: ${masterFieldsVerify.courtHouseName}</div>
  <div id="verifycourtType">Court Type: ${masterFieldsVerify.courtType}</div>
  <div id="verifycourtLocation">Court Location: ${masterFieldsVerify.courtLocation}</div>
  <div id="verifypresidingJudgeFirstName">Presiding Judge First Name: ${masterFieldsVerify.presidingJudgeFirstName}</div>
  <div id="verifypresidingJudgeLastName">Presiding Judge Last Name: ${masterFieldsVerify.presidingJudgeLastName}</div>
  <div id="verifypresidingJudgePhone">Presiding Judge Phone: ${masterFieldsVerify.presidingJudgePhone}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Sale Information</h5>
  <div id="verifysaleMethod">Sale Method: ${masterFieldsVerify.saleMethod}</div>
  <div id="verifysalestartdatetime">Sale Start Date/Time: ${masterFieldsVerify.salestartdatetime}</div>
  <div id="verifysaleenddatetime">Sale End Date/Time: ${masterFieldsVerify.saleenddatetime}</div>
  <div id="verifysalelocation">Sale Location: ${masterFieldsVerify.salelocation}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Newspaper 1 Information</h5>
  <div id="verifynewspaper1Name">Newspaper 1 Name: ${masterFieldsVerify.newspaper1Name}</div>
  <div id="verifynewspaper1ContactFirstName">Newspaper 1 Contact First Name: ${masterFieldsVerify.newspaper1ContactFirstName}</div>
  <div id="verifynewspaper1ContactLastName">Newspaper 1 Contact Last Name: ${masterFieldsVerify.newspaper1ContactLastName}</div>
  <div id="verifynewspaper1Phone">Newspaper 1 Phone: ${masterFieldsVerify.newspaper1Phone}</div>
  <div id="verifynewspaper1AdFormat">Newspaper 1 Ad Format: ${masterFieldsVerify.newspaper1AdFormat}</div>
  <div id="verifynewspaper1LeadTime">Newspaper 1 Lead Time: ${masterFieldsVerify.newspaper1LeadTime}</div>
  <div id="verifynewspaper1DayAdRuns">Newspaper 1 Day Ad Runs: ${masterFieldsVerify.newspaper1DayAdRuns}</div>
  <div id="verifynewspaper1URL">Newspaper 1 URL: ${masterFieldsVerify.newspaper1URL}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Newspaper 2 Information</h5>
  <div id="verifyewspaper2Name">Newspaper 2 Name: ${masterFieldsVerify.newspaper2Name}</div>
  <div id="verifynewspaper2ContactFirstName">Newspaper 2 Contact First Name: ${masterFieldsVerify.newspaper2ContactFirstName}</div>
  <div id="verifynewspaper2ContactLastName">Newspaper 2 Contact Last Name: ${masterFieldsVerify.newspaper2ContactLastName}</div>
  <div id="verifynewspaper2Phone">Newspaper 2 Phone: ${masterFieldsVerify.newspaper2Phone}</div>
  <div id="verifynewspaper2AdFormat">Newspaper 2 Ad Format: ${masterFieldsVerify.newspaper2AdFormat}</div>
  <div id="verifynewspaper2LeadTime">Newspaper 2 Lead Time: ${masterFieldsVerify.newspaper2LeadTime}</div>
  <div id="verifynewspaper2DayAdRuns">Newspaper 2 Day Ad Runs: ${masterFieldsVerify.newspaper2DayAdRuns}</div>
  <div id="verifynewspaper2URL">Newspaper 2 URL: ${masterFieldsVerify.newspaper2URL}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Additional Contact Information</h5>
  <div id="verifyaddcont1firstname">Additional Contact 1 First Name: ${masterFieldsVerify.addcont1firstname}</div>
  <div id="verifyaddcont1lastname">Additional Contact 1 Last Name: ${masterFieldsVerify.addcont1lastname}</div>
  <div id="verifyaddcont1title">Additional Contact 1 Title: ${masterFieldsVerify.addcont1title}</div>
  <div id="verifyaddcont1phone">Additional Contact 1 Phone: ${masterFieldsVerify.addcont1phone}</div>
  <div id="verifyaddcont1email">Additional Contact 1 Email: ${masterFieldsVerify.addcont1email}</div>
  <div id="verifyaddcont2firstname">Additional Contact 2 First Name: ${masterFieldsVerify.addcont2firstname}</div>
  <div id="verifyaddcont2lastname">Additional Contact 2 Last Name: ${masterFieldsVerify.addcont2lastname}</div>
  <div id="verifyaddcont2title">Additional Contact 2 Title: ${masterFieldsVerify.addcont2title}</div>
  <div id="verifyaddcont2phone">Additional Contact 2 Phone: ${masterFieldsVerify.addcont2phone}</div>
  <div id="verifyaddcont2email">Additional Contact 2 Email: ${masterFieldsVerify.addcont2email}</div>

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
    element.innerHTML += `<div class="float-end checkcont">
    <label for="approve${key}">Approve</label>
    <input type="checkbox" id="approve${key}" name="approve${key}" value="approve${key} class=" ms-5">
    
    </div>`;
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

// add an event listner to the body for each time a checkbox is clicked
document.body.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
     // create an array of all the checkboxes
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // create a variable to hold the number of checked checkboxes
    let checked = 0;
    // loop through the checkboxes and if they are checked add 1 to the checked variable
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checked++;
      }
    }
    )
    // if the number of checked checkboxes is equal to the number of checkboxes then enable the submit button
    if (checked === checkboxes.length) {
      document.getElementById("approveBtn").disabled = false;
    }
  }
}
)



// add an event listen to the id reviewBtn that when clicked, if there are no checkboxes then enable the submit button
document.getElementById("reviewBtn").addEventListener("click", (e) => {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (checkboxes.length === 0) {
    document.getElementById("approveBtn").disabled = false;
  }
}
)


       


// create clear function that will revert the dom to its original state
function clear() {
  // hide the dom element padCont
  document.getElementById("padCont").style.display = "none";
  // hide the dom element finalsubbtn
  document.getElementById("finalsubbtn").style.display = "none";
// set the input fields back to their original values
for (let key in masterFields) {
  if (document.getElementById(key)) {
    document.getElementById(key).value = masterFields[key]
  }
}
// clear out the masterFieldsVerify object
masterFieldsVerify = {};
// remove all elements with the classname checkcont
let checkcont = document.getElementsByClassName("checkcont");
while (checkcont.length > 0) {
  checkcont[0].parentNode.removeChild(checkcont[0]);
}

// show the review button
document.getElementById("reviewBtn").style.display = "block";

// navigate to the tab id pills-home-tab
document.getElementById("pills-home-tab").click();

}

  
// add an event listener to the id clearBtn that will call the clear function
document.getElementById("clearBtn").addEventListener("click", (e) => {
  clear();
}

)


  
// add an event listener to the id saleMethod that if it's value is "Online" then set the value of the id's saleStreetAddress, saleCity, saleState, saleZip to the value of "Online - Zeus"

document.getElementById("saleMethod").addEventListener("change", (e) => {
  if (e.target.value === "Online") {
    document.getElementById("saleStreetAddress").value = "Online - Zeus";
    document.getElementById("saleCity").value = "Online - Zeus";
    document.getElementById("saleState").value = "Online - Zeus";
    document.getElementById("saleZip").value = "Online - Zeus";
  }
}
)

// add an event listen to the id addcontBtn that will add a new container to the dom id addcontwrapper
// add the numinical id's for each id of each input field
// add a delete button to each container thats deletes addcont${addcontwrapper.childElementCount + 1}

document.getElementById("addcontBtn").addEventListener("click", (e) => {
  let addcontwrapper = document.getElementById("addcontwrapper");
  let addcont = document.createElement("div");
  addcont.id = `addcont${addcontwrapper.childElementCount + 1}`;
  addcont.className = "addcont d-flex flex-wrap flex-row justify-content-center align-items-center border border-dark mb-3";
  addcont.innerHTML = `
  
  
  <div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}FirstName"><small>Additional Contact ${addcontwrapper.childElementCount + 1} First Name</small> </label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}FirstName" placeholder="Additional Contact 1 ${addcontwrapper.childElementCount + 1} FirstName">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}LastName"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Last Name</small> </label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}LastName" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Last Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}Phone"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Phone </small></label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}Phone" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Phone">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}Email"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Email </small></label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}Email" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Email">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}Title"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Title</small> </label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}Title" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Title">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}Department"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Department </small></label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}Department" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Department">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}StreetAddress"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Street Address </small></label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}StreetAddress" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Street Address">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}City"><small>Additional Contact ${addcontwrapper.childElementCount + 1} City</small> </label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}City" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} City">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}State"><small>Additional Contact ${addcontwrapper.childElementCount + 1} State</small> </label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}State" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} State">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}Zip"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Zip</small> </label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}Zip" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Zip">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${addcontwrapper.childElementCount + 1}Notes"><small>Additional Contact ${addcontwrapper.childElementCount + 1} Notes </small></label>
  <input type="text" class="form-control" id="additionalContact${addcontwrapper.childElementCount + 1}Notes" placeholder="Additional Contact ${addcontwrapper.childElementCount + 1} Notes">
</div>
<div class="w-100 d-flex flex-wrap flex-row justify-content-center align-items-center mb-2">
<button type="button" class="btn btn-danger" id="deleteBtn${addcontwrapper.childElementCount + 1}">Delete Contact ${addcontwrapper.childElementCount + 1}</button>

</div>`;
  addcontwrapper.appendChild(addcont);
  document.getElementById(`deleteBtn${addcontwrapper.childElementCount}`).addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
  }
  )
}
)


// add an event listern to the id addnewsBtn that will add a new container to the dom with the id newscontwrapper
// add the numinical id's for each id of each input field
// add a delete button to each container thats deletes the container

document.getElementById("addnewsBtn").addEventListener("click", () => {
  let newscontwrapper = document.getElementById("newscontwrapper");
  let newscont = document.createElement("div");
  newscont.setAttribute("id", `newscont${newscontwrapper.childElementCount + 1}`);
  newscont.className = "addcont d-flex flex-wrap flex-row justify-content-center align-items-center border border-dark mb-3";
  newscont.innerHTML = `
  
  
  <div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}Name"><small>Newspaper ${newscontwrapper.childElementCount + 1} Name</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}Name" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}FirstName"><small>Newspaper ${newscontwrapper.childElementCount + 1} First Name</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}FirstName" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} First Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}LastName"><small>Newspaper ${newscontwrapper.childElementCount + 1} Last Name</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}LastName" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Last Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}Phone"><small>Newspaper ${newscontwrapper.childElementCount + 1} Phone</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}Phone" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Phone">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}AdFormat"><small>Newspaper ${newscontwrapper.childElementCount + 1} Ad Format</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}AdFormat" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Ad Format">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">  
  <label for="news${newscontwrapper.childElementCount + 1}LeadTime"><small>Newspaper ${newscontwrapper.childElementCount + 1} Lead Time</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}LeadTime" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Lead Time">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}DayAdRuns"><small>Newspaper ${newscontwrapper.childElementCount + 1} Day Ad Runs</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}DayAdRuns" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Day Ad Runs">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${newscontwrapper.childElementCount + 1}URL"><small>Newspaper ${newscontwrapper.childElementCount + 1} URL</small> </label>
  <input type="text" class="form-control" id="news${newscontwrapper.childElementCount + 1}URL" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} URL">
</div>
<div class="w-100 d-flex flex-wrap flex-row justify-content-center align-items-center mb-2">
<button type="button" class="btn btn-danger \ " id="deleteBtn${newscontwrapper.childElementCount + 1}">Delete News ${newscontwrapper.childElementCount + 1}</button>
</div>
`;
  newscontwrapper.appendChild(newscont);
  document.getElementById(`deleteBtn${newscontwrapper.childElementCount}`).addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
  }
  )
}
)


