function display() {
  let url = "https://covid-193.p.rapidapi.com/statistics";
  let country = capitalizeFirstLetter(getCountry());
  let country_index = 0;
  let countries_arr = [];

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "",
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
  let cntry = document.getElementById("country").value;

  return cntry;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function start() {
  let url = "https://covid-193.p.rapidapi.com/statistics";
  let country = capitalizeFirstLetter(getCountry());
  let country_index = 0;
  let countries_arr = [];

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

function test() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("disney");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("country");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
