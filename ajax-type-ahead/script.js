//raw data of countries which is meant to be in json
const rawdata = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
const cities = [];
fetch(rawdata)
    .then(ok => ok.json())  //this returns a promise of json
    .then(data => cities.push(...data)); //the promise can now show as json
      //part of es6 ...data used to avoid nested array inside cities array
function findmatch(wordtomatch,cities){
     return cities.filter(place =>{
        const regex = new RegExp(wordtomatch,'gi');  //gi means case insensitive search
        return place.city.match(regex) || place.state.match(regex);
        });
    }  
function displaymatch(){
    const matchArray = findmatch(this.value,cities);
    const html = matchArray.map(place =>{
        return `
        <div>
        <span class ="name"> ${place.city},${place.state}</span>
        <span class ="population">    population(${place.population})</span></div>`;
    }).join('');
    suggest.innerHTML=html;
};
const input = document.querySelector('input');
const suggest = document.querySelector('#suggest');

input.addEventListener('change',displaymatch);
input.addEventListener('keyup',displaymatch);

