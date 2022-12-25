// هي بالجافا سيكربت
// let currentdate = new Date();
// let year = currentdate.getFullYear();
// let currentYear = document.getElementById("year");
// currentYear.innerHTML = year;


// هي باستعمال jQuery
$(function(){
    var currentDate = new Date();
    $('#year').text(currentDate.getFullYear());
});