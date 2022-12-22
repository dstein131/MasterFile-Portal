
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