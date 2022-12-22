
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

// set the dom objects matching the masterFields object keys to the values of the the dom element named the same as the key
for (let key in masterFields) {
  if (document.getElementById(key)) {
    document.getElementById(key).value = masterFields[key]
  }
}




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


       
        