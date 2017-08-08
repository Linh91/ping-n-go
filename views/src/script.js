function empty() {
  var x;
  x = document.getElementById("fname").value;
  if (x == "") {
      alert("Please enter valid co-ordinates (x, y)");
      return false;
  };
};

function validateLocation() {
  x = document.getElementById("location-input").value;

  if (isNaN(x) || x < -10 || x > 10) {
      alert("Location must be between -10 to +10");
      return false;
  };
};
