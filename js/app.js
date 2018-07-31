var request = superagent;
var API_URL = 'https://restcountries.eu/rest/v2/all';

request
  .get(API_URL)
  .then(function (elements) {
    var countries = elements.body;
    console.log(countries);
    
    countries.forEach(function (country) {
      var divContainer = document.querySelector('.countries-container');
      var div = document.createElement('div');
      div.className = "country-card"
      var img = document.createElement('img');
      img.className = "country-flag";
      var h4 = document.createElement('h4');
      h4.className = "country-name";
      var p = document.createElement('p');
      p.className = "country-capital";
      img.setAttribute('src', country.flag);
      h4.innerHTML = country.name;
      p.innerHTML = country.capital;
      div.appendChild(img);
      div.appendChild(h4);    
      div.appendChild(p);
      divContainer.appendChild(div);
    });
  });