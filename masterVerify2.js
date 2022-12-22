
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