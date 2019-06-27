import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return (
      <div className="weather">
         
        {this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
        {this.props.temperature &&  <p>Temperature: {this.props.temperature}<sup>o</sup>C</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
        
      </div>
    )
  }
}

export default Weather
