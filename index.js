let img = document.querySelectorAll('#image')
console.log(img);


fetch('https://api.spacexdata.com/v4/rockets')
  .then(function(response){
      return response.json();
  })

      .then(function(json){
           displayResults(json);
})


function displayResults(json){
    console.log(json);}

    json.forEach(element => {
        console.log(element);
        
    });




