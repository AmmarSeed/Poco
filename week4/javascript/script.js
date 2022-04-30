const numberofChildren = [1,2,3,4,5,6];
const Partnersname = ["khaled", "Carla", "stefen", "Nastya"];
const Geographiclocation = ["zurich", "Bern", "Aargau"];
const Jobtitle = ["ITAccessManager", "ApplicationEngineer"];


let random = numberofChildren[Math.floor(Math.random() * numberofChildren.length)];
let random1 = Partnersname[Math.floor(Math.random() * Partnersname.length)];
let random2 = Geographiclocation[Math.floor(Math.random() * Geographiclocation.length)];
let random3 = Jobtitle[Math.floor(Math.random() * Jobtitle.length)];


console.log(`You will be a ${random3}in ${random2}, and married to ${random1} with ${random} kids.`)