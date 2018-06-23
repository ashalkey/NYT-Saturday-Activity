var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
    'api-key': "78af246853d4457c937273094e10c790",
    'q': ""
  });

$.ajax({
    url: url,
    method: "GET"
}).then(function(response){
    
});