var request = new XMLHttpRequest()
//request.open('GET',"https://dog.ceo/api/breeds/list/all",true);

//request.open('GET',"https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com",true);
request.open('GET',"https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=xml&appid=439d4b804bc8187953eb36d2a8c26a02",true);

request.onload = function(){
    var data = JSON.parse(this.response)
    console.log(data,"response")

    // for weather forecast URL the response is not JSON it is HTML
   //console.log(this.response)
}
request.send()





// fetch('https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com',{
//     mode: 'cors'
//   })
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));
  
