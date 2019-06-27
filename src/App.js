
import './App.css';

import React, { Component } from 'react'
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
// import image from './image/download1.jpeg';

const API_KEY = "acacfef66a8d6aff781eff12c4643005";

class App extends Component {
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    // console.log(api_call)
    const data = await api_call.json();

    
    if(city && country){
      console.log(data); 

      this.setState({
        temperature: data.main.temp-273.15,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''

      })
    }else{
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Enter the city and country name"
        })
      
    }
  }
  

  render() {
    return (
     <div>
        <div className="main-container1">
        {/* <img src={image}/> */}
        <Titles/>
        <Form narayan={this.getWeather}/>
        </div>
        <div>
        <Weather className="weather1"
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
        />
        
        </div>
     </div>
    )
  }
}

export default App;
