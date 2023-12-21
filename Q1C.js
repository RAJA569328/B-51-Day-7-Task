let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all' );
xhr.onload = function() {
    let data = JSON.parse(xhr.responseText)

    let output = data.forEach((value)=> {
        console.log(value.name.common)
        console.log(...value.capital)
        console.log("flag" ,value.flag)
    })

};
xhr.send();