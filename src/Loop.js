import React , { useState } from 'react'

function Loop(props)
{
    const tasks=props.task;
    return(
    <div>
        <p>{tasks.map((str,index)=>(
    <div>
    <li key={index}>{str.task}</li>
    <li>{index}</li>
    </div>))}</p>
    </div>
    );
  /*{tasks.map((task)=>{
      return(
          <div>
              <h3>{task.task}</h3>
              <h3>{task.cpmpleted}</h3>
          </div>
      )
  })}
  */
}

export default Loop;