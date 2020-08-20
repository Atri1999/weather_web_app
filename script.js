var inputValue= document.querySelector('.inputValue')
var button=document.querySelector('.submit')
button.disabled=true

var des=document.querySelector('.des')
var visibility=document.querySelector('.visi_value')
var temp=document.querySelector('.res_temp')
var min_temp=document.querySelector('.res_min_temp')
var max_temp=document.querySelector('.res_max_temp')
var pressure=document.querySelector('.res_pressure')
var humid=document.querySelector('.res_humid')
var wind_speed=document.querySelector('.res_wind_speed')
var wind_degree=document.querySelector('.res_wind_degree')

inputValue.addEventListener('keyup',function(){
    if (inputValue.value.length!=0){
        button.disabled=false
    }
    else{
        button.disabled=true
    }
})

button.addEventListener('click',function(){
     
          
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e9cd18f3108059cad2780157cf898537')
        .then(res => res.json())
        .then(data => {
            console.log(inputValue.value)
            temp.innerHTML=(data['main']['temp']-273.15).toFixed(2)
            min_temp.innerHTML=(data['main']['temp_min']-273.15).toFixed(2)
            max_temp.innerHTML=(data['main']['temp_max']-273.15).toFixed(2)
            pressure.innerHTML=data['main']['pressure']
            humid.innerHTML=data['main']['humidity']
            wind_speed.innerHTML=data['wind']['speed']
            wind_degree.innerHTML=data['wind']['deg']
            des.innerHTML=data['weather'][0]['main']
            visibility.innerHTML=data['visibility']

        })
    .catch(error=>alert("The city name is Wrong. Plz enter correct name"))
    
})






