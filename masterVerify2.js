let masterFields = {
  countyCode: "01",
  countyName: "Adams",
  countyStreetAddress: "200 S 3rd St",
  countyCity: "West Union",
  countyState: "IA",
  countyZip: "52175",
  auditorFirstName: "Jill",
  auditorLastName: "Smith",
  auditorStreetAddress: "200 S 3rd St",
  auditorCity: "West Union",
  auditorState: "IA",
  auditorZip: "52175",
  auditorPhone: "563-422-1234",
  auditorEmail: "jsmith@gmail.com",
  treasurerFirstName: "John",
  treasurerLastName: "Doe",
  treasurerStreetAddress: "200 S 3rd St",
  treasurerCity: "West Union",
  treasurerState: "IA",
  treasurerZip: "52175",
  treasurerPhone: "563-422-1234",
  treasurerEmail: "jdoe@gmail.com",
  attorneyFirstName: "Bobcat",
  attorneyLastName: "Jones",
  attorneyPhone: "563-422-1234",
  attorneyEmail: "Bjones@gmail.com",
  attorneyStreetAddress: "200 S 3rd St",
  attorneyCity: "West Union",
  attorneyState: "IA",
  attorneyZip: "52175",
  assessorFirstName: "Mike",
  assessorLastName: "Davis",
  assessorPhone: "563-422-1234",
  assessorEmail: "mdavis@gmail.com",
  assessorStreetAddress: "200 S 3rd St",
  assessorCity: "West Union",
  assessorState: "IA",
  assessorZip: "52175",
  commissioner1FirstName: "Michael",
  commissioner1LastName: "Johnson",
  commissioner1Phone: "563-422-1234",
  commissioner1Email: "md@sdasd.net",
  commissioner1StreetAddress: "200 S 3rd St",
  commissioner1City: "West Union",
  commissioner1State: "IA",
  commissioner1Zip: "52175",
  commissioner2FirstName: "Griffin",
  commissioner2LastName: "Anderson",
  commissioner2Phone: "563-422-1234",
  commissioner2Email: "yes@no.com",
  commissioner2StreetAddress: "200 S 3rd St",
  commissioner2City: "West Union",
  commissioner2State: "IA",
  commissioner2Zip: "52175",
  commissioner3FirstName: "David",
  commissioner3LastName: "Reed",
  commissioner3Phone: "563-422-1234",
  commissioner3Email: "1234@4543.edu",
  commissioner3StreetAddress: "200 S 3rd St",
  commissioner3City: "West Union",
  commissioner3State: "IA",
  commissioner3Zip: "52175",
  courtHouseName: "Adams County Courthouse",
  courtSteetAddress: "200 S 3rd St",
  courtCity: "West Union",
  courtState: "IA",
  courtZip: "52175",
  courtType: "Circuit",
  clerkFirstName: "John",
  clerkLastName: "Doe",
  clerkPhone: "563-422-1234",
  clerkEmail: "clerk@hellokitty.org",
  clerkStreetAddress: "200 S 3rd St",
  clerkCity: "West Union",
  clerkState: "IA",
  clerkZip: "52175",
  compSys: "LOW",
  countyWebUrl: "www.adamscounty.org",
  presidingJudgeFirstName: "Albert",
  presidingJudgeLastName: "Smith",
  presidingJudgePhone: "563-422-1234",
  presidingJudgeEmail: "judge@judgeymcjudge.gov",
  newspaper1Name: "West Union Times",
  newspaper1ContactFirstName: "Zach",
  newspaper1ContactLastName: "Wylde",
  newspaper1Phone: "563-422-1234",
  newspaper1AdFormat: "Full Page",
  newspaper1LeadTime: "2 Weeks",
  newspaper1DayAdRuns: "Monday",
  newspaper1URL: "www.westuniontimes.com",
  saleMethod: "Online",
  salestartdatetime: "2023-01-01T12:43:44",
  saleenddatetime: "2023-05-01T14:04:03",
  saleStreetAddress: "Online - Zeus",
  saleCity: "Online - Zeus",
  saleState: "Online - Zeus",
  saleZip: "Online - Zeus",
  sheriffFirstName: "Jane",
  sheriffLastName: "Doe",
  sheriffPhone: "563-422-1234",
  sheriffEmail: "jd@iamlaw.ru",
  sheriffStreetAddress: "200 S 3rd St",
  sheriffCity: "West Union",
  sheriffState: "IA",
  sheriffZip: "52175",
  sheriffAddContactFirstName: "John",
  sheriffAddContactLastName: "Doe",
  sheriffAddContactTitle: "Deputy",
  sheriffAddContactOrganization: "Sheriff's Office",
  sheriffAddContactPhone: "563-422-1234",
  sheriffAddContactEmail: "depbigguy@hellokitty.net",
  sheriffAddContactStreetAddress: "200 S 3rd St",
  sheriffAddContactCity: "West Union",
  sheriffAddContactState: "IA",
  sheriffAddContactZip: "52175",
  paymentStreetAddress: "200 S 3rd St",
  paymentCity: "West Union",
  paymentState: "IA",
  paymentZip: "52175",
  paymentCutoffDateTime: "2023-01-01T12:43:44",
  unsoldBatch: "",
  dynamicEnding: "",
  numBatches: "",
  unsoldStartBatch: "",
  unsoldEndBatch: "",
  withinMinutes: "",
  extendMinutes: "",
};

const states = {
  Indiana: {
    counties: [
      "Adams",
      "Allen",
      "Bartholomew",
      "Benton",
      "Blackford",
      "Boone",
      "Brown",
      "Carroll",
      "Cass",
      "Clark",
      "Clay",
      "Clinton",
      "Crawford",
      "Daviess",
      "Dearborn",
      "Decatur",
      "DeKalb",
      "Delaware",
      "Dubois",
      "Elkhart",
      "Fayette",
      "Floyd",
      "Fountain",
      "Franklin",
      "Fulton",
      "Gibson",
      "Grant",
      "Greene",
      "Hamilton",
      "Hancock",
      "Harrison",
      "Hendricks",
      "Henry",
      "Howard",
      "Huntington",
      "Jackson",
      "Jasper",
      "Jay",
      "Jefferson",
      "Jennings",
      "Johnson",
      "Knox",
      "Kosciusko",
      "LaGrange",
      "LaPorte",
      "Lake",
      "Lawrence",
      "Madison",
      "Marion",
      "Marshall",
      "Martin",
      "Miami",
      "Monroe",
      "Montgomery",
      "Morgan",
      "Newton",
      "Noble",
      "Ohio",
      "Orange",
      "Owen",
      "Parke",
      "Perry",
      "Pike",
      "Porter",
      "Posey",
      "Pulaski",
      "Putnam",
      "Randolph",
      "Ripley",
      "Rush",
      "St. Joseph",
      "Scott",
      "Shelby",
      "Spencer",
      "Starke",
      "Steuben",
      "Sullivan",
      "Switzerland",
      "Tippecanoe",
      "Tipton",
      "Union",
      "Vanderburgh",
      "Vermillion",
      "Vigo",
      "Wabash",
      "Warren",
      "Warrick",
      "Washington",
      "Wayne",
      "Wells",
      "White",
      "Whitley",
    ],
  },
  Florida: {
    counties: [
      "Alachua",
      "Baker",
      "Bay",
      "Bradford",
      "Brevard",
      "Broward",
      "Calhoun",
      "Charlotte",
      "Citrus",
      "Clay",
      "Collier",
      "Columbia",
      "DeSoto",
      "Dixie",
      "Duval",
      "Escambia",
      "Flagler",
      "Franklin",
      "Gadsden",
      "Gilchrist",
      "Glades",
      "Gulf",
      "Hamilton",
      "Hardee",
      "Hendry",
      "Hernando",
      "Highlands",
      "Hillsborough",
      "Holmes",
      "Indian River",
      "Jackson",
      "Jefferson",
      "Lafayette",
      "Lake",
      "Lee",
      "Leon",
      "Levy",
      "Liberty",
      "Madison",
      "Manatee",
      "Marion",
      "Martin",
      "Miami-Dade",
      "Monroe",
      "Nassau",
      "Okaloosa",
      "Okeechobee",
      "Orange",
      "Osceola",
      "Palm Beach",
      "Pasco",
      "Pinellas",
      "Polk",
      "Putnam",
      "Santa Rosa",
      "Sarasota",
      "Seminole",
      "St. Johns",
      "St. Lucie",
      "Sumter",
      "Suwannee",
      "Taylor",
      "Union",
      "Volusia",
      "Wakulla",
      "Walton",
      "Washington",
    ],
  },
  Louisiana: {
    counties: [
      "Acadia",
      "Allen",
      "Ascension",
      "Assumption",
      "Avoyelles",
      "Beauregard",
      "Bienville",
      "Bossier",
      "Caddo",
      "Calcasieu",
      "Caldwell",
      "Cameron",
      "Catahoula",
      "Claiborne",
      "Concordia",
      "De Soto",
      "East Baton Rouge",
      "East Carroll",
      "East Feliciana",
      "Evangeline",
      "Franklin",
      "Grant",
      "Iberia",
      "Iberville",
      "Jackson",
      "Jefferson",
      "Jefferson Davis",
      "Lafayette",
      "Lafourche",
      "LaSalle",
      "Lincoln",
      "Livingston",
      "Madison",
      "Morehouse",
      "Natchitoches",
      "Orleans",
      "Ouachita",
      "Plaquemines",
      "Pointe Coupee",
      "Rapides",
      "Red River",
      "Richland",
      "Sabine",
      "St. Bernard",
      "St. Charles",
      "St. Helena",
      "St. James",
      "St. John the Baptist",
      "St. Landry",
      "St. Martin",
      "St. Mary",
      "St. Tammany",
      "Tangipahoa",
      "Tensas",
      "Terrebonne",
      "Union",
      "Vermilion",
      "Vernon",
      "Washington",
      "Webster",
      "West Baton Rouge",
      "West Carroll",
      "West Feliciana",
      "Winn",
    ],
  },
  Colorado: {
    counties: [
      "Adams",
      "Alamosa",
      "Arapahoe",
      "Archuleta",
      "Baca",
      "Bent",
      "Boulder",
      "Broomfield",
      "Chaffee",
      "Cheyenne",
      "Clear Creek",
      "Conejos",
      "Costilla",
      "Crowley",
      "Custer",
      "Delta",
      "Denver",
      "Dolores",
      "Douglas",
      "Eagle",
      "El Paso",
      "Elbert",
      "Fremont",
      "Garfield",
      "Gilpin",
      "Grand",
      "Gunnison",
      "Hinsdale",
      "Huerfano",
      "Jackson",
      "Jefferson",
      "Kiowa",
      "Kit Carson",
      "Lake",
      "La Plata",
      "Larimer",
      "Las Animas",
      "Lincoln",
      "Logan",
      "Mesa",
      "Mineral",
      "Moffat",
      "Montezuma",
      "Montrose",
      "Morgan",
      "Otero",
      "Ouray",
      "Park",
      "Phillips",
      "Pitkin",
      "Prowers",
      "Pueblo",
      "Rio Blanco",
      "Rio Grande",
      "Routt",
      "Saguache",
      "San Juan",
      "San Miguel",
      "Sedgwick",
      "Summit",
      "Teller",
      "Washington",
      "Weld",
      "Yuma",
    ],
  },
};

let batchAmount = 0;
let masterFieldsVerify = {};
let newValues = {};
let addContAmount = 0;
let newsCont = 1;

/// adding outlines to the pills as per brad's request
document.querySelectorAll(".nav-link").forEach((item) => {
  item.classList.add("border", "px-3", "py-1", "mx-1", "my-1");
  // if the id is pills-review-tab then change the color to green, text to white, and add a checkmark icon
  if (item.id === "pills-review-tab") {
    item.classList.add("bg-success", "text-white");
  }
});

// add an event listener to all master-input class elements
document.querySelectorAll(".master-input").forEach((el) => {
  el.addEventListener("change", (e) => {
    // if the value of the input is equal to the value of the masterFields key with the same name, remove the badge next to the label
    if (e.target.value === masterFields[e.target.id]) {
      let label = document.querySelector(`label[for="${e.target.id}"]`);
      let span = label.querySelector("span");
      // if there is a span next to the label, remove it
      if (span) {
        label.removeChild(span);
      }
      // check if there are any more spans next to the label if so, remove them using while loop
      while (label.querySelector("span")) {
        let span = label.querySelector("span");
        label.removeChild(span);
      }
    } else {
      // add a span after the inputs associated label
      let label = document.querySelector(`label[for="${e.target.id}"]`);
      // add a span after the label
      let span = document.createElement("span");
      // if there are no spans next to the label, add the span with the badge class
      if (!label.querySelector("span")) {
        span.innerHTML = `<span class="badge ms-2 mb-1 mt-0 py-0 px-0 bg-warning text-dark">Changed</span>`;
        label.appendChild(span);
      }
    }
  });
});

document.getElementById("saleMethod").addEventListener("change", (e) => {
  // if the value of saleMethod is "Online" then show the dom element id enddatediv, else hide it
  if (document.getElementById("saleMethod").value === "Online") {
    document.getElementById("enddatediv").style.display = "block";
  } else {
    document.getElementById("enddatediv").style.display = "none";
  }
});
// set the dom objects matching the masterFields object keys to the values of the the dom element named the same as the key
for (let key in masterFields) {
  if (document.getElementById(key)) {
    document.getElementById(key).value = masterFields[key];
  }
}

// set the sales start date and time to the value of the masterFields object
let saleStart = new Date(masterFields.salestartdatetime).toLocaleString(
  "en-US"
);
let saleEnd = new Date(masterFields.saleenddatetime).toLocaleString("en-US");

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
        </div>
`;

// add an event listener to the button with the id of "reviewBtn" that will set the masterFieldsVerify object to the values of the dom elements with the same id as the keys in the masterFieldsVerify object //
document.getElementById("reviewBtn").addEventListener("click", function () {
  let drop = document.getElementsByClassName("master-input");
  for (let i = 0; i < drop.length; i++) {
    masterFieldsVerify[drop[i].id] = drop[i].value;
  }
  console.log(masterFieldsVerify);

  // function addMasterFields() {
  //   // loops through masterFieldsVerify and adds them to the dom element id newTest
  //   // compares the value of masterFieldsVerify to the value of masterFields
  //   // if there is an item that does exists in masterfieldsVerify but not masterfields, make the background of the div green
  //   // if the values are different, make the background of the div yellow

  //   // sort masterfieldsVerify by key
  //   masterFieldsVerify = Object.keys(masterFieldsVerify)
  //     .sort()
  //     .reduce((r, k) => ((r[k] = masterFieldsVerify[k]), r), {})
  //   console.log(masterFieldsVerify)

  //   // clear the dom element id "reviewModal"
  //   document.getElementById("reviewModal").innerHTML = ""

  //   for (let key in masterFieldsVerify) {
  //     if (masterFieldsVerify[key] === masterFields[key]) {
  //       document.getElementById("reviewModal").innerHTML += `
  //       <div class="border px-2 py-2 mb-2">
  //       <div>${key}: ${masterFieldsVerify[key]}</div>
  //       </div>
  //       `
  //     } else {
  //       document.getElementById("reviewModal").innerHTML += `
  //       <div class="border px-2 py-2 mb-2" style="background-color: yellow;">
  //       <div>${key}: ${masterFieldsVerify[key]}</div>
  //       </div>
  //       `
  //     }
  //   }

  // }

  // addMasterFields()

  // *** REVIEW MODAL *** //

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
  <div id="verifyauditorStreetAddress">Auditor Street Address: ${masterFieldsVerify.auditorStreetAddress}</div>
  <div id="verifyauditorCity">Auditor City: ${masterFieldsVerify.auditorCity}</div>
  <div id="verifyauditorState">Auditor State: ${masterFieldsVerify.auditorState}</div>
  <div id="verifyauditorZip">Auditor Zip: ${masterFieldsVerify.auditorZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Treasurer Information</h5>
  <div id="verifytreasurerFirstName">Treasurer Name: ${masterFieldsVerify.treasurerFirstName}</div>
  <div id="verifytreasurerLastName">Treasurer Name: ${masterFieldsVerify.treasurerLastName}</div>
  <div id="verifytreasurerPhone">Treasurer Phone: ${masterFieldsVerify.treasurerPhone}</div>
  <div id="verifytreasurerEmail">Treasurer Email: ${masterFieldsVerify.treasurerEmail}</div>
  <div id="verifytreasurerStreetAddress">Treasurer Street Address: ${masterFieldsVerify.treasurerStreetAddress}</div>
  <div id="verifytreasurerCity">Treasurer City: ${masterFieldsVerify.treasurerCity}</div>
  <div id="verifytreasurerState">Treasurer State: ${masterFieldsVerify.treasurerState}</div>
  <div id="verifytreasurerZip">Treasurer Zip: ${masterFieldsVerify.treasurerZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2" id="attverdiv">
  <h5>Attorney Information</h5>
  <div id="verifyattorneyFirstName">Attorney Name: ${masterFieldsVerify.attorneyFirstName}</div>
  <div id="verifyattorneyLastName">Attorney Name: ${masterFieldsVerify.attorneyLastName}</div>
  <div id="verifyattorneyPhone">Attorney Phone: ${masterFieldsVerify.attorneyPhone}</div>
  <div id="verifyattorneyEmail">Attorney Email: ${masterFieldsVerify.attorneyEmail}</div>
  <div id="verifyattorneyStreetAddress">Attorney Street Address: ${masterFieldsVerify.attorneyStreetAddress}</div>
  <div id="verifyattorneyCity">Attorney City: ${masterFieldsVerify.attorneyCity}</div>
  <div id="verifyattorneyState">Attorney State: ${masterFieldsVerify.attorneyState}</div>
  <div id="verifyattorneyZip">Attorney Zip: ${masterFieldsVerify.attorneyZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Assessor Information</h5>
  <div id="verifyassessorFirstName">Assessor Name: ${masterFieldsVerify.assessorFirstName}</div>
  <div id="verifyassessorLastName">Assessor Name: ${masterFieldsVerify.assessorLastName}</div>
  <div id="verifyassessorPhone">Assessor Phone: ${masterFieldsVerify.assessorPhone}</div>
  <div id="verifyassessorEmail">Assessor Email: ${masterFieldsVerify.assessorEmail}</div>
  <div id="verifyassessorStreetAddress">Assessor Street Address: ${masterFieldsVerify.assessorStreetAddress}</div>
  <div id="verifyassessorCity">Assessor City: ${masterFieldsVerify.assessorCity}</div>
  <div id="verifyassessorState">Assessor State: ${masterFieldsVerify.assessorState}</div>
  <div id="verifyassessorZip">Assessor Zip: ${masterFieldsVerify.assessorZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Commissioner 1 Information</h5>
  <div id="verifycommissioner1FirstName">Commissioner 1 Name: ${masterFieldsVerify.commissioner1FirstName}</div>
  <div id="verifycommissioner1LastName">Commissioner 1 Name: ${masterFieldsVerify.commissioner1LastName}</div>
  <div id="verifycommissioner1Phone">Commissioner 1 Phone: ${masterFieldsVerify.commissioner1Phone}</div>
  <div id="verifycommissioner1Email">Commissioner 1 Email: ${masterFieldsVerify.commissioner1Email}</div>
  <div id="verifycommissioner1StreetAddress">Commissioner 1 Street Address: ${masterFieldsVerify.commissioner1StreetAddress}</div>
  <div id="verifycommissioner1City">Commissioner 1 City: ${masterFieldsVerify.commissioner1City}</div>
  <div id="verifycommissioner1State">Commissioner 1 State: ${masterFieldsVerify.commissioner1State}</div>
  <div id="verifycommissioner1Zip">Commissioner 1 Zip: ${masterFieldsVerify.commissioner1Zip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Commissioner 2 Information</h5>
  <div id="verifycommissioner2FirstName">Commissioner 2 Name: ${masterFieldsVerify.commissioner2FirstName}</div>
  <div id="verifycommissioner2LastName">Commissioner 2 Name: ${masterFieldsVerify.commissioner2LastName}</div>
  <div id="verifycommissioner2Phone">Commissioner 2 Phone: ${masterFieldsVerify.commissioner2Phone}</div>
  <div id="verifycommissioner2Email">Commissioner 2 Email: ${masterFieldsVerify.commissioner2Email}</div>
  <div id="verifycommissioner2StreetAddress">Commissioner 2 Street Address: ${masterFieldsVerify.commissioner2StreetAddress}</div>
  <div id="verifycommissioner2City">Commissioner 2 City: ${masterFieldsVerify.commissioner2City}</div>
  <div id="verifycommissioner2State">Commissioner 2 State: ${masterFieldsVerify.commissioner2State}</div>
  <div id="verifycommissioner2Zip">Commissioner 2 Zip: ${masterFieldsVerify.commissioner2Zip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Commissioner 3 Information</h5>
  <div id="verifycommissioner3FirstName">Commissioner 3 Name: ${masterFieldsVerify.commissioner3FirstName}</div>
  <div id="verifycommissioner3LastName">Commissioner 3 Name: ${masterFieldsVerify.commissioner3LastName}</div>
  <div id="verifycommissioner3Phone">Commissioner 3 Phone: ${masterFieldsVerify.commissioner3Phone}</div>
  <div id="verifycommissioner3Email">Commissioner 3 Email: ${masterFieldsVerify.commissioner3Email}</div>
  <div id="verifycommissioner3StreetAddress">Commissioner 3 Street Address: ${masterFieldsVerify.commissioner3StreetAddress}</div>
  <div id="verifycommissioner3City">Commissioner 3 City: ${masterFieldsVerify.commissioner3City}</div>
  <div id="verifycommissioner3State">Commissioner 3 State: ${masterFieldsVerify.commissioner3State}</div>
  <div id="verifycommissioner3Zip">Commissioner 3 Zip: ${masterFieldsVerify.commissioner3Zip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Court House Information</h5>
  <div id="verifycourtHouseName">Court House Name: ${masterFieldsVerify.courtHouseName}</div>
  <div id="verifycourtType">Court Type: ${masterFieldsVerify.courtType}</div>
  <div id="verifycourtSteetAddress">Court Street Address: ${masterFieldsVerify.courtSteetAddress}</div>
  <div id="verifycourtCity">Court City: ${masterFieldsVerify.courtCity}</div>
  <div id="verifycourtState">Court State: ${masterFieldsVerify.courtState}</div>
  <div id="verifycourtZip">Court Zip: ${masterFieldsVerify.courtZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Presiding Judge Information</h5>
  <div id="verifypresidingJudgeFirstName">Presiding Judge First Name: ${masterFieldsVerify.presidingJudgeFirstName}</div>
  <div id="verifypresidingJudgeLastName">Presiding Judge Last Name: ${masterFieldsVerify.presidingJudgeLastName}</div>
  <div id="verifypresidingJudgePhone">Presiding Judge Phone: ${masterFieldsVerify.presidingJudgePhone}</div>
  <div id="verifypresidingJudgeEmail">Presiding Judge Email: ${masterFieldsVerify.presidingJudgeEmail}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Clerk Information</h5>
  <div id="verifyclerkFirstName">Clerk First Name: ${masterFieldsVerify.clerkFirstName}</div>
  <div id="verifyclerkLastName">Clerk Last Name: ${masterFieldsVerify.clerkLastName}</div>
  <div id="verifyclerkPhone">Clerk Phone: ${masterFieldsVerify.clerkPhone}</div>
  <div id="verifyclerkEmail">Clerk Email: ${masterFieldsVerify.clerkEmail}</div>
  <div id="verifyclerkStreetAddress">Clerk Street Address: ${masterFieldsVerify.clerkStreetAddress}</div>
  <div id="verifyclerkCity">Clerk City: ${masterFieldsVerify.clerkCity}</div>
  <div id="verifyclerkState">Clerk State: ${masterFieldsVerify.clerkState}</div>
  <div id="verifyclerkZip">Clerk Zip: ${masterFieldsVerify.clerkZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Sheriff Information</h5>
  <div id="verifysheriffFirstName">Sheriff First Name: ${masterFieldsVerify.sheriffFirstName}</div>
  <div id="verifysheriffLastName">Sheriff Last Name: ${masterFieldsVerify.sheriffLastName}</div>
  <div id="verifysheriffPhone">Sheriff Phone: ${masterFieldsVerify.sheriffPhone}</div>
  <div id="verifysheriffEmail">Sheriff Email: ${masterFieldsVerify.sheriffEmail}</div>
  <div id="verifysheriffStreetAddress">Sheriff Street Address: ${masterFieldsVerify.sheriffStreetAddress}</div>
  <div id="verifysheriffCity">Sheriff City: ${masterFieldsVerify.sheriffCity}</div>
  <div id="verifysheriffState">Sheriff State: ${masterFieldsVerify.sheriffState}</div>
  <div id="verifysheriffZip">Sheriff Zip: ${masterFieldsVerify.sheriffZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Sherrif's Additional Contact Information</h5>
  <div id="verifysheriffAddContactFirstName">Sheriff's Additional Contact First Name: ${masterFieldsVerify.sheriffAddContactFirstName}</div>
  <div id="verifysheriffAddContactLastName">Sheriff's Additional Contact Last Name: ${masterFieldsVerify.sheriffAddContactLastName}</div>
  <div id="verifysheriffAddContactTitle">Sheriff's Additional Contact Title: ${masterFieldsVerify.sheriffAddContactTitle}</div>
  <div id="verifysheriffAddContactOrganization">Sheriff's Additional Contact Organization: ${masterFieldsVerify.sheriffAddContactOrganization}</div>
  <div id="verifysheriffAddContactPhone">Sheriff's Additional Contact Phone: ${masterFieldsVerify.sheriffAddContactPhone}</div>
  <div id="verifysheriffAddContactEmail">Sheriff's Additional Contact Email: ${masterFieldsVerify.sheriffAddContactEmail}</div>
  <div id="verifysheriffAddContactStreetAddress">Sheriff's Additional Contact Street Address: ${masterFieldsVerify.sheriffAddContactStreetAddress}</div>
  <div id="verifysheriffAddContactCity">Sheriff's Additional Contact City: ${masterFieldsVerify.sheriffAddContactCity}</div>
  <div id="verifysheriffAddContactState">Sheriff's Additional Contact State: ${masterFieldsVerify.sheriffAddContactState}</div>
  <div id="verifysheriffAddContactZip">Sheriff's Additional Contact Zip: ${masterFieldsVerify.sheriffAddContactZip}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Sale Information</h5>
  <div id="verifysaleMethod">Sale Method: ${masterFieldsVerify.saleMethod}</div>
  <div id="verifysalestartdatetime">Sale Start Date/Time: ${masterFieldsVerify.salestartdatetime}</div>
  <div id="verifysaleenddatetime">Sale End Date/Time: ${masterFieldsVerify.saleenddatetime}</div>
  <div id="verifysaleStreetAddress">Sale Street Address: ${masterFieldsVerify.saleStreetAddress}</div>
  <div id="verifysaleCity">Sale City: ${masterFieldsVerify.saleCity}</div>
  <div id="verifysaleState">Sale State: ${masterFieldsVerify.saleState}</div>
  <div id="verifysaleZip">Sale Zip: ${masterFieldsVerify.saleZip}</div>
  <div id="verifypaymentStreetAddress">Payment Street Address: ${masterFieldsVerify.paymentStreetAddress}</div>
  <div id="verifypaymentCity">Payment City: ${masterFieldsVerify.paymentCity}</div>
  <div id="verifypaymentState">Payment State: ${masterFieldsVerify.paymentState}</div>
  <div id="verifypaymentZip">Payment Zip: ${masterFieldsVerify.paymentZip}</div>
  <div id="verifypaymentCutoffDateTime">Payment Cutoff Date/Time: ${masterFieldsVerify.paymentCutoffDateTime}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Sale Options</h5>
  <div id="verifydynamicEndings">Dynamic Endings: ${masterFieldsVerify.dynamicEnding}</div>
  <div id="verifywithinMinutes">Within Minutes: ${masterFieldsVerify.withinMinutes}</div>
  <div id="verifyextendMinutes">Extend Minutes: ${masterFieldsVerify.extendMinutes}</div>
  <div id="verifyunsoldBatch">Unsold Batch: ${masterFieldsVerify.unsoldBatch}</div>
  <div id="verifyunsoldStartBatch">Unsold Batch Start: ${masterFieldsVerify.unsoldStartBatch}</div>
  <div id="verifyunsoldEndBatch">Unsold Batch End: ${masterFieldsVerify.unsoldEndBatch}</div>
  </div>

  <div class="border px-2 py-2 mb-2">
  <h5>Website Information</h5>
  <div id="verifycompSys">Computer System: ${masterFieldsVerify.compSys}</div>
  <div id="verifycountyWebUrl">County Web URL: ${masterFieldsVerify.countyWebUrl}</div>
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

  <div id="newItems"  >
  <h5 id="newItemsReview" style="display:none" class="ps-2 pt-2" >New Items</h5>
  
  </div>



  `;

  // if there are keys in the masterFieldsVerify object that are not in the masterFields object then add append them to the dom id "reviewModal"
  for (let key in masterFieldsVerify) {
    if (!masterFields.hasOwnProperty(key)) {
      let element = document.getElementById("newItems");
      let newLabel = "";
      // show the id newItemsReview
      document.getElementById("newItemsReview").style.display = "block";

      labels = document.getElementsByTagName("label");

      // take the label associated with the input that is the same name as the key and add it to the newLabel variable
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor === key) {
          newLabel = labels[i].innerText;
        }
      }

      element.className = "border my-2 mb-2";
      element.innerHTML += `<div style="background-color: lightyellow" class="ps-2 id="verify${key}">${newLabel}: ${masterFieldsVerify[key]} <span class="badge float-end bg-secondary">New</span></div>`;
    }
  }

  // compare the two objects masterFields and masterFieldsVerify and return the differences
  function compareObjects(obj1, obj2) {
    let differences = {};
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        differences[key] = obj2[key];
      }
    }

    console.log(differences);

    // if a value in the differences object is undefined then remove it from the differences object
    for (let key in differences) {
      if (differences[key] === undefined) {
        delete differences[key];
      }
    }

    // take all values from different and highlight the dom element which is the id of verify + key
    for (let key in differences) {
      let element = document.getElementById(`verify${key}`);
      element.style.backgroundColor = "lightyellow";
      // add a badge to the end of the dom element
      element.innerHTML += `<span class="badge float-end bg-danger">Changed</span>`;
    }
  }

  // add an event listener to the id approveBtn that hides the dom element reviewBtn and shows the dom element padCont
  document.getElementById("approveBtn").addEventListener("click", (e) => {
    document.getElementById("reviewBtn").style.display = "none";
    document.getElementById("padCont").style.display = "block";
  });

  // add an event listener to the button signSub that shows the dom element finalsubbutn
  document.getElementById("signSub").addEventListener("click", (e) => {
    document.getElementById("finalsubbtn").style.display = "block";
  });

  compareObjects(masterFields, masterFieldsVerify);
});

// // ********** SIGNATURE PAD **********

// const canvas = document.querySelector('canvas');
// const form = document.querySelector('.signature-pad-form');
// const clearButton = document.querySelector('.clear-button');
// const ctx = canvas.getContext('2d');
// let writingMode = false;

// const handlePointerDown = (event) => {
//     writingMode = true;
//     ctx.beginPath();
//     const [positionX, positionY] = getCursorPosition(event);
//     ctx.moveTo(positionX, positionY);
//   }
//   const handlePointerUp = () => {
//     writingMode = false;
//   }
//   const handlePointerMove = (event) => {
//     if (!writingMode) return
//     const [positionX, positionY] = getCursorPosition(event);
//     ctx.lineTo(positionX, positionY);
//     ctx.stroke();
//   }
//   const getCursorPosition = (event) => {
//     positionX = event.clientX - event.target.getBoundingClientRect().x;
//     positionY = event.clientY - event.target.getBoundingClientRect().y;
//     return [positionX, positionY];
//   }
//   ctx.lineWidth = 3;
//   ctx.lineJoin = ctx.lineCap = 'round';

//   canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
// canvas.addEventListener('pointerup', handlePointerUp, {passive: true});
// canvas.addEventListener('pointermove', handlePointerMove, {passive: true});

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const imageURL = canvas.toDataURL();
//     const image = document.createElement('img');
//     image.src = imageURL;
//     image.height = canvas.height;
//     image.width = canvas.width;
//     image.style.display = 'block';
//     form.appendChild(image);
//     countSig = image
//     clearPad();
//   })
//   const clearPad = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
//   clearButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     clearPad();
//   })

// // ********** END SIGNATURE PAD **********

// // ********** AUDITOR SIGNATURE PAD **********

// const canvas2 = document.querySelector('canvas2');
// const form2 = document.querySelector('.signature-pad-form2');
// const clearButton2 = document.querySelector('.clear-button2');
// const ctx2 = canvas2.getContext('2d');
// let writingMode2 = false;

// const handlePointerDown2 = (event) => {
//     writingMode2 = true;
//     ctx2.beginPath();
//     const [positionX, positionY] = getCursorPosition2(event);
//     ctx2.moveTo(positionX, positionY);
//   }
//   const handlePointerUp2 = () => {
//     writingMode2 = false;
//   }
//   const handlePointerMove2 = (event) => {
//     if (!writingMode2) return
//     const [positionX, positionY] = getCursorPosition2(event);
//     ctx2.lineTo(positionX, positionY);
//     ctx2.stroke();
//   }
//   const getCursorPosition2 = (event) => {
//     positionX = event.clientX - event.target.getBoundingClientRect().x;
//     positionY = event.clientY - event.target.getBoundingClientRect().y;
//     return [positionX, positionY];
//   }
//   ctx2.lineWidth = 3;
//   ctx2.lineJoin = ctx2.lineCap = 'round';

//   canvas2.addEventListener('pointerdown', handlePointerDown2, {passive: true});
// canvas2.addEventListener('pointerup', handlePointerUp2, {passive: true});
// canvas2.addEventListener('pointermove', handlePointerMove2, {passive: true});

//   form2.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const imageURL = canvas2.toDataURL();
//     const image = document.createElement('img');
//     image.src = imageURL;
//     image.height = canvas2.height;
//     image.width = canvas2.width;
//     image.style.display = 'block';
//     form2.appendChild(image);
//     countSig2 = image
//     clearPad2();
//   })
//   const clearPad2 = () => {
//     ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
//   }
//   clearButton2.addEventListener('click', (event) => {
//     event.preventDefault();
//     clearPad2();
//   })

// ********** DOWNLOAD JSON FILE **********
// create a function that will take the object masterFieldsVerify, convert it to a json object then download it
function downloadObjectAsJson(exportObj, exportName) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

// add an event listener to the id finalsubbtn that will download the object masterFieldsVerify as a json file
document.getElementById("finalsubbtn").addEventListener("click", (e) => {
  downloadObjectAsJson(masterFieldsVerify, "masterFieldsVerify");
});

// add an event listen to the id reviewBtn that when clicked, if there are no checkboxes then enable the submit button
document.getElementById("reviewBtn").addEventListener("click", (e) => {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (checkboxes.length === 0) {
    document.getElementById("approveBtn").disabled = false;
  }
});

// create clear function that will revert the dom to its original state
function clear() {
  // remove all elements with the classname badge
  let badge = document.getElementsByClassName("badge");
  while (badge.length > 0) {
    badge[0].parentNode.removeChild(badge[0]);
  }
  // hide the dom element padCont
  document.getElementById("padCont").style.display = "none";
  // hide the dom element finalsubbtn
  document.getElementById("finalsubbtn").style.display = "none";
  // set the input fields back to their original values
  for (let key in masterFields) {
    if (document.getElementById(key)) {
      document.getElementById(key).value = masterFields[key];
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
});

// add an event listener to the id saleMethod that if it's value is "Online" then set the value of the id's saleStreetAddress, saleCity, saleState, saleZip to the value of "Online - Zeus"

document.getElementById("saleMethod").addEventListener("change", (e) => {
  if (e.target.value === "Online") {
    document.getElementById("saleStreetAddress").value = "Online - Zeus";
    document.getElementById("saleCity").value = "Online - Zeus";
    document.getElementById("saleState").value = "Online - Zeus";
    document.getElementById("saleZip").value = "Online - Zeus";
  } else {
    document.getElementById("saleStreetAddress").value = "";
    document.getElementById("saleCity").value = "";
    document.getElementById("saleState").value = "";
    document.getElementById("saleZip").value = "";
  }
});

if (masterFields.saleMethod === "Online") {
  document.getElementById("enddatediv").style.display = "block";
}

// add an event listen to the id addcontBtn that will add a new container to the dom id addcontwrapper
// add the numinical id's for each id of each input field
// add a delete button to each container thats deletes addcont${addcontwrapper.childElementCount + 1}

document.getElementById("addcontBtn").addEventListener("click", (e) => {
  let addcontwrapper = document.getElementById("addcontwrapper");
  let addcont = document.createElement("div");
  newsCont++;
  addcont.id = `addcont${addcontwrapper.childElementCount + 1}`;
  addcont.className =
    "addcont d-flex flex-wrap flex-row justify-content-evenly align-items-center border border-dark py-3 mb-3";
  addcont.innerHTML = `
  
  <h5 class="text-center w-100">Additional Contact ${
    addcontwrapper.childElementCount + 1
  } <span class="badge bg-secondary">New</span></h5>
  <div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }FirstName"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } First Name</small> </label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }FirstName" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } FirstName">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }LastName"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Last Name</small> </label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }LastName" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Last Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }Phone"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Phone </small></label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }Phone" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Phone">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }Email"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Email </small></label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }Email" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Email">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }Title"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Title</small> </label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }Title" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Title">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }Department"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Department </small></label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }Department" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Department">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }StreetAddress"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Street Address </small></label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }StreetAddress" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Street Address">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }City"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } City</small> </label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }City" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } City">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }State"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } State</small> </label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }State" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } State">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }Zip"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Zip</small> </label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }Zip" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Zip">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="additionalContact${
    addcontwrapper.childElementCount + 1
  }Notes"><small>Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Notes </small></label>
  <input type="text" class="form-control master-input" id="additionalContact${
    addcontwrapper.childElementCount + 1
  }Notes" placeholder="Additional Contact ${
    addcontwrapper.childElementCount + 1
  } Notes">
</div>
<div class="w-100 d-flex flex-wrap flex-row justify-content-center align-items-center mb-2">
<button type="button" class="btn btn-danger" id="deleteBtn${
    addcontwrapper.childElementCount + 1
  }">Delete Contact ${addcontwrapper.childElementCount + 1}</button>

</div>`;
  addcontwrapper.appendChild(addcont);
  document
    .getElementById(`deleteBtn${addcontwrapper.childElementCount}`)
    .addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
});

// add an event listner to the id numBatches and take it's value and store it in the variable batchAmount

document.getElementById("numBatches").addEventListener("change", (e) => {
  batchAmount = e.target.value;
  // clear all content from the id batchDiv
  document.getElementById("batchDiv").innerHTML = "";
  // create start and stop time and render it to the dom id batchDiv for each number of batchAmount
  for (let i = 0; i < batchAmount; i++) {
    let batchDiv = document.getElementById("batchDiv");
    let batch = document.createElement("div");
    batch.setAttribute("id", `batch${i + 1}`);
    batch.setAttribute("style", "background-color: #e3ecff");
    batch.className =
      "batch mt-2 d-flex flex-wrap flex-row justify-content-evenly align-items-center border border-dark py-3 mb-3";
    batch.innerHTML = `
    <h5 class="text-center w-100">Batch ${i + 1}</h5>
    <div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
      <label for="batch${i + 1}StartTime"><small>Batch ${
      i + 1
    } Start Time</small> </label>
      <input type="datetime-local" class="form-control master-input" id="batch${
        i + 1
      }StartTime" placeholder="Batch ${i + 1} Start Time">
    </div>
    <div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
      <label for="batch${i + 1}StopTime"><small>Batch ${
      i + 1
    } Stop Time</small> </label>
      <input type="datetime-local" class="form-control master-input" id="batch${
        i + 1
      }StopTime" placeholder="Batch ${i + 1} Stop Time">
    </div>`;
    batchDiv.appendChild(batch);
  }
});

// add an event listen to id unsoldBatch and show the dom id unsoldBatchDiv if the target is checked
// hide the dom id unsoldBatchDiv if the target is not checked

document.getElementById("unsoldBatch").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("unsoldbatchesdiv").style.display = "block";
  } else {
    document.getElementById("unsoldbatchesdiv").style.display = "none";
  }
});

// add an event listener to the id dynamicEnding and show the dom id dynamicDiv if the target is checked

document.getElementById("dynamicEnding").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("dynamicDiv").style.display = "block";
  } else {
    document.getElementById("dynamicDiv").style.display = "none";
  }
});

// add an event listern to the id addnewsBtn that will add a new container to the dom with the id newscontwrapper
// add the numinical id's for each id of each input field
// add a delete button to each container thats deletes the container

document.getElementById("addnewsBtn").addEventListener("click", () => {
  let newscontwrapper = document.getElementById("newscontwrapper");
  let newscont = document.createElement("div");
  newscont.setAttribute(
    "id",
    `newscont${newscontwrapper.childElementCount + 1}`
  );
  newscont.className =
    "addcont d-flex flex-wrap flex-row justify-content-evenly align-items-center border border-dark py-3 mb-3";
  newscont.innerHTML = `
  
  <h5 class="text-center w-100">Newspaper ${
    newscontwrapper.childElementCount + 1
  } <span class="badge bg-secondary">New</span></h5>
  <div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }Name"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } Name</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }Name" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }FirstName"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } First Name</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }FirstName" placeholder="Newspaper ${
    newscontwrapper.childElementCount + 1
  } First Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }LastName"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } Last Name</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }LastName" placeholder="Newspaper ${
    newscontwrapper.childElementCount + 1
  } Last Name">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }Phone"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } Phone</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }Phone" placeholder="Newspaper ${
    newscontwrapper.childElementCount + 1
  } Phone">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }AdFormat"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } Ad Format</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }AdFormat" placeholder="Newspaper ${
    newscontwrapper.childElementCount + 1
  } Ad Format">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">  
  <label for="news${
    newscontwrapper.childElementCount + 1
  }LeadTime"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } Lead Time</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }LeadTime" placeholder="Newspaper ${
    newscontwrapper.childElementCount + 1
  } Lead Time">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }DayAdRuns"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } Day Ad Runs</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }DayAdRuns" placeholder="Newspaper ${
    newscontwrapper.childElementCount + 1
  } Day Ad Runs">
</div>
<div class="form-group col-md-6 mx-2 my-2" style="width: 300px">
  <label for="news${
    newscontwrapper.childElementCount + 1
  }URL"><small>Newspaper ${
    newscontwrapper.childElementCount + 1
  } URL</small> </label>
  <input type="text" class="form-control master-input" id="news${
    newscontwrapper.childElementCount + 1
  }URL" placeholder="Newspaper ${newscontwrapper.childElementCount + 1} URL">
</div>
<div class="w-100 d-flex flex-wrap flex-row justify-content-center align-items-center mb-2">
<button type="button" class="btn btn-danger \ " id="deleteBtn${
    newscontwrapper.childElementCount + 1
  }">Delete Newspaper ${newscontwrapper.childElementCount + 1}</button>
</div>
`;
  newscontwrapper.appendChild(newscont);
  document
    .getElementById(`deleteBtn${newscontwrapper.childElementCount}`)
    .addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
});

// add event listner to the logout btn to redirect to index.html
document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

// add event listner to id collectAudSignature that shows the element id audSigDiv
document.getElementById("collectAudSignature").addEventListener("click", () => {
  document.getElementById("audSigDiv").style.display = "block";
});

// new signature pad test //

function audSignPad() {
  const audCanvas = document.getElementById("audCanvas");
  const audSignaturePad = new SignaturePad(audCanvas);
  const audClearBtn = document.getElementById("audClearBtn");
  const audSaveBtn = document.getElementById("signAudSub");

  audClearBtn.addEventListener("click", (e) => {
    audSignaturePad.clear();
  });

  audSaveBtn.addEventListener("click", (e) => {
    // if there is is a signature in the canvas
    if (audSignaturePad.isEmpty() === false) {
     // save the signature as a data url
      const audSigData = audSignaturePad.toDataURL("image/png");

      // // *** THIS SENDS THE SIGNATURE TO THE SERVER ***

      //           // convert audSigData to a blob
      //           fetch(audSigData)
      //             .then((res) => res.blob())
      //             .then((blob) => {
      //               // create a new file from the blob
      //               const audSigFile = new File([blob], "audSig.png", {
      //                 type: "image/png",
      //               });
      //               // create a new form data
      //               const audSigFormData = new FormData();
      //               // append the file to the form data
      //               audSigFormData.append("audSig", audSigFile );
      //               // send the form data to the server
      //               fetch("http://localhost:3000/audSig", {
      //                 method: "POST",
      //                 body: audSigFormData,
      //               })
      //                 .then((res) => res.json())
      //                 .then((data) => {
      //                   console.log(data);
      //                 }
      //                 );
      //             });

      // *** END OF SERVER SEND ***

      // convert audSigData to an image and append it to id audPadCont 
      const audSigImg = document.createElement("img");
      audSigImg.src = audSigData;
      document.getElementById("audPadCont").appendChild(audSigImg);
      // hide the signature pad



    }
  });
   
  
}

audSignPad();

// end new signature pad test //
