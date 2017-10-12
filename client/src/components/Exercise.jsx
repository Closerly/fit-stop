import React from 'react'
import ReactDOM from 'react-dom'


var Exercise = (props) => (
  <div className="exercise">
    <div className="exerciseDescription">
      <img className="exerciseImage" src={props.exercise.picture} />
      <p><span className="exerciseName">{props.exercise.name}</span></p>
      {props.exercise.description}
    </div>
  </div>
);


export default Exercise;
