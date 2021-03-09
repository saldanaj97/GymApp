import React, { Component } from "react"
import { render } from "react-dom"

class AddWorkout extends Component{
    constructor(props){
      super(props);
      this.state = {exercise: '', sets: 0, reps: 0, weight: 0};
    }
  
  
    handleChange = ({target}) => {
      this.setState({[target.name]: target.value});
    };
  
  
    render(){
      return (
        <React.Fragment>
        <div className="Input">
          <form>
            <label>
              Exercise:
              <input type="text" name="exercise" value={this.state.exercise} onChange={this.handleChange} />
            </label>
          </form>
  
          <form>
            <label>
              Sets:
              <input type="number" name="sets" value={this.state.sets} onChange={this.handleChange} />
            </label>
          </form>
  
          <form>
            <label>
              Reps:
              <input type="number" name="reps" value={this.state.reps} onChange={this.handleChange} />
            </label>
          </form>
  
          <form>
            <label>
              Weight:
              <input type="number" name="weight" value={this.state.weight} onChange={this.handleChange} />
            </label>
          </form>
          <br></br>
          <input type="submit" value="Submit" />
        </div>
        <h3>You entered {this.state.exercise}</h3> 
        <h3>You entered {this.state.sets}</h3> 
        <h3>You entered {this.state.reps}</h3> 
        <h3>You entered {this.state.weight}</h3> 
        </React.Fragment>
      );
    }
}

const container = document.getElementById("input");
render(<AddWorkout />, container);