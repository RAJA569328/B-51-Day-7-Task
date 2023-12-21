let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all' );
xhr.onload = function() {
    let data = JSON.parse(xhr.responseText)

    let output = data.filter((val)=> val.population < 200000)

    console.log(output)

};
xhr.send();