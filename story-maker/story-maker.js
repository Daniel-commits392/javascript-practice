const btn = document.getElementById("buttonPrompt");
const output = document.getElementById("result");
btn.addEventListener("click", () => {
    const user = prompt("Hello, what is your name?");
    const mode = prompt("Which one do you wish to choose ; Story mode or Mission mode?")
    output.textContent = "Hello" + user + " " + "You have chosen" + " " + mode
})












let adjective = 'young' ;
let noun = 'boy';
let verb = 'ignited';
let place = 'haunted house';
let adjective2 = 'long';
let noun2 = 'burgers';
// string concatenation using template literals
let firstStory =`Once upon a time, there was a ${adjective} ${noun} who loved to eat ${noun2}. \n The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`
console.log(`First story: ${firstStory}`)

adjective ='immortal';
noun = 'king';
place = 'palace';
verb = 'touched';
adjective2 = 'black';
noun2 = 'souls';
let message2= 'Second story :' ;

let secondStory = `Once upon a time, there was a ${adjective} ${noun} who loved to eat ${noun2}. \n The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`
console.log(`Second story: ${secondStory}`);

// let astronautName = 'Victor';
// let missionNumber = 392;
// let fuelRemaining = 57; 
// fuelRemaining = 30
// // this is a boolean so no '' or ""
// let isSuccessful = fuelRemaining>=50 ; // this is a condition based assignment
// let planet = 'Vahere';
// let missionLog = `Astronaut ${astronautName} completed mission ${missionNumber} on planet ${planet}. Success status: ${isSuccessful ? "SUCCESS" : "FAILED"}. Fuel remaining: ${fuelRemaining}%.`
// console.log(`MISSION LOG: ${missionLog}`);

let astronautName = 'Michael';
let missionNumber = 3425;
let fuelRemaining  = 67;
let planet = 'Mihagnar';
let missionStatus = fuelRemaining>=70 ? 'EXCELLENT'  : fuelRemaining <=50 ? 'FAILED' : 'SUCCESS';
let isCriticalMission = fuelRemaining<=30 ;
let missionReport = `${astronautName} completed mission #${missionNumber} on planet ${planet}. \n Status: ${missionStatus}. \n Critical: ${isCriticalMission ? "TRUE" : "FALSE"}. \n Fuel: ${fuelRemaining}%.`;
console.log(`MISSION REPORT: ${missionReport}`)

let story = 'Once upon a time there lived a great king.\n He was just and fir and beloved by all his people. \n The just king had seven daughters who were the most beautiful in the land . \n They were sort out by many who wanted to marry them.'
console.log(story); // (\n ) use it when u wnat to create a new line in a string.Its called an escape sequence.But u can still use template literals for the same purpose.

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${ (score / highestScore) * 100}%.`;
console.log(output); 

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!",);
console.log(position); 
console.log(sentence[sentence.length]);



