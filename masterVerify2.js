sig1 = "/images/sig1.png";
sig2 = "/images/sig2.png";

let masterFields = {
  countyCode: "01",
  countyName: "Adams",
  countyStreetAddress: "200 S 3rd St",
  countyCity: "West Union",
  countyState: "IN",
  countyZip: "52175",
  auditorFirstName: "Jill",
  auditorLastName: "Smith",
  auditorStreetAddress: "200 S 3rd St",
  auditorCity: "West Union",
  auditorState: "IN",
  auditorZip: "52175",
  auditorPhone: "563-422-1234",
  auditorEmail: "jsmith@gmail.com",
  treasurerFirstName: "John",
  treasurerLastName: "Doe",
  treasurerStreetAddress: "200 S 3rd St",
  treasurerCity: "West Union",
  treasurerState: "IN",
  treasurerZip: "52175",
  treasurerPhone: "563-422-1234",
  treasurerEmail: "jdoe@gmail.com",
  attorneyFirstName: "Bobcat",
  attorneyLastName: "Jones",
  attorneyPhone: "563-422-1234",
  attorneyEmail: "Bjones@gmail.com",
  attorneyStreetAddress: "200 S 3rd St",
  attorneyCity: "West Union",
  attorneyState: "IN",
  attorneyZip: "52175",
  assessorFirstName: "Mike",
  assessorLastName: "Davis",
  assessorPhone: "563-422-1234",
  assessorEmail: "mdavis@gmail.com",
  assessorStreetAddress: "200 S 3rd St",
  assessorCity: "West Union",
  assessorState: "IN",
  assessorZip: "52175",
  commissioner1FirstName: "Michael",
  commissioner1LastName: "Johnson",
  commissioner1Phone: "563-422-1234",
  commissioner1Email: "md@sdasd.net",
  commissioner1StreetAddress: "200 S 3rd St",
  commissioner1City: "West Union",
  commissioner1State: "IN",
  commissioner1Zip: "52175",
  commissioner2FirstName: "Griffin",
  commissioner2LastName: "Anderson",
  commissioner2Phone: "563-422-1234",
  commissioner2Email: "yes@no.com",
  commissioner2StreetAddress: "200 S 3rd St",
  commissioner2City: "West Union",
  commissioner2State: "IN",
  commissioner2Zip: "52175",
  commissioner3FirstName: "David",
  commissioner3LastName: "Reed",
  commissioner3Phone: "563-422-1234",
  commissioner3Email: "1234@4543.edu",
  commissioner3StreetAddress: "200 S 3rd St",
  commissioner3City: "West Union",
  commissioner3State: "IN",
  commissioner3Zip: "52175",
  courtHouseName: "Adams County Courthouse",
  courtSteetAddress: "200 S 3rd St",
  courtCity: "West Union",
  courtState: "IN",
  courtZip: "52175",
  courtType: "Circuit",
  clerkFirstName: "John",
  clerkLastName: "Doe",
  clerkPhone: "563-422-1234",
  clerkEmail: "clerk@hellokitty.org",
  clerkStreetAddress: "200 S 3rd St",
  clerkCity: "West Union",
  clerkState: "IN",
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
  sheriffState: "IN",
  sheriffZip: "52175",
  sheriffAddContactFirstName: "John",
  sheriffAddContactLastName: "Doe",
  sheriffAddContactTitle: "Deputy",
  sheriffAddContactOrganization: "Sheriff's Office",
  sheriffAddContactPhone: "563-422-1234",
  sheriffAddContactEmail: "depbigguy@hellokitty.net",
  sheriffAddContactStreetAddress: "200 S 3rd St",
  sheriffAddContactCity: "West Union",
  sheriffAddContactState: "IN",
  sheriffAddContactZip: "52175",
  paymentStreetAddress: "200 S 3rd St",
  paymentCity: "West Union",
  paymentState: "IN",
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

  
  CO: {
    name: "Colorado",
    cities: [
      "Arvada", "Aurora", "Boulder", "Broomfield", "Castle Rock", "Centennial", "Colorado Springs", "Denver", "Englewood", "Fort Collins", "Golden", "Grand Junction", "Greeley", "Lakewood", "Littleton", "Longmont", "Loveland", "Parker", "Pueblo", "Thornton", "Westminster", "Wheat Ridge"
    ],
    counties: [
      "Adams", "Alamosa", "Arapahoe", "Archuleta", "Baca", "Bent", "Boulder", "Broomfield", "Chaffee", "Cheyenne", "Clear Creek", "Conejos", "Costilla", "Crowley", "Custer", "Delta", "Denver", "Dolores", "Douglas", "Eagle", "El Paso", "Elbert", "Fremont", "Garfield", "Gilpin", "Grand", "Gunnison", "Hinsdale", "Huerfano", "Jackson", "Jefferson", "Kiowa", "Kit Carson", "Lake", "La Plata", "Larimer", "Las Animas", "Lincoln", "Logan", "Mesa", "Mineral", "Moffat", "Montezuma", "Montrose", "Morgan", "Otero", "Ouray", "Park", "Phillips", "Pitkin", "Prowers", "Pueblo", "Rio Blanco", "Rio Grande", "Routt", "Saguache", "San Juan", "San Miguel", "Sedgwick", "Summit", "Teller", "Washington", "Weld", "Yuma",
    ],
  },
  
  FL: {
    name: "Florida",
    cities: [
      "Alachua", "Altamonte Springs", "Apopka", "Aventura", "Bartow", "Boca Raton", "Boynton Beach", "Bradenton", "Brandon", "Cape Coral", "Clearwater", "Clermont", "Cocoa", "Coral Gables", "Coral Springs", "Daytona Beach", "Deerfield Beach", "Delray Beach", "Deltona", "Doral", "Dunedin", "Fort Lauderdale", "Fort Myers", "Fort Pierce", "Fort Walton Beach", "Gainesville", "Greenacres", "Hialeah", "Hollywood", "Homestead", "Jacksonville", "Jupiter", "Kissimmee", "Lake Worth", "Lakeland", "Largo", "Lauderhill", "Leesburg", "Margate", "Melbourne", "Miami", "Miami Beach", "Miami Gardens", "Miami Lakes", "Miramar", "Naples", "New Port Richey", "North Miami", "North Miami Beach", "North Port", "Ocala", "Orlando", "Palm Bay", "Palm Beach Gardens", "Palm Coast", "Palm Harbor", "Pembroke Pines", "Pensacola", "Pompano Beach", "Port Charlotte", "Port Orange", "Port St. Lucie", "Punta Gorda", "Riverview", "Royal Palm Beach", "Saint Augustine", "Saint Cloud", "Saint Petersburg", "Sanford", "Sarasota", "Seminole", "Spring Hill", "Stuart", "Sunrise", "Tallahassee", "Tamarac", "Tampa", "Tarpon Springs", "Temple Terrace", "Titusville", "Vero Beach", "West Palm Beach", "Weston", "Winter Garden", "Winter Haven", "Winter Park", "Winter Springs",
    ],
    counties: [
      "Alachua", "Baker", "Bay", "Bradford", "Brevard", "Broward", "Calhoun", "Charlotte", "Citrus", "Clay", "Collier", "Columbia", "DeSoto", "Dixie", "Duval", "Escambia", "Flagler", "Franklin", "Gadsden", "Gilchrist", "Glades", "Gulf", "Hamilton", "Hardee", "Hendry", "Hernando", "Highlands", "Hillsborough", "Holmes", "Indian River", "Jackson", "Jefferson", "Lafayette", "Lake", "Lee", "Leon", "Levy", "Liberty", "Madison", "Manatee", "Marion", "Martin", "Miami-Dade", "Monroe", "Nassau", "Okaloosa", "Okeechobee", "Orange", "Osceola", "Palm Beach", "Pasco", "Pinellas", "Polk", "Putnam", "Santa Rosa", "Sarasota", "Seminole", "St. Johns", "St. Lucie", "Sumter", "Suwannee", "Taylor", "Union", "Volusia", "Wakulla", "Walton", "Washington",
    ],
  },
  IN: {
    name: "Indiana",
    cities: [
      "Anderson", "Bloomington", "Carmel", "Columbus", "Elkhart", "Evansville", "Fishers", "Fort Wayne", "Gary", "Greenwood", "Hammond", "Indianapolis", "Jeffersonville", "Kokomo", "Lafayette", "Lawrence", "Merrillville", "Mishawaka", "Muncie", "Noblesville", "Portage", "Richmond", "South Bend", "Terre Haute", "Valparaiso", "West Lafayette",
    ],
    counties: [
      "Adams", "Allen", "Bartholomew", "Benton", "Blackford", "Boone", "Brown", "Carroll", "Cass", "Clark", "Clay", "Clinton", "Crawford", "Daviess", "Dearborn", "Decatur", "De Kalb", "Delaware", "Dubois", "Elkhart", "Fayette", "Floyd", "Fountain", "Franklin", "Fulton", "Gibson", "Grant", "Greene", "Hamilton", "Hancock", "Harrison", "Hendricks", "Henry", "Howard", "Huntington", "Jackson", "Jasper", "Jay", "Jefferson", "Jennings", "Johnson", "Knox", "Kosciusko", "La Porte", "Lagrange", "Lake", "Lawrence", "Madison", "Marion", "Marshall", "Martin", "Miami", "Monroe", "Montgomery", "Morgan", "Newton", "Noble", "Ohio", "Orange", "Owen", "Parke", "Perry", "Pike", "Porter", "Posey", "Pulaski", "Putnam", "Randolph", "Ripley", "Rush", "St. Joseph", "Scott", "Shelby", "Spencer", "Starke", "Steuben", "Sullivan", "Switzerland", "Tippecanoe", "Tipton", "Union", "Vanderburgh", "Vermillion", "Vigo", "Wabash", "Warren", "Warrick", "Washington", "Wayne", "Wells", "White", "Whitley",
    ],
  },
  LA: {
    name: "Louisiana",
    cities: [
      "Alexandria", "Baton Rouge", "Bossier City", "Chalmette", "Harvey", "Kenner", "Lafayette", "Lake Charles", "Metairie", "New Orleans", "Shreveport", "Slidell", "Westwego",
    ],
    counties: [
      "Acadia", "Allen", "Ascension", "Assumption", "Avoyelles", "Beauregard", "Bienville", "Bossier", "Caddo", "Calcasieu", "Caldwell", "Cameron", "Catahoula", "Claiborne", "Concordia", "De Soto", "East Baton Rouge", "East Carroll", "East Feliciana", "Evangeline", "Franklin", "Grant", "Iberia", "Iberville", "Jackson", "Jefferson", "Jefferson Davis", "Lafayette", "Lafourche", "La Salle", "Lincoln", "Livingston", "Madison", "Morehouse", "Natchitoches", "Orleans", "Ouachita", "Plaquemines", "Pointe Coupee", "Rapides", "Red River", "Richland", "Sabine", "St. Bernard", "St. Charles", "St. Helena", "St. James", "St. John the Baptist", "St. Landry", "St. Martin", "St. Mary", "St. Tammany", "Tangipahoa", "Tensas", "Terrebonne", "Union", "Vermilion", "Vernon", "Washington", "Webster", "West Baton Rouge", "West Carroll", "West Feliciana", "Winn",
    ],
  },

};


// ********** GLOBAL VARIABLES **********

let batchAmount = 0;
let masterFieldsVerify = {};
let newValues = {};
let addContAmount = 0;
let newsCont = 1;
let darkState = false;

// ********** INITIAL EVENT LISTENERS **********



// set all select elements with the id that contains "state" or "State" and add the option from the states object, looping through and adding the state name as the value and the state abbreviation as the text
document.querySelectorAll("select[id*='state'], select[id*='State']").forEach((el) => {
  for (let state in states) {
    let option = document.createElement("option");
    option.value = state
    // set the text of the option to the state name value
    option.text = states[state].name;
    el.add(option);
  }
});

// add an event listener to all select elements with the id that contains "state" or "State"
document.querySelectorAll("select[id*='state'], select[id*='State']").forEach((el) => {
  el.addEventListener("change", (e) => {
    // get the id of the city select element that matches the id of the state select element but has "city" or "City" in the id
    let citySelect = document.querySelector(`select[id*='${e.target.id.replace("state", "city").replace("State", "City")}']`);
    // clear the city select element
    citySelect.innerHTML = "";
    // add the default option
    let option = document.createElement("option");
    option.value = "";
    option.text = "Select a City";
    citySelect.add(option);
    // loop through the cities array in the states object and add the city as the value and the city as the text
    states[e.target.value].cities.forEach((city) => {
      let option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    });
  });
});


// clear audSigData and treasSigData from local storage if it exists
if (localStorage.getItem("audSigData")) {
  localStorage.removeItem("audSigData");
}
if (localStorage.getItem("treasSigData")) {
  localStorage.removeItem("treasSigData");
}

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

// ********** END INITIAL EVENT LISTENERS **********


// ********** REVIEW MODAL **********


// add an event listener to the button with the id of "reviewBtn" that will set the masterFieldsVerify object to the values of the dom elements with the same id as the keys in the masterFieldsVerify object //
document.getElementById("reviewBtn").addEventListener("click", function () {
  let drop = document.getElementsByClassName("master-input");
  for (let i = 0; i < drop.length; i++) {
    masterFieldsVerify[drop[i].id] = drop[i].value;
  }
  console.log(masterFieldsVerify);

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

  // if audSigData exists in local storage then add it to the dom id "newItems"
  if (localStorage.getItem("audSigData")) {
    // convert the audSigData from a string to an image
    let audSigData = localStorage.getItem("audSigData");
    // append the image to the id newItems review with the label "Auditor Signature"
    document.getElementById(
      "newItems"
    ).innerHTML += `<div style="background-color: lightyellow" class="ps-2 pt-2" >Auditor Signature: </div><img src="${audSigData}" alt="Auditor Signature" class="img-fluid" />`;
  }

  // if treasSigData exists in local storage then add it to the dom id "newItems"
  if (localStorage.getItem("treasSigData")) {
    // convert the treasSigData from a string to an image
    let treasSigData = localStorage.getItem("treasSigData");
    // append the image to the id newItems review with the label "Treasurer Signature"
    document.getElementById(
      "newItems"
    ).innerHTML += `<div style="background-color: lightyellow" class="ps-2 pt-2" >Treasurer Signature: </div><img src="${treasSigData}" alt="Treasurer Signature" class="img-fluid" />`;
  }

  // if there are keys in the masterFieldsVerify object that are not in the masterFields object then add append them to the dom id "reviewModal"
  for (let key in masterFieldsVerify) {
    if (!masterFields.hasOwnProperty(key) && masterFieldsVerify[key] !== "") {
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

  // add an event listener to the id approveBtn that hides the dom element reviewBtn and shows the dom element finalsubbtn
  document.getElementById("approveBtn").addEventListener("click", (e) => {
    document.getElementById("reviewBtn").style.display = "none";
    document.getElementById("finalsubbtn").style.display = "block";
  });

  compareObjects(masterFields, masterFieldsVerify);
});



// ********** END OF REVIEW MODAL **********




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

// ********** END OF DOWNLOAD JSON FILE **********


// ********** CLEAR ALL **********
// create clear function that will revert the dom to its original state
function clear() {
  if (localStorage.getItem("audSigData")) {
    localStorage.removeItem("audSigData");
  }
  if (localStorage.getItem("treasSigData")) {
    localStorage.removeItem("treasSigData");
  }

// show the dom id audPadCont 
  document.getElementById("audPadCont").style.display = "block";
  // show the dom id treasPadCont
  document.getElementById("treasPadCont").style.display = "block";
  


// remove all elements with the classname "masterfile - signature"
  let masterfileSignature = document.getElementsByClassName(
    "masterfile - signature"
  );
  while (masterfileSignature.length > 0) {
    masterfileSignature[0].parentNode.removeChild(masterfileSignature[0]);
  }

 // if the audSigDiv is displayed on the dom then change the style of the dom element audSigDiv to display none !important
  if (document.getElementById("audSigDiv").style.display === "block") {
    // click the id collectTreasSignature
    document.getElementById("collectTreasSignature").click();
  }

  // if the treasSigDiv is displayed on the dom then change the style of the dom element treasSigDiv to display none !important
  if (document.getElementById("treasSigDiv").style.display === "block") {
   // click the id collectAudSignature
    document.getElementById("collectAudSignature").click();
  }

  // remove all elements with the classname badge
  let badge = document.getElementsByClassName("badge");
  while (badge.length > 0) {
    badge[0].parentNode.removeChild(badge[0]);
  }

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

// ********** END CLEAR ALL **********




// ********** CHANGING SALE METHOD **********

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

// ********** END CHANGING SALE METHOD **********


// ********** ADD ADDITIONAL CONTACTS **********

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

// ********** END OF ADDITIONAL CONTACTS **********



// ********** START OF BATCHES **********

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

// ********** END OF BATCHES **********


// ********** START OF UNSOLD BATCHES **********

// add an event listen to id unsoldBatch and show the dom id unsoldBatchDiv if the target is checked
// hide the dom id unsoldBatchDiv if the target is not checked

document.getElementById("unsoldBatch").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("unsoldbatchesdiv").style.display = "block";
  } else {
    document.getElementById("unsoldbatchesdiv").style.display = "none";
  }
});

// ********** END OF UNSOLD BATCHES **********



// ********** START OF DYNAMIC ENDING **********

// add an event listener to the id dynamicEnding and show the dom id dynamicDiv if the target is checked

document.getElementById("dynamicEnding").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("dynamicDiv").style.display = "block";
  } else {
    document.getElementById("dynamicDiv").style.display = "none";
  }
});

// ********** END OF DYNAMIC ENDING **********



// ********** START OF ADDITIONAL NEWSPAPERS **********

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

// ********** END OF ADD NEWSPAPER CONTAINER **********



// ********** LOGOUT **********


// add event listner to the logout btn to redirect to index.html
document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

// ********** END OF LOGOUT **********


// ********** SIGNATURES **********

// ********** AUDITOR SIGNATURE **********

// add event listner to id collectAudSignature that shows the element id audSigDiv
document.getElementById("collectAudSignature").addEventListener("click", () => {
  holder = document.getElementById("audSigDiv");
  // if the element is hidden
  if (holder.style.display === "none") {
    // show the element
    holder.style.display = "block";
  } else {
    // set holder to display none with the !important tag
    holder.style.cssText = "display:none !important";
  }
});

// add event listner to the id collectTreasSignature that shows the element id treasSigDiv
document
  .getElementById("collectTreasSignature")
  .addEventListener("click", () => {
    holder = document.getElementById("treasSigDiv");
    // if the element is hidden
    if (holder.style.display === "none") {
      // show the element
      holder.style.display = "block";
    } else {
      // set holder to display none with the !important tag
      holder.style.cssText = "display:none !important";
    }
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

      // save the data URL to local storage
      localStorage.setItem("audSigData", audSigData);

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
      //               fetch("http://WHATEVER.ORG", {
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

      // *** BEHOLD ADDITIONAL SIGNATURE PAD FUNCTIONALITY ***

      //       // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
      // signaturePad.toDataURL(); // save image as PNG
      // signaturePad.toDataURL("image/jpeg"); // save image as JPEG
      // signaturePad.toDataURL("image/jpeg", 0.5); // save image as JPEG with 0.5 image quality
      // signaturePad.toDataURL("image/svg+xml"); // save image as SVG data url

      // // Return svg string without converting to base64
      // signaturePad.toSVG(); // "<svg...</svg>"
      // signaturePad.toSVG({includeBackgroundColor: true}); // add background color to svg output

      // // Draws signature image from data URL (mostly uses https://mdn.io/drawImage under-the-hood)
      // // NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
      // signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");

      // // Draws signature image from data URL and alters it with the given options
      // signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...", { ratio: 1, width: 400, height: 200, xOffset: 100, yOffset: 50 });

      // // Returns signature image as an array of point groups
      // const data = signaturePad.toData();

      // // Draws signature image from an array of point groups
      // signaturePad.fromData(data);

      // // Draws signature image from an array of point groups, without clearing your existing image (clear defaults to true if not provided)
      // signaturePad.fromData(data, { clear: false });

      // // Clears the canvas
      // signaturePad.clear();

      // // Returns true if canvas is empty, otherwise returns false
      // signaturePad.isEmpty();

      // // Unbinds all event handlers
      // signaturePad.off();

      // // Rebinds all event handlers
      // signaturePad.on();

        // convert AudSigData to an image and replace the image with the id "auditorSignature" with the new image
        document.getElementById("auditorSignature").src = audSigData;


      // clear the signature pad
      audSignaturePad.clear();

      // click the id "collectAudSignature" to hide the signature pad
      document.getElementById("collectAudSignature").click();



      // hide the signature pad
      // document.getElementById("audPadCont").style.display = "none";

      // // *** THIS DOWNLOADS THE SIGNATURE ***
      // // download the signature as a png
      // // create a link element
      // const audSigLink = document.createElement("a");
      // // set the link href to the audSigData
      // audSigLink.href = audSigData;
      // // set the link download attribute to the file name
      // audSigLink.download = "audSig.png";
      // // append the link to the body
      // document.body.appendChild(audSigLink);
      // // click the link
      // audSigLink.click();
      // // remove the link from the body
      // document.body.removeChild(audSigLink);
    }
  });
}

// ********** END OF AUDITOR SIGNATURE PAD **********



// ********** TREASURER SIGNATURE PAD **********

function treasSignPad() {
  const treasCanvas = document.getElementById("treasCanvas");
  const treasSignaturePad = new SignaturePad(treasCanvas);
  const treasClearBtn = document.getElementById("treasClearBtn");
  const treasSaveBtn = document.getElementById("signTreasSub");

  treasClearBtn.addEventListener("click", (e) => {
    treasSignaturePad.clear();
  });

  treasSaveBtn.addEventListener("click", (e) => {
    // if there is is a signature in the canvas
    if (treasSignaturePad.isEmpty() === false) {
      // save the signature as a data url
      const treasSigData = treasSignaturePad.toDataURL("image/png");

      // save the data URL to local storage
      localStorage.setItem("treasSigData", treasSigData);

     
      // change the source of the image with the id "treasurerSignature" to the treasSigImg
      document.getElementById("treasurerSignature").src = treasSigData;

  // get the label that is for="treasurerSignature"
  const treasSigLabel = document.querySelector("label[for='treasurerSignature']");
  // append a badge next to the label element
  treasSigLabel.innerHTML += " <span class='badge badge-success'>Signed</span>";


      // click the button id "collectTreasSignature" to hide the signature pad
      document.getElementById("collectTreasSignature").click();


      

      // clear the signature pad
      treasSignaturePad.clear();
      // hide the signature pad
      // document.getElementById("treasPadCont").style.display = "none";

      // // download the signature as a png
      // // create a link element
      // const treasSigLink = document.createElement("a");
      // // set the link href to the treasSigData
      // treasSigLink.href = treasSigData;
      // // set the link download attribute to the file name
      // treasSigLink.download = "treasSig.png";
      // // append the link to the body
      // document.body.appendChild(treasSigLink);
      // // click the link
      // treasSigLink.click();
      // // remove the link from the body
      // document.body.removeChild(treasSigLink);
    }
  });
}

// add event listner to treasCanvas
treasCanvas.addEventListener("beginStroke", (e) => {
  // if it is a mobile or tablet device stop scrolling on the body
  if (window.innerWidth < 992) {
    document.body.style.overflow = "hidden";
  }
});

// add event listner to treasCanvas
treasCanvas.addEventListener("endStroke", (e) => {
  // if it is a mobile or tablet device stop scrolling on the body
  if (window.innerWidth < 992) {
    document.body.style.overflow = "auto";
  }
});


treasSignPad();

audSignPad();

// ********** END OF TREASURER SIGNATURE PAD **********

// ********** END OF SIGNATURES **********





// ********** PRINT DATA **********


// function to print the data in the masterfile object and match the label that for the id that matches th key and make a new object called printlables that has the label and the key value
function printData() {
  // create an empty object to hold the print labels
  let printLabels = {};
  // loop through the masterfile object
  for (let key in masterFields) {
    // get the value of the key
    let value = masterFields[key];
    // get the label that has the for attribute that matches the key
    let label = document.querySelector(`label[for="${key}"]`);
    // if the label exists
    if (label) {
      // get the text of the label
      let labelText = label.innerText;
      // remove anything that is not a number or letter or space
      labelText = labelText.replace(/[^a-zA-Z0-9 ]/g, "");


      // add the label text and the value to the printLabels object
      printLabels[labelText] = value
    }
  

  }

  console.log(printLabels);

  // make a div to display the printLabels object as key value pairs
  // sort the printLabels object by key
  let sortedPrintLabels = Object.keys(printLabels).sort().reduce(
    (obj, key) => {
      obj[key] = printLabels[key];
      return obj;
    },
    {}
  );



  // print the printDiv in a new window

  // get the html of the printDiv
  
 // create a print window that is 8.5 x 11 that opens the print dialog 
  let printWindow = window.open("", "PRINT", "height=792,width=612");


// change the printWindow title to Masterfile
  printWindow.document.title = `${masterFields.countyName} County Masterfile`;


  // write the html to the new window
  printWindow.document.write(`
    <html>
      <head>
        <title>Masterfile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <style>
       
        </style>
      </head>
      <body>
        <h3 class="text-center mt-1">Masterfile - ${masterFields.countyName} County - ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
        </h3>
        <div class="masterfile d-flex flex-column  flex-wrap">
          <div id="printCountyDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">County</h4>
            <div class="px-2" ><b>County Name:</b> ${masterFields.countyName}</b></div>
            <div class="px-2" ><b>County Code:</b>  ${masterFields.countyCode}</b></div>
            <div class="px-2" ><b>County Street Address:</b>  ${masterFields.countyStreetAddress}</b></div>
            <div class="px-2" ><b>County City:</b>  ${masterFields.countyCity}</b></div>
            <div class="px-2" ><b>County State:</b>  ${masterFields.countyState}</b></div>
            <div class="px-2" ><b>County Zip:</b>  ${masterFields.countyZip}</b></div>
          </div>
          <div id="printAuditorDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Auditor</h4>
            <div class="px-2" ><b>Auditor First Name:</b>  ${masterFields.auditorFirstName}</b></div>
            <div class="px-2" ><b>Auditor Last Name:</b>  ${masterFields.auditorLastName}</b></div>
            <div class="px-2" ><b>Auditor Street Address:</b>  ${masterFields.auditorStreetAddress}</b></div>
            <div class="px-2" ><b>Auditor City:</b>  ${masterFields.auditorCity}</b></div>
            <div class="px-2" ><b>Auditor State:</b>  ${masterFields.auditorState}</b></div>
            <div class="px-2" ><b>Auditor Zip:</b>  ${masterFields.auditorZip}</b></div>
            <div class="px-2" ><b>Auditor Phone:</b>  ${masterFields.auditorPhone}</b></div>
            <div class="px-2" ><b>Auditor Email:</b>  ${masterFields.auditorEmail}</b></div>
          </div>
          <div id="printTreasurerDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Treasurer</h4>
            <div class="px-2" ><b>Treasurer First Name:</b>  ${masterFields.treasurerFirstName}</b></div>
            <div class="px-2" ><b>Treasurer Last Name:</b>  ${masterFields.treasurerLastName}</b></div>
            <div class="px-2" ><b>Treasurer Street Address:</b>  ${masterFields.treasurerStreetAddress}</b></div>
            <div class="px-2" ><b>Treasurer City:</b>  ${masterFields.treasurerCity}</b></div>
            <div class="px-2" ><b>Treasurer State:</b>  ${masterFields.treasurerState}</b></div>
            <div class="px-2" ><b>Treasurer Zip:</b>  ${masterFields.treasurerZip}</b></div>
            <div class="px-2" ><b>Treasurer Phone:</b>  ${masterFields.treasurerPhone}</b></div>
            <div class="px-2" ><b>Treasurer Email:</b>  ${masterFields.treasurerEmail}</b></div>
          </div>
          <div id="printAttorneyDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Attorney</h4>
            <div class="px-2" ><b>Attorney First Name:</b>  ${masterFields.attorneyFirstName}</b></div>
            <div class="px-2" ><b>Attorney Last Name:</b>  ${masterFields.attorneyLastName}</b></div>
            <div class="px-2" ><b>Attorney Street Address:</b>  ${masterFields.attorneyStreetAddress}</b></div>
            <div class="px-2" ><b>Attorney City:</b>  ${masterFields.attorneyCity}</b></div>
            <div class="px-2" ><b>Attorney State:</b>  ${masterFields.attorneyState}</b></div>
            <div class="px-2" ><b>Attorney Zip:</b>  ${masterFields.attorneyZip}</b></div>
            <div class="px-2" ><b>Attorney Phone:</b>  ${masterFields.attorneyPhone}</b></div>
            <div class="px-2" ><b>Attorney Email:</b>  ${masterFields.attorneyEmail}</b></div>
          </div>
          <div id="printAssessorDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Assessor</h4>
            <div class="px-2" ><b>Assessor First Name:</b>  ${masterFields.assessorFirstName}</b></div>
            <div class="px-2" ><b>Assessor Last Name:</b>  ${masterFields.assessorLastName}</b></div>
            <div class="px-2" ><b>Assessor Street Address:</b>  ${masterFields.assessorStreetAddress}</b></div>
            <div class="px-2" ><b>Assessor City:</b>  ${masterFields.assessorCity}</b></div>
            <div class="px-2" ><b>Assessor State:</b>  ${masterFields.assessorState}</b></div>
            <div class="px-2" ><b>Assessor Zip:</b>  ${masterFields.assessorZip}</b></div>
            <div class="px-2" ><b>Assessor Phone:</b>  ${masterFields.assessorPhone}</b></div>
            <div class="px-2" ><b>Assessor Email:</b>  ${masterFields.assessorEmail}</b></div>
          </div>
          <div id="printCommissionerDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Commissioner</h4>
            <div class="px-2" ><b>Commissioner 1 First Name:</b>  ${masterFields.commissioner1FirstName}</b></div>
            <div class="px-2" ><b>Commissioner 1 Last Name:</b>  ${masterFields.commissioner1LastName}</b></div>
            <div class="px-2" ><b>Commissioner 1 Street Address:</b>  ${masterFields.commissioner1StreetAddress}</b></div>
            <div class="px-2" ><b>Commissioner 1 City:</b>  ${masterFields.commissioner1City}</b></div>
            <div class="px-2" ><b>Commissioner 1 State:</b>  ${masterFields.commissioner1State}</b></div>
            <div class="px-2" ><b>Commissioner 1 Zip:</b>  ${masterFields.commissioner1Zip}</b></div>
            <div class="px-2" ><b>Commissioner 1 Phone:</b>  ${masterFields.commissioner1Phone}</b></div>
            <div class="px-2" ><b>Commissioner 1 Email:</b>  ${masterFields.commissioner1Email}</b></div>
            <div class="px-2" ><b>Commissioner 2 First Name:</b>  ${masterFields.commissioner2FirstName}</b></div>
            <div class="px-2" ><b>Commissioner 2 Last Name:</b>  ${masterFields.commissioner2LastName}</b></div>
            <div class="px-2" ><b>Commissioner 2 Street Address:</b>  ${masterFields.commissioner2StreetAddress}</b></div>
            <div class="px-2" ><b>Commissioner 2 City:</b>  ${masterFields.commissioner2City}</b></div>
            <div class="px-2" ><b>Commissioner 2 State:</b>  ${masterFields.commissioner2State}</b></div>
            <div class="px-2" ><b>Commissioner 2 Zip:</b>  ${masterFields.commissioner2Zip}</b></div>
            <div class="px-2" ><b>Commissioner 2 Phone:</b>  ${masterFields.commissioner2Phone}</b></div>
            <div class="px-2" ><b>Commissioner 2 Email:</b>  ${masterFields.commissioner2Email}</b></div>
            <div class="px-2" ><b>Commissioner 3 First Name:</b>  ${masterFields.commissioner3FirstName}</b></div>
            <div class="px-2" ><b>Commissioner 3 Last Name:</b>  ${masterFields.commissioner3LastName}</b></div>
            <div class="px-2" ><b>Commissioner 3 Street Address:</b>  ${masterFields.commissioner3StreetAddress}</b></div>
            <div class="px-2" ><b>Commissioner 3 City:</b>  ${masterFields.commissioner3City}</b></div>
            <div class="px-2" ><b>Commissioner 3 State:</b>  ${masterFields.commissioner3State}</b></div>
            <div class="px-2" ><b>Commissioner 3 Zip:</b>  ${masterFields.commissioner3Zip}</b></div>
            <div class="px-2" ><b>Commissioner 3 Phone:</b>  ${masterFields.commissioner3Phone}</b></div>
            <div class="px-2" ><b>Commissioner 3 Email:</b>  ${masterFields.commissioner3Email}</b></div>
          </div>

          <div id="printCourtDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Court</h4>
            <div class="px-2" ><b>Courthouse Name:</b>  ${masterFields.courtHouseName}</b></div>
            <div class="px-2" ><b>Courthouse Street Address:</b>  ${masterFields.courtSteetAddress}</b></div>
            <div class="px-2" ><b>Courthouse City:</b>  ${masterFields.courtCity}</b></div>
            <div class="px-2" ><b>Courthouse State:</b>  ${masterFields.courtState}</b></div>
            <div class="px-2" ><b>Courthouse Zip:</b>  ${masterFields.courtZip}</b></div>
            <div class="px-2" ><b>Courthouse Type:</b>  ${masterFields.courtType}</b></div>
          </div>

          <div id="printJudgeDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Judge</h4>
            <div class="px-2" ><b>Judge First Name:</b>  ${masterFields.presidingJudgeFirstName}</b></div>
            <div class="px-2" ><b>Judge Last Name:</b>  ${masterFields.presidingJudgeLastName}</b></div>
            <div class="px-2" ><b>Judge Phone:</b>  ${masterFields.presidingJudgePhone}</b></div>
            <div class="px-2" ><b>Judge Email:</b>  ${masterFields.presidingJudgeEmail}</b></div>
          </div>

          <div id="printClerkDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Clerk</h4>
            <div class="px-2" ><b>Clerk First Name:</b>  ${masterFields.clerkFirstName}</b></div>
            <div class="px-2" ><b>Clerk Last Name:</b>  ${masterFields.clerkLastName}</b></div>
            <div class="px-2" ><b>Clerk Street Address:</b>  ${masterFields.clerkStreetAddress}</b></div>
            <div class="px-2" ><b>Clerk City:</b>  ${masterFields.clerkCity}</b></div>
            <div class="px-2" ><b>Clerk State:</b>  ${masterFields.clerkState}</b></div>
            <div class="px-2" ><b>Clerk Zip:</b>  ${masterFields.clerkZip}</b></div>
            <div class="px-2" ><b>Clerk Phone:</b>  ${masterFields.clerkPhone}</b></div>
            <div class="px-2" ><b>Clerk Email:</b>  ${masterFields.clerkEmail}</b></div>
          </div>

          <div id="printSheriffDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Sheriff</h4>
            <div class="px-2" ><b>Sheriff First Name:</b>  ${masterFields.sheriffFirstName}</b></div>
            <div class="px-2" ><b>Sheriff Last Name:</b>  ${masterFields.sheriffLastName}</b></div>
            <div class="px-2" ><b>Sheriff Street Address:</b>  ${masterFields.sheriffStreetAddress}</b></div>
            <div class="px-2" ><b>Sheriff City:</b>  ${masterFields.sheriffCity}</b></div>
            <div class="px-2" ><b>Sheriff State:</b>  ${masterFields.sheriffState}</b></div>
            <div class="px-2" ><b>Sheriff Zip:</b>  ${masterFields.sheriffZip}</b></div>
            <div class="px-2" ><b>Sheriff Phone:</b>  ${masterFields.sheriffPhone}</b></div>
            <div class="px-2" ><b>Sheriff Email:</b>  ${masterFields.sheriffEmail}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Firt Name:</b>  ${masterFields.sheriffAddContactFirstName}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Last Name:</b>  ${masterFields.sheriffAddContactLastName}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Title:</b>  ${masterFields.sheriffAddContactTitle}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Organization:</b>  ${masterFields.sheriffAddContactOrganization}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Phone:</b>  ${masterFields.sheriffAddContactPhone}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Email:</b>  ${masterFields.sheriffAddContactEmail}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Street Address:</b>  ${masterFields.sheriffAddContactStreetAddress}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact City:</b>  ${masterFields.sheriffAddContactCity}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact State:</b>  ${masterFields.sheriffAddContactState}</b></div>
            <div class="px-2" ><b>Sheriff Additional Contact Zip:</b>  ${masterFields.sheriffAddContactZip}</b></div>
          </div>

          <div id="printWebsiteDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Website</h4>
            <div class="px-2" ><b>Tax Billing System:</b>  ${masterFields.compSys}</b></div>
            <div class="px-2" ><b>Website URL:</b>  ${masterFields.countyWebUrl}</b></div>
          </div>
       


          <div id="printSaleDiv" class="mx-2 my-2 py-2 d-flex flex-column flex-wrap border border-dark rounded">
            <h4 class="text-center">Sale</h4>
            <div class="px-2" ><b>Sale Method:</b>  ${masterFields.saleMethod}</b></div>
            <div class="px-2" ><b>Sale Start Date:</b>  ${masterFields.salestartdatetime}</b></div>
            <div class="px-2" ><b>Sale End Date:</b>  ${masterFields.saleenddatetime}</b></div>
            <div class="px-2" ><b>Sale Street Address:</b>  ${masterFields.saleStreetAddress}</b></div>
            <div class="px-2" ><b>Sale City:</b>  ${masterFields.saleCity}</b></div>
            <div class="px-2" ><b>Sale State:</b>  ${masterFields.saleState}</b></div>
            <div class="px-2" ><b>Sale Zip:</b>  ${masterFields.saleZip}</b></div>
            <div class="px-2" ><b>Unsold Batches?:</b>  ${masterFields.unsoldBatch}</b></div>
            <div class="px-2" ><b>Unsold Batches Start Date:</b>  ${masterFields.unsoldStartBatch}</b></div>
            <div class="px-2" ><b>Unsold Batches End Date:</b>  ${masterFields.unsoldEndBatch}</b></div>
            <div class="px-2" ><b>Dynamic Ending?:</b>  ${masterFields.dynamicEnding}</b></div>
            <div class="px-2" ><b>Dynamic Ending Within Minutes:</b>  ${masterFields.withinMinutes}</b></div>
            <div class="px-2" ><b>Dynamic Ending Extend Minutes:</b>  ${masterFields.extendMinutes}</b></div>
          </div>


            





          
        
          
        </div>
      </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
    </html>
  `);

  
    
 

}



// ********** END OF PRINT DATA **********




// ********** VALIDATE EMAIL **********

// add event listener to the id printScreenBtn that calls the function printData
document.getElementById("printScreenBtn").addEventListener("click", printData);

// *** END PRINT DATA *** //

// *** VALIDATE EMAIL *** //

// function to validate email
function validateEmail(e) {
  // get the value of the input
  let email = e.target.value;
  // if the value is not empty
  if (email !== "") {
    // create a regular expression to test the email
    let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // if the email does not match the regular expression
    if (!emailRegEx.test(email)) {
   // set the background color of the input to red
      e.target.style.backgroundColor = "red";
  
 
      e.target.style.color = "white";
      e.target.style.fontWeight = "bold";
      // add the class of invalid to the input
      e.target.classList.add("invalid");
      // set the focus to the input

      e.target.focus();

    }

    // if the email does match the regular expression
    else {
      // set the background color of the input to white
      e.target.style.backgroundColor = "white";
      // set the color of the input to black
      e.target.style.color = "black";
      // set the font weight of the input to normal
      e.target.style.fontWeight = "normal";
      // remove the class of invalid from the input
      e.target.classList.remove("invalid");
    }
  }
}



  
// add an event lister to all input type of "email" that calls the function validateEmail
let emailInputs = document.querySelectorAll("input[type='email']");
for (let i = 0; i < emailInputs.length; i++) {
  emailInputs[i].addEventListener("blur", validateEmail);
}

// ********** END OF VALIDATE EMAIL **********




// ********** VALIDATE PHONE **********

// function to validate phone

function validatePhone(e) {

  if (e.target.value !== "") {
    // see if the value starts with a 1
       if (e.target.value.charAt(0) === "1") {
         // if the value starts with a 1 remove the first character
         e.target.value = e.target.value.slice(1);
         // if the next character is a - remove it
         if (e.target.value.charAt(0) === "-") {
           e. target.value = e.target.value.slice(1);
         }
       }
       
     }


 // if there are any inputs with id that contains "phone" or "Phone" in the id and the value is not empty
  if (e.target.id.includes("phone") || e.target.id.includes("Phone") && e.target.value !== "") {
    // create a regular expression to test the phone number
    let phoneRegEx = /^\d{3}-\d{3}-\d{4}$/;
    // if the phone number does not match the regular expression
    if (!phoneRegEx.test(e.target.value)) {
      // set the background color of the input to red
      e.target.style.backgroundColor = "red";
      // set the value of the input to an empty string
  
      e.target.style.color = "white";
      e.target.style.fontWeight = "bold";
      // add the class of invalid to the input
      e.target.classList.add("invalid");
      // set the focus to the input
      e.target.focus();
    }
    // if the phone number does match the regular expression
    else {
      // set the background color of the input to white
      e.target.style.backgroundColor = "white";
      // set the color of the input to black
      e.target.style.color = "black";
      // set the font weight of the input to normal
      e.target.style.fontWeight = "normal";
      // remove the class of invalid from the input
      e.target.classList.remove("invalid");
    }
  }
}

// add an event lister to all inputs that contain "phone" or "Phone" in the id that calls the function validatePhone
let phoneInputs = document.querySelectorAll("input[id*='phone'], input[id*='Phone']");
for (let i = 0; i < phoneInputs.length; i++) {
  phoneInputs[i].addEventListener("blur", validatePhone);
}



// ********** END OF VALIDATE PHONE **********


// ********** VALIDATE ZIP **********

// function to validate zip
function validateZip(e) {
  // if the input id contains "zip" or "Zip" and the value is not empty
  if (e.target.id.includes("zip") || e.target.id.includes("Zip") && e.target.value !== "") {
    // create a regular expression to test the zip code
    let zipRegEx = /^\d{5}$/;
    // if the zip code does not match the regular expression
    if (!zipRegEx.test(e.target.value)) {
      // set the background color of the input to red
      e.target.style.backgroundColor = "red";
     
      e.target.style.color = "white";
      e.target.style.fontWeight = "bold";
      // add the class of invalid to the input
      e.target.classList.add("invalid");
      // set the focus to the input
      e.target.focus();
    }
    // if the zip code does match the regular expression
    else {

      // set the background color of the input to white
      e.target.style.backgroundColor = "white";
      // set the color of the input to black
      e.target.style.color = "black";
      // set the font weight of the input to normal
      e.target.style.fontWeight = "normal";
      // remove the class of invalid from the input
      e.target.classList.remove("invalid");
    }
  }
}

// add an event lister to all inputs that contain "zip" or "Zip" in the id that calls the function validateZip
let zipInputs = document.querySelectorAll("input[id*='zip'], input[id*='Zip']");
for (let i = 0; i < zipInputs.length; i++) {
  zipInputs[i].addEventListener("blur", validateZip);
}


// ********** END OF VALIDATE ZIP **********



// ********** CREATE A DARK MODE **********

// function to create a dark mode
function darkMode(e) {
  // if the checkbox is checked
  if (e.target.checked) {
 // change the class of the body to bg-dark
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");
    // change the class of the text
    document.body.classList.remove("text-dark"); 
    document.body.classList.add("text-light");
    // change all class of border-dark to border-light
    let borders = document.querySelectorAll("input, select, textarea");
    for (let i = 0; i < borders.length; i++) {
      borders[i].classList.remove("border-dark");
      borders[i].classList.add("border-light");
    }

    // add a light border to the card header
    let cHead = document.querySelectorAll(".card-header");
    for (let i = 0; i < cHead.length; i++) {
      cHead[i].classList.remove("border-dark");
      cHead[i].classList.add("border-light");
    }

    // change the logout button to btn-outline-light from btn-outline-dark
    let logout = document.querySelectorAll(".btn-outline-dark");
    for (let i = 0; i < logout.length; i++) {
      logout[i].classList.remove("btn-outline-dark");
      logout[i].classList.add("btn-outline-light");
    }

    // change all the inputs to bg-dark and text-light
    let inputs = document.querySelectorAll("input, select, textarea");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("bg-light");
      inputs[i].classList.add("bg-dark");
      inputs[i].classList.remove("text-dark");
      inputs[i].classList.add("text-light");
    }

    // change all labels to text-light
    let labels = document.querySelectorAll("label");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("text-dark");
      labels[i].classList.add("text-light");
    }

    // change the card header to bg-dark and text-light
    let cardHeaders = document.querySelectorAll(".card-header");
    for (let i = 0; i < cardHeaders.length; i++) {
      cardHeaders[i].classList.remove("bg-light");
      cardHeaders[i].classList.add("bg-dark");
      cardHeaders[i].classList.remove("text-dark");
      cardHeaders[i].classList.add("text-light");
    }

    // change the card body to bg-dark and text-light
    let cardBodies = document.querySelectorAll(".card-body");
    for (let i = 0; i < cardBodies.length; i++) {
      cardBodies[i].classList.remove("bg-light");
      cardBodies[i].classList.add("bg-dark");
      cardBodies[i].classList.remove("text-dark");
      cardBodies[i].classList.add("text-light");
    }

    // add border-white to the card
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("border-white");
    }

    // add border-light to the card header
    let cardHeaders2 = document.querySelectorAll(".card-header");
    for (let i = 0; i < cardHeaders2.length; i++) {
      cardHeaders2[i].classList.add("border-light");
    }

    // add border-light to everthing with the classname "innerBord"
    let innerBord = document.querySelectorAll(".innerBord");
    for (let i = 0; i < innerBord.length; i++) {
      innerBord[i].classList.remove("border-dark");
      innerBord[i].classList.add("border-light");
    }


    // set darkState to true
    darkState = true;

  }
  // if the checkbox is not checked
  else {
    // change the class of the body
    document.body.classList.remove("bg-dark");
   
    // change the class of the text
    document.body.classList.remove("text-light");
   
    // change all class of border-light to border-dark
    let borders = document.querySelectorAll("input, select, textarea");
    for (let i = 0; i < borders.length; i++) {
      borders[i].classList.remove("border-light");
    }
    // change all the inputs to bg-light and text-dark
    let inputs = document.querySelectorAll("input, select, textarea");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("bg-dark");
      inputs[i].classList.remove("text-light");
     
    }

    // remove border-white from the card
    let card3 = document.querySelectorAll(".card");
    for (let i = 0; i < card3.length; i++) {
      card3[i].classList.remove("border-white");
    }

    // change all labels to text-dark
    let labels = document.querySelectorAll("label");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("text-light");
    }

    // change the card header to bg-light and text-dark
    let cardHeaders = document.querySelectorAll(".card-header");
    for (let i = 0; i < cardHeaders.length; i++) {
      cardHeaders[i].classList.remove("bg-dark");
     
      cardHeaders[i].classList.remove("text-light");
      
    }

    
    let cardBodies = document.querySelectorAll(".card-body");
    for (let i = 0; i < cardBodies.length; i++) {
      cardBodies[i].classList.remove("bg-dark");
     
      cardBodies[i].classList.remove("text-light");
    
    }

    // add border-dark to the card
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("border-dark");
    }

    // add border-dark to the card header
    let cardHeaders2 = document.querySelectorAll(".card-header");
    for (let i = 0; i < cardHeaders2.length; i++) {
      cardHeaders2[i].classList.add("border-dark");
    }

       // change the logout button to btn-outline-light from btn-outline-dark
       let logout = document.querySelectorAll(".btn-outline-light");
        for (let i = 0; i < logout.length; i++) {
          logout[i].classList.remove("btn-outline-light");
          logout[i].classList.add("btn-outline-dark");
        }

 // add border-dark to everthing with the classname "innerBord"
  let innerBord = document.querySelectorAll(".innerBord");
  for (let i = 0; i < innerBord.length; i++) {
    innerBord[i].classList.remove("border-light");
    innerBord[i].classList.add("border-dark");
  }


    // set darkState to false
    darkState = false;


  }

  }


// add an event listener to the checkbox that calls the function darkMode
document.getElementById("darkMode").addEventListener("change", darkMode);
