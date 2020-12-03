"use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset')
    let myPitch = document.getElementById('myPitch');
    let myRate = document.getElementById('myRate');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        reset();
    })

    myPitch.addEventListener('type', function(){

    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let rand2 = randomizer(woord2Length);
        let rand3 = randomizer(woord3Length);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[rand2];
        let woord3 = restwoord[rand3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[0];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }

    function reset(){
        let tekst = ("....")
        myText.innerHTML = tekst;
        myImage.scr = ("https://news.bitcoin.com/wp-content/uploads/2020/10/a-look-at-the-fascist-agenda-behind-the-great-reset-and-the-wefs-reboot-propaganda.jpg")
         
    }
    
    
    
    const onderwerp = ["I", "He", "Bob"];
    const werkwoord = ["eat", "runs", "moves",];
    const restwoord = ["food", "fast", "around"];
        
    let plaatjes = ["https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681__340.png", "https://www.how-to-draw-funny-cartoons.com/images/cartoon-baby-007.jpg", "https://thumbs.dreamstime.com/b/smiling-heart-cartoon-open-arms-nice-image-all-projects-love-representing-version-its-suggest-idea-40930153.jpg", "https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg?quality=80"]
    let arrayLength = onderwerp.length;
    let woord2Length = werkwoord.length;
    let woord3Length = restwoord.length;


  
    