import React, { Component } from "react"
import { render } from "react-dom"
import "./data.css"

class Data extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [], 
            loaded: false, 
            placeholder: "Loading"
        };
    }

    componentDidMount(){
        fetch("api/lead")
            .then(response => { 
                if(response.status > 400) {
                return this.setState(() => { 
                    return { placeholder: "Something went wrong!" };
            });
        }
        return response.json();
        })
        .then(data => {
            this.setState(() => {
                return {
                    data,
                    loaded: true
                };
            });
        });
    }
    
    render(){
        return (
            <ul>
                {this.state.data.map(workout => {
                    return (
                        <li>
                            Exercise: {workout.exercise} Reps: {workout.reps} Sets: {workout.sets} Weight: {workout.weight} Type: {workout.workout_type} Date: {workout.workout_date}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Data;

const container = document.getElementById("data");
render(<Data />, container);