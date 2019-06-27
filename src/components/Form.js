import React, { Component } from 'react'

export class Form extends Component {
  render() {
    // console.log(this.props.narayan);
    return (
      <div id="form">
          
          <form onSubmit={this.props.narayan}>
            <input  type="text" name="city" placeholder="City....."/>
            <input  type="text" name="country" placeholder="Country....."/>
            <button className="" type="submit">Get Weather</button>
          </form>
        
      </div>
    )
  }
}

export default Form
