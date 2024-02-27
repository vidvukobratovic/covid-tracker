let countries_arr = [
  "Afghanistan",
  "Africa",
  "Albania",
  "Algeria",
  "All",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Asia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia-and-Herzegovina",
  "Botswana",
  "Brazil",
  "British-Virgin-Islands",
  "Brunei",
  "Bulgaria",
  "Burkina-Faso",
  "Burundi",
  "CAR",
  "Cabo-Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Caribbean-Netherlands",
  "Cayman-Islands",
  "Chad",
  "Channel-Islands",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook-Islands",
  "Costa-Rica",
  "Croatia",
  "Cuba",
  "Cura&ccedil;ao",
  "Cyprus",
  "Czechia",
  "DPRK",
  "DRC",
  "Denmark",
  "Diamond-Princess",
  "Djibouti",
  "Dominica",
  "Dominican-Republic",
  "Ecuador",
  "Egypt",
  "El-Salvador",
  "Equatorial-Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Europe",
  "Faeroe-Islands",
  "Falkland-Islands",
  "Fiji",
  "Finland",
  "France",
  "French-Guiana",
  "French-Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong-Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle-of-Man",
  "Israel",
  "Italy",
  "Ivory-Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "MS-Zaandam",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall-Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New-Caledonia",
  "New-Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "North-America",
  "North-Macedonia",
  "Norway",
  "Oceania",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua-New-Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "R&eacute;union",
  "Romania",
  "Russia",
  "Rwanda",
  "S-Korea",
  "Saint-Helena",
  "Saint-Kitts-and-Nevis",
  "Saint-Lucia",
  "Saint-Martin",
  "Saint-Pierre-Miquelon",
  "Samoa",
  "San-Marino",
  "Sao-Tome-and-Principe",
  "Saudi-Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra-Leone",
  "Singapore",
  "Sint-Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon-Islands",
  "Somalia",
  "South-Africa",
  "South-America",
  "South-Sudan",
  "Spain",
  "Sri-Lanka",
  "St-Barth",
  "St-Vincent-Grenadines",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad-and-Tobago",
  "Tunisia",
  "Turkey",
  "Turks-and-Caicos",
  "Tuvalu",
  "UAE",
  "UK",
  "USA",
  "Uganda",
  "Ukraine",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican-City",
  "Venezuela",
  "Vietnam",
  "Wallis-and-Futuna",
  "Western-Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function display() {
  let url = "https://covid-193.p.rapidapi.com/statistics";
  let country = capitalizeFirstLetter(getCountry());
  let country_index = 0;

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "1402c9f66emsh7474c564acaca79p1eed5bjsn30eb91f25ef6",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.response.length; i++) {
        countries_arr.push(data.response[i].country);
        if (data.response[i].country == country) {
          country_index = i;
        }
      }
      if (country_index == 0 && country != "China") {
        document.getElementById("invalid").innerHTML =
          "Please enter a valid country";
        document.getElementById("date").innerHTML = "";
        document.getElementById("active").innerHTML = "";
        document.getElementById("new").innerHTML = "";
        document.getElementById("critical").innerHTML = "";
        document.getElementById("recover").innerHTML = "";
        document.getElementById("total").innerHTML = "";
      } else {
        document.getElementById("invalid").innerHTML = "";
        document.getElementById("date").innerHTML =
          "Date: " + data.response[country_index].day;
        document.getElementById("active").innerHTML =
          "Active Cases: " + data.response[country_index].cases.active;
        document.getElementById("new").innerHTML =
          "New Cases: " + data.response[country_index].cases.new;
        document.getElementById("critical").innerHTML =
          "Critical Cases: " + data.response[country_index].cases.critical;
        document.getElementById("recover").innerHTML =
          "Recovered: " + data.response[country_index].cases.recovered;
        document.getElementById("total").innerHTML =
          "Total: " + data.response[country_index].cases.total;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function getCountry() {
  const cntry = document.getElementById("country").value;
  return cntry;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function start() {
  let url = "https://covid-193.p.rapidapi.com/statistics";
  let country = capitalizeFirstLetter(getCountry());
  let country_index = 0;

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "1402c9f66emsh7474c564acaca79p1eed5bjsn30eb91f25ef6",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.response.length; i++) {
        countries_arr.push(data.response[i].country);
        if (data.response[i].country == country) {
          country_index = i;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(countries_arr);
}

function filterFunction() {}
