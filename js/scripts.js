//Back-End
function Movie(movie, time, age){
    this.movie = movie;
    this.time = time;
    this.age = age;
    this.price = price;
};


function price(input){
  price = 12;
  if ((input<12) || (input>65)){
    price = (price-5)
  };
  return price;
};


var x = [];
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
}
if(mm<10) {
    mm='0'+mm
}
today = yyyy+'-'+mm+'-'+dd;

dateArray=today.split("-");

 function birth(a,b){
for (var i = 0; i < 3; i++) {
  x.push(a[i]-b[i])
};
return x};

function age(ageArray){
var years=(ageArray[0]+((ageArray[1])/12)+((ageArray)[2]/365));
return years;
};

function parseArray(input){
  parsedArray = [];
  for(var i=0; i<3; i++){
    parsedArray.push(parseInt(input[i]));
}
return parsedArray
}




//Front-End
$(function(){

  $("#form").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("input:radio[name=movie]:checked").val();
    var inputTime = $("input:radio[name=movieTime]:checked").val();
    var inputBirth = $("#born").val();
    var birthArray = inputBirth.split("-");
    var parsedArray = parseArray(birthArray)
    var ageArray = birth(dateArray, parsedArray)
    var movieAge = age(ageArray);
    var cost = price(movieAge);
    console.log(movieAge);
    console.log(cost);
    var newMovie = new Movie(inputMovie, inputTime, movieAge, cost);
    $(".result").append("<li>" + newMovie.movie + "</li>");
    $(".result").append("<li>" +"Start time: " + newMovie.time + "</li>");
    $(".result").append("<li>" + "You are " + newMovie.age + " years old"+ "</li>");
    $(".result").append("<li>" + "Price:  $" + newMovie.price + "'s" +"</li>");


});
});
