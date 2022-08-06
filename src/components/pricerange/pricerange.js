import React from "react";

export class Pricerange extends React.Component {
    constructor() {
      super()
      this.state = {value: 3}
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div>
          <label>
            <input 
              id="typeinp" 
              type="range" 
              min="5000" max="500000" 
              value={this.state.value} 
              onChange={this.handleChange}
              />
            {this.state.value}
          </label>
        </div>
      );
    }
}

export default Pricerange;