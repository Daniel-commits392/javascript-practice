const fortune1 = "You wil have a lovely encounter today."
const fortune2 = "You wil suprisingly win a big reward tomorrow."
const fortune3 = "A terrible occurence shall occur upon one of you."
const fortune4 = "Be cautious of envious people around you."
const fortune5 = "Avoid going to the narrow alleys from today."
const max = 6;
const min = 1

const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);

let selectedFortune;
if (randomNumber === 1){
   selectedFortune = fortune1
} else if (randomNumber === 2){
   selectedFortune = fortune2
} else if (randomNumber === 3){
   selectedFortune = fortune3
} else if (randomNumber === 4){
   selectedFortune = fortune4
} else {
   selectedFortune = fortune5
}


console.log(selectedFortune)    