var requestOptions = {
    method: 'GET'
};

var params = {
    api_token: 'LRSwMYFGVMgKZCmqreMZn2RyjkcIFwwlWTcZiuOi',
    categories: 'business,tech',
    search: 'apple',
    limit: '50'
};

var esc = encodeURIComponent;
var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');

fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));