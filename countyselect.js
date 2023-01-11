const states = [
    {
      name: "Colorado",
      counties: [
        "Adams", "Alamosa", "Arapahoe", "Archuleta", "Baca", "Bent", "Boulder", "Broomfield", "Chaffee", "Cheyenne", "Clear Creek", "Conejos", "Costilla", "Crowley", "Custer", "Delta", "Denver", "Dolores", "Douglas", "Eagle", "El Paso", "Elbert", "Fremont", "Garfield", "Gilpin", "Grand", "Gunnison", "Hinsdale", "Huerfano", "Jackson", "Jefferson", "Kiowa", "Kit Carson", "Lake", "La Plata", "Larimer", "Las Animas", "Lincoln", "Logan", "Mesa", "Mineral", "Moffat", "Montezuma", "Montrose", "Morgan", "Otero", "Ouray", "Park", "Phillips", "Pitkin", "Prowers", "Pueblo", "Rio Blanco", "Rio Grande", "Routt", "Saguache", "San Juan", "San Miguel", "Sedgwick", "Summit", "Teller", "Washington", "Weld", "Yuma",
      ],
    },
   {
      name: "Florida",
      counties: [
        "Alachua", "Baker", "Bay", "Bradford", "Brevard", "Broward", "Calhoun", "Charlotte", "Citrus", "Clay", "Collier", "Columbia", "DeSoto", "Dixie", "Duval", "Escambia", "Flagler", "Franklin", "Gadsden", "Gilchrist", "Glades", "Gulf", "Hamilton", "Hardee", "Hendry", "Hernando", "Highlands", "Hillsborough", "Holmes", "Indian River", "Jackson", "Jefferson", "Lafayette", "Lake", "Lee", "Leon", "Levy", "Liberty", "Madison", "Manatee", "Marion", "Martin", "Miami-Dade", "Monroe", "Nassau", "Okaloosa", "Okeechobee", "Orange", "Osceola", "Palm Beach", "Pasco", "Pinellas", "Polk", "Putnam", "Santa Rosa", "Sarasota", "Seminole", "St. Johns", "St. Lucie", "Sumter", "Suwannee", "Taylor", "Union", "Volusia", "Wakulla", "Walton", "Washington",
      ],
    },
 {
      name: "Louisiana",
      counties: [
        "Acadia", "Allen", "Ascension", "Assumption", "Avoyelles", "Beauregard", "Bienville", "Bossier", "Caddo", "Calcasieu", "Caldwell", "Cameron", "Catahoula", "Claiborne", "Concordia", "De Soto", "East Baton Rouge", "East Carroll", "East Feliciana", "Evangeline", "Franklin", "Grant", "Iberia", "Iberville", "Jackson", "Jefferson", "Jefferson Davis", "Lafayette", "Lafourche", "La Salle", "Lincoln", "Livingston", "Madison", "Morehouse", "Natchitoches", "Orleans", "Ouachita", "Plaquemines", "Pointe Coupee", "Rapides", "Red River", "Richland", "Sabine", "St. Bernard", "St. Charles", "St. Helena", "St. James", "St. John the Baptist", "St. Landry", "St. Martin", "St. Mary", "St. Tammany", "Tangipahoa", "Tensas", "Terrebonne", "Union", "Vermilion", "Vernon", "Washington", "Webster", "West Baton Rouge", "West Carroll", "West Feliciana", "Winn",
      ],
    },
    {
      name: "Indiana",
      counties: [
        "Adams", "Allen", "Bartholomew", "Benton", "Blackford", "Boone", "Brown", "Carroll", "Cass", "Clark", "Clay", "Clinton", "Crawford", "Daviess", "Dearborn", "Decatur", "De Kalb", "Delaware", "Dubois", "Elkhart", "Fayette", "Floyd", "Fountain", "Franklin", "Fulton", "Gibson", "Grant", "Greene", "Hamilton", "Hancock", "Harrison", "Hendricks", "Henry", "Howard", "Huntington", "Jackson", "Jasper", "Jay", "Jefferson", "Jennings", "Johnson", "Knox", "Kosciusko", "La Porte", "Lagrange", "Lake", "Lawrence", "Madison", "Marion", "Marshall", "Martin", "Miami", "Monroe", "Montgomery", "Morgan", "Newton", "Noble", "Ohio", "Orange", "Owen", "Parke", "Perry", "Pike", "Porter", "Posey", "Pulaski", "Putnam", "Randolph", "Ripley", "Rush", "St. Joseph", "Scott", "Shelby", "Spencer", "Starke", "Steuben", "Sullivan", "Switzerland", "Tippecanoe", "Tipton", "Union", "Vanderburgh", "Vermillion", "Vigo", "Wabash", "Warren", "Warrick", "Washington", "Wayne", "Wells", "White", "Whitley",
      ],
    }
];

function popCounty() {
    // add on an event listener to the state select element
    state.addEventListener("change", function() {
        // clear out the county select element
        county.innerHTML = "";
        // loop through the states array
        for (let i = 0; i < states.length; i++) {
            // check if the state name matches the selected state
            if (states[i].name === state.value) {
                // loop through the counties array
                for (let j = 0; j < states[i].counties.length; j++) {
                    // create an option element
                    let option = document.createElement("option");
                    // set the option's value to the county name
                    option.value = states[i].counties[j];
                    // set the option's text to the county name
                    option.text = states[i].counties[j];
                    // append the option to the select element
                    county.appendChild(option);
                }
            }
        }
    }
    );
}


  function popState() {
    // loop through the states array
    for (let i = 0; i < states.length; i++) {
        // create an option element
        let option = document.createElement("option");
        // set the option's value to the state name
        option.value = states[i].name;
        // set the option's text to the state name
        option.text = states[i].name;
        // append the option to the select element
        state.appendChild(option);
        }
    // set the state select element's value to the the state with the name "Indiana"
    state.value = "Indiana";

    // populate the county select element with the counties of the state with the name "Indiana"
    for (let i = 0; i < states.length; i++) {
        if (states[i].name === state.value) {
            for (let j = 0; j < states[i].counties.length; j++) {
                let option = document.createElement("option");
                option.value = states[i].counties[j];
                option.text = states[i].counties[j];
                county.appendChild(option);
            }
        }
  
    }
}

    popState();

    

    popCounty();

// add an event listener to the id conuntselBtn that redirects to index2.html with the props of the selected state and county
countselBtn.addEventListener("click", function() {
        location.href = "index2.html?state=" + state.value + "&county=" + county.value;
    }
    );




