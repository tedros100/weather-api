const express = require("express")
const https = require("https");
// the https method is used get require method and url

const app = express();


app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=296d37c458ea9e55583f2f40ff5c9c3d"
    https.get(url, function(response){
        console.log(response.statusCode);  //.statuCode used to check the status of the code to be 200 means it okay & 400 if not found 401 is unauthorized is key id
   response.on("data", function(data){
       // console.log(data) this will give hexadeciman no of the json file eg 36
  const weatherData = JSON.parse(data)
//   JSON.stringify() used to turn in string arrey
  //console.log(weatherData) // this will give the whole json data on git bash 
   const temp = weatherData.main.temp
   res.write("<h1>the tempreature in seattle is" + temp + "degree Kelvin</h1>")
//    res.send("<h1>the tempreature in seattle is" + temp + "degree Kelvin</h1>")
  // we can only use res.send once but we can use .write to write as many responses as we can 

    })
   
    })

})

app.listen(3000, function(){
    console.log("hello world")
})



