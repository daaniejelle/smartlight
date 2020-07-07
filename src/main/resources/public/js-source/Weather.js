const key = '9db4f0d72c6a05704284fa7f6dbf0af8';
if(key=='') document.getElementById('temp').innerHTML = ('9db4f0d72c6a05704284fa7f6dbf0af8');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description;

	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;

  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 6167865 );
}