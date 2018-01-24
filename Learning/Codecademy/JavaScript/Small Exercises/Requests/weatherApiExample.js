// Foursquare API Info
const clientId = 'L0JWW21K0CNJGHSG252IKAG0HSZ3OTFG1EVBNTGUGHUQMLA3';
const clientSecret = 'Q4XAPJJEDSYQ0MSSHVRX15QY5YWZ2KHWPAIBCM2OTRED2P3U';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

// APIXU Info
const apiKey = 'f5d713e74a3e448892d03350182101';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key='; //Paris

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// AJAX functions
async function getVenues() {
  console.log('getVenues()');
  const city = $input.val();
  console.log("city = " + city);

  const urlToFetch = url + city + "&venuePhotos=1&limit=6&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20180122";
  console.log("urlToFetch = " + urlToFetch);

  try {
    let response = await fetch(urlToFetch);
    console.log("response = ");
    console.log(response);

    if(response.ok) {
      let jsonResponse = await response.json();
      console.log("jsonResponse = ");
      console.log(jsonResponse);

      let venues = jsonResponse.response.groups[0].items.map(location => location.venue);
      console.log("venues = ");
      console.log(venues);

      return venues;
    }
  } catch(error) {
    console.log(error);
  }
};

async function getForecast() {
  console.log('\t\tgetForecast()');
    const urlToFetch = forecastUrl + apiKey + "&q=" + $input.val() + "&days=3&hour=12";
    console.log("\t\turlToFetch = " + urlToFetch);

  try {
    let response = await fetch(urlToFetch);
    console.log("\t\tresponse = ");
    console.log(response);

    if(response.ok) {
      let jsonResponse = await response.json();
      console.log("\t\tjsonResponse = ");
      console.log(jsonResponse);

      let days = jsonResponse.forecast.forecastday;
      console.log("\t\tdays = ");
      console.log(days);

      return days;
    }
  } catch(error) {
    console.log(error);
  }
};

// Render functions
function renderVenues(venues) {
  $venueDivs.forEach(($venue, index) => {
    let venueContent =
      '<h2>' + venues[index].name + '</h2>' +
      '<img class="venueimage" src="' + imgPrefix +
      venues[index].photos.groups[0].items[0].suffix + '"/>' +
      '<h3>Address:</h3>' +
      '<p>' + venues[index].location.address + '</p>' +
      '<p>' + venues[index].location.city + '</p>' +
      '<p>' + venues[index].location.country + '</p>';
    $venue.append(venueContent);
  });
  $destination.append('<h2>' + venues[0].location.city + '</h2>');
}

function renderForecast(days) {
  $weatherDivs.forEach(($day, index) => {
    let weatherContent =
      '<h2> High: ' + days[index].day.maxtemp_f + '</h2>' +
      '<h2> Low: ' + days[index].day.mintemp_f + '</h2>' +
      '<img src="http://' + days[index].day.condition.icon +
      '" class="weathericon" />' +
      '<h2>' + weekDays[(new Date(days[index].date)).getDay()] + '</h2>';
    $day.append(weatherContent);
  });
}

function executeSearch() {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(
    function(venues) {
      renderVenues(venues);
    });
  getForecast().then(
  	function(forecast) {
      renderForecast(forecast);
    }
  );
  return false;
}

$submit.click(executeSearch)
