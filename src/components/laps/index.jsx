 
import React from "react";

const Laps = props => {
  return (
    <div className="">
      {props.laps.map((laps, index )=> {
        return (

         <ul  key={ index } className="list-group list-group-flush">
           <li className="list-group-item">
           <h4>
            <span className="text-dark text"> minutes</span>
            <span className="text-danger text"> {laps.min}</span>
            <span className="text-dark text"> Second</span>
            <span className="text-danger text"> {laps.sec}</span>
            <span className="text-dark text" > Mili</span>
            <span className="text-danger text"> {laps.mili}</span>
</h4>
            </li>
            </ul>
        )
      })}
    </div>
  )
}

export default Laps;