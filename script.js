var inputValue= document.querySelector('.inputValue')
var button=document.querySelector('.submit')
var temp=document.querySelector('.temp')
var wind=document.querySelector('.wind')
var cond=document.querySelector('.cond')



button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e9cd18f3108059cad2780157cf898537')
        .then(res => res.json())
        .then(data => {
            temp.innerHTML=data['main']['temp']
            wind.innerHTML=data['wind']['speed']
            cond.innerHTML=data['weather'][0]['main']

        })
    .catch(error=>alert("ERROR"))
})




