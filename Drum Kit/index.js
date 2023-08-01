var numberOfDrumButtons = document.querySelectorAll(".drum").length; // length bo długość sprawdza czyli jak jest 7 przyciskow to długość 7

for (var i = 0; i < numberOfDrumButtons; i++) {     // pętla for zaczyna od 0 do długości(ilości) elementów z klasą .drum
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {  // querySelectorAll zaznacza wszystkie elementy z konkretnym oznaczeniem np. klasa drum 
    // przy querySelectorAll trzeba wskazać pozycje [i] więc w pętli iteruje się to tak jak warunki wyżej

var buttonInnerHTML = this.innerHTML;          //zaznacza innerHTML aby mógł zmieniać 
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML)
})
}
//detecting keyboard press
document.addEventListener("keydown", function(event) {
    
 makeSound(event.key);
 buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {                         //case nawiguje element, break jest elsem
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;

        case "a":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
        break;

        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;

        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;

        default: console.log(buttonInnerHTML);     //default jest zabezpieczeniem gdy coś nie jest tak jak powinno u góry w switchu to wykonuje się default
    }
    
}

function buttonAnimation(currentKey) {
  

   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");


   setTimeout(function() {
    activeButton.classList.remove("pressed");
   }, 100) // czas po ktorym remove preseed się wykona
}
