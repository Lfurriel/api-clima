let weather = {
    "apiKey": "062793879e0b6226ed6e41545ea95a1c",
    fetchWeather: function(city) {
        fetch(  "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {name} = data; //Dentro do JSON o campo 'name' se torna variavel
        const {icon, description} = data.weather[0]; //Dentro do JSON no bloco 'weather' os campos 'icon' e 'description' se tornam variaveis
        const {temp, humidity} = data.main;  //Dentro do JSON no bloco 'main' os campos 'temp' e 'humidity' se tornam variaveis
        const {speed} = data.wind; //Dentro do JSON no bloco 'wind' o campo 'speed' se torna variavel
        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Clima em " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Umidade: " + humidity + "%";
        document.querySelector(".wind").innerText = "Velocidade do vento: " + speed + " km/h";
    }
}