let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all' );
xhr.onload = function() {
    let data = JSON.parse(xhr.responseText)

    let output = data.reduce((acc,val)=>{
        return acc + +val.population
    },0)

    console.log("Total Population is : ", output)

};
xhr.send();