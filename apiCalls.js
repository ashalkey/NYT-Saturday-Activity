var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var searchTerm;
var records;
var startYear;
var endYear;
var responseArray = [];

if ($("#inputOne").val() !== '')
{
    searchTerm = $("#inputOne").val();
}
else {
    alert("You must enter a search term!");
}

if ($("#inputTwo").val() !== '' && $("#inputTwo").val() > 0)
{
    records = $("#inputTwo").val();
}
else {
    alert("You must search for at least 1 record");
}
if ($("#inputThree").val() === ''){
    continue;
}
else {
    startYear = $("#inputThree").val();
}
if ($("#inputFour").val() === ''){
    continue;
}
else {
    endYear = $("#inputFour").val();
}

if (startYear !== '' && endYear !== ""){

    url += $.param({
        'api-key' : "78af246853d4457c937273094e10c790",
        'q' : searchTerm,
        'begin_date' : startYear,
        'end_date' : endYear
    })
}
else {
    url += $.param({
        'api-key' : "78af246853d4457c937273094e10c790",
        'q' : searchTerm
    });
}
// url += 'p='+ searchTerm + ''
// if ($("#input"))
// url += '?' + $.param({
//     'api-key': "78af246853d4457c937273094e10c790",
//     'q': $('#inputOne').val(),
//   });

for (var i = 0; i < 5; i++){
$.ajax({
    url: url,
    method: "GET"
}).then(function(response){
    responseArray[i] = response;
});
}
