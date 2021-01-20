// activeer de Device Orientation API
window.addEventListener('deviceorientation', handleOrientation);

// event handler
function handleOrientation(eventData){
    let alpha, beta, gamma;
    // alpha rotation compass rotation Z-axis
    alpha = Math.round(eventData.alpha);
    // beta rotation front back rotation X-axis
    beta = Math.round(eventData.beta);
    // gamma rotation left right rotation Y-axis
    gamma = Math.round(eventData.gamma);
    
    // doe iets met de data
    doSomething(alpha, beta, gamma);     
}   


function doSomething(alpha, beta, gamma){
    showDataColor(alpha, beta, gamma); // kleurtjes en tekst
    activateVoice(alpha, beta, gamma); // geluid
    showMyImage(alpha, beta, gamma);   // afbeelding  
}

function showDataColor(alpha, beta, gamma){
    //show the data in HTML
    document.getElementById('beta').innerHTML = beta;
    document.getElementById('gamma').innerHTML = gamma;
    document.getElementById('alpha').innerHTML = alpha;

    // change background color
     // gamma rotation left right rotation Y-axis
    document.body.style.background = `rgb(150, ${Math.abs(gamma)*5}, 150)`;
}

function activateVoice(alpha, beta, gamma){
    // voice if Z-axis rotation > value
    let myTxt = ["Why you bully me?", "Ah staph it", "Uuuuuuuuuuuuuuuhhhhhhhhhhh"]; 
    if(alpha >= 120 && alpha <= 160){
        
        sayItLoud(myTxt[0]); // text 2 speech

        // laat het ook in de HTML zien
        document.getElementById('voice').innerHTML = myTxt[0];
    }
    else if(alpha >= 160 && alpha <= 220){

        sayItLoud(myTxt[1]);

        document.getElementById('voice').innerHTML = myTxt[1];

    }
        else {
            // haal de tekst weg
            document.getElementById('voice').innerHTML = "";
        }
}

function showMyImage(alpha, beta, gamma){
    // image if X-axis > value
    plaatje = ["https://media.s-bol.com/31l02pLokljp/550x399.jpg", "https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_boo_who_mike_lowery_00_3000x.png?v=1575403257", "https://www.leftlion.co.uk/media/4921009/boo-burger.jpg"]
    if(beta >= 40 && beta <= 80){
        document.getElementById('myImage').src = plaatje[0]; // show image
        }
    else if(beta >= 80 && beta <= 120){
        document.getElementById('myImage').src = plaatje[1];
    }
        else {
            document.getElementById('myImage').src = ""; // no image
        }
}