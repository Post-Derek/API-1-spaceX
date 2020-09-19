let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let img4 = document.querySelector('#img4')

let about1 = document.querySelector('#about1')
let about2 = document.querySelector('#about2')
let about3 = document.querySelector('#about3')
let about4 = document.querySelector('#about4')

let country1 = document.querySelector('#country1')
let country2 = document.querySelector('#country2')
let country3 = document.querySelector('#country3')
let country4 = document.querySelector('#country4')

let flight1 = document.querySelector('#flight1')
let flight2 = document.querySelector('#flight2')
let flight3 = document.querySelector('#flight3')
let flight4 = document.querySelector('#flight4')

let ty1 = document.querySelector('#type1')
let ty2 = document.querySelector('#type2')
let ty3 = document.querySelector('#type3')
let ty4 = document.querySelector('#type4')

let cost1 = document.querySelector('#cost1')
let cost2 = document.querySelector('#cost2')
let cost3 = document.querySelector('#cost3')
let cost4 = document.querySelector('#cost4')

let height1 = document.querySelector('#hght1')
let height2 = document.querySelector('#hght2')
let height3 = document.querySelector('#hght3')
let height4 = document.querySelector('#hght4')

fetch('https://api.spacexdata.com/v4/rockets')
    .then(res => res.json())

    .then(json => {
        displayResults(json)

    })



function displayResults(json) {
    console.log(json);

    console.log(json[0].first_flight)

for (rocket of json )


//Image 
img1.src = json[0].flickr_images[0];
img2.src = json[1].flickr_images[0];
img3.src = json[2].flickr_images[0];
img4.src = json[3].flickr_images[0];


//Discription Info

let aboutRock1 = json[0].description;

var listItem1 = document.createElement('p')

listItem1.innerText = aboutRock1
about1.appendChild(listItem1);

//

let aboutRock2 = json[1].description;

var listItem2 = document.createElement('p')

listItem2.innerText = aboutRock2
about2.appendChild(listItem2);

//

let aboutRock3 = json[2].description;

var listItem3 = document.createElement('p')

listItem3.innerText = aboutRock3
about3.appendChild(listItem3);

//

let aboutRock4 = json[3].description;

var listItem4 = document.createElement('p')

listItem4.innerText = aboutRock4
about4.appendChild(listItem4);



//Country Info

let countryRock1 = json[0].country;

var listItem5 = document.createElement('li')

listItem5.innerText = countryRock1
country1.appendChild(listItem5);

//

let countryRock2 = json[1].country;

var listItem6 = document.createElement('li')

listItem6.innerText = countryRock2
country2.appendChild(listItem6);

//

let countryRock3 = json[2].country;

var listItem7 = document.createElement('li')

listItem7.innerText = countryRock3
country3.appendChild(listItem7);

//

let countryRock4 = json[3].country;

var listItem8 = document.createElement('li')

listItem8.innerText = countryRock4
country4.appendChild(listItem8);


//First Flight Info

let firstFlight1 = json[0].first_flight

var listItem9 = document.createElement('li')

listItem9.innerText = firstFlight1
flight1.appendChild(listItem9);

//

let firstFlight2 = json[1].first_flight

var listItem10 = document.createElement('li')

listItem10.innerText = firstFlight2
flight2.appendChild(listItem10);

//

let firstFlight3 = json[2].first_flight

var listItem11 = document.createElement('li')

listItem11.innerText = firstFlight3
flight3.appendChild(listItem11);

//

let firstFlight4 = json[3].first_flight

var listItem12 = document.createElement('li')

listItem12.innerText = firstFlight4
flight4.appendChild(listItem12);


//Type Info

let typeRock1 = json[0].type;

var listItem13 = document.createElement('li')

listItem13.innerText = typeRock1
ty1.appendChild(listItem13);

//

let typeRock2 = json[1].type;

var listItem14 = document.createElement('li')

listItem14.innerText = typeRock2
ty2.appendChild(listItem14);

//

let typeRock3 = json[2].type;

var listItem15 = document.createElement('li')

listItem15.innerText = typeRock3
ty3.appendChild(listItem15);

//

let typeRock4 = json[3].type;

var listItem16 = document.createElement('li')

listItem16.innerText = typeRock4
ty4.appendChild(listItem16);


//Cost Info

let costRock1 = `$${json[0].cost_per_launch}`;

var listItem17 = document.createElement('li')

listItem17.innerText = costRock1
cost1.appendChild(listItem17);

//

let costRock2 = `$${json[1].cost_per_launch}`;

var listItem18 = document.createElement('li')

listItem18.innerText = costRock2
cost2.appendChild(listItem18);

//

let costRock3 = `$${json[2].cost_per_launch}`;

var listItem19 = document.createElement('li')

listItem19.innerText = costRock3
cost3.appendChild(listItem19);

//

let costRock4 = `$${json[3].cost_per_launch}`;

var listItem20 = document.createElement('li')

listItem20.innerText = costRock4
cost4.appendChild(listItem20);

//Height Info

let height1 = json[0].height.feet;

var listItem21 = document.createElement('li')

listItem21.innerText = height1
hght1.appendChild(listItem21);

//

let height2 = json[1].height.feet;

var listItem22 = document.createElement('li')

listItem22.innerText = height2
hght2.appendChild(listItem22);

//

let height3 = json[2].height.feet;

var listItem23 = document.createElement('li')

listItem23.innerText = height3
hght3.appendChild(listItem23);

//

let height4 = json[3].height.feet;

var listItem24 = document.createElement('li')

listItem24.innerText = height4
hght4.appendChild(listItem24);
};


//H1 Color Style

var h1Elements = document.getElementsByTagName("h1");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "blue";
}

//ul Color Style

var ulElements = document.getElementsByTagName("ul");

for(var c = 0; c < ulElements.length; c++) {
   ulElements[c].style.color = "crimson";
}

//p Color Style

var pElements = document.getElementsByTagName("p");

for(var p = 0; p < pElements.length; p++) {
   pElements[p].style.color = "crimson";
}

//Rocket Animation

let blastButton = document.getElementById('blastButton');

rocketSpeed = (min) => Math.random() + (min);

blastButton.addEventListener('click', function(){
    let blastOffOne = rocketSpeed(5);
    console.log(blastOffOne);

    let rocketOne = document.querySelector('.blast');

    rocketOne.style.animation = `go-blast ${blastOffOne}s ease-in`;
    
})

//Button Audio

function rocketMusic(){
    var music = new Audio('./assets/rocketSound.mp3');
    music.play();}







