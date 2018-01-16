// Include data for accessing Google APIs
const apiKey = 'AIzaSyBZA22u9EzLkV9__UHGKJ1643rLFDMmqHI';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;

  fetch(urlToExpand).then(function(response) {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, function(networkError) {
    console.log(networkError.message);
  }).then(function(jsonResponse) {
    $responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
		return jsonResponse;
  });
};


function shortenUrl() {

};

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);
