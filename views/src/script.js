function empty() {
  var x;
  x = document.getElementById("fname").value;
  if (x == "") {
      alert("Please enter valid co-ordinates (x, y)");
      return false;
  };
}

function validateLocation(x) {
  console.log(x)
  // if (input >= -10 && input <= 10) {
  //   console.log
  //   // alert("Please enter valid co-ordinates (x, y)");
  // }

}
