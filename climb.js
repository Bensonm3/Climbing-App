const climbType = document.getElementById("type");
const climbDistance = document.getElementById("distance");
const climbRatingMin = document.getElementById("ratingMin");
const climbRatingMax = document.getElementById("ratingMax");
const submitBtn = document.getElementById("submitBtn");


$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  console.log("click")
  console.log(climbType.value)
  console.log(climbDistance.value)
  console.log(climbRatingMin.value)
  console.log(climbRatingMax.value)
  getresults(climbType.value, climbDistance.value, climbRatingMin.value, climbRatingMax.value)
})

async function getresults(type, distance, ratingMin, ratingMax) {
  
  function error() {
    console.log("location data unavailable")
}
  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    
    var posqueryURL = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat='+latitude+'&lon='+longitude+'&maxDistance='+distance+'&minDiff='+ratingMin+'&maxDiff='+ratingMax+'&key=200742179-0e620598977fdde4156949857a680d69';
    $.ajax({
        url: posqueryURL,
        method: "GET"
    })
    .then(function(response) {
      // handle success
      // console.log(response);
      console.log(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  navigator.geolocation.getCurrentPosition(success, error)
}

