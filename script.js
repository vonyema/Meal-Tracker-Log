////////////
// Variables
// /////////
let userInput;


///////////
// ELEMENTS REF'D / CACHED ELEMENTS
///////////

let $foodCalories = $( '#calories' )
let $foodFat = $( '#total-fat' )
let $foodCarbs = $( '#carbs' )
let $foodSugar = $( '#sugar' )
let $foodProtein = $( '#protein' )
let $foodName=$('#food-name')
const $input= $('input[type="search"]')
const $form= $('form')
const $userInput=$input
// const $loggedMeal = $('#saved-meals')



///////////
// EVENT LISTENERS
///////////


$('form').on('submit', handleGetData);


function handleGetData(event) {
    event.preventDefault();
    userInput=$input.val();
    if(userInput=="") return
        $input.val("");

      $.ajax( {method: 'GET',
      url: 'https://api.calorieninjas.com/v1/nutrition?query='+ userInput,
      headers: { 'X-Api-Key': '+5XMhkqM/5bfzDJTMefIFw==iSSVSFHBAox5smBt'},
      contentType: 'application/json'}).then( ( data ) => {
        // insert variables
        tempName=(data.items[0].name)
        tempProtein=(data.items[0].protein_g + "g")
        tempCalories=(data.items[0].calories + "KCal")
        tempCarbs=(data.items[0].carbohydrates_total_g + "g")
        tempFat=(data.items[0].fat_total_g + "g")
        tempSugar=(data.items[0].sugar_g + "g")

        
        $foodName.text(`${tempName}`)
        $foodProtein.text( `${tempProtein}` ),
        $foodCalories.text( `${tempCalories}` ),
        $foodCarbs.text( `${tempCarbs}` ),
        $foodFat.text( `${tempFat}` ),
        $foodSugar.text( `${tempSugar}` )
      })
      
 , ( error ) => {
          console.log( 'bad request', error )
      }
   

    }
    $('#log-meal').click( function(){
        
        alert("Meal was added")

        $("#meals").append("<tr class='row text-center'><td class='col-sm-2'>"+ tempName +"</td><td class='col-sm-2'>" + tempCalories + "</td><td class='col-sm-2'>" + tempProtein + "</td><td class='col-sm-2'>" + tempFat + "</td><td class='col-sm-2'>" + tempCarbs + "</td><td class='col-sm-2'>" + tempSugar + "</td><br>");

       
        // $("#calories").val("");
        // $("#protein").val("");
        // $("#total-fat").val("");
        // $("#carbs").val("");
       
    });

  
    
  
handleGetData()

