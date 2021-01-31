$(document).ready(function(){
  $("#personalInfo").submit(function() {
    const firstName = $("input#firstName").val();
    const middleName = $("input#middleName").val();
    const lastName = $("input#lastName").val();
    const gender = $("input#gender").val();
    const favFood = $("input#food").val();
    const favColor = $("#color").val();
    const birthDate = $("#born").val();
    const sign = $("#sign").val();
    const favPet = $("input:radio[name=favPet]:checked").val();
    
    if (favPet === "commie") {
      $("#ruby").show();
    }

    event.preventDefault();
  });
});