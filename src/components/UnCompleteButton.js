import React, { useState, useEffect } from "react";
import axios from "axios";

function UnCompleteButton({ itemId, changeCompleted }) {

  const buttonClicked = async () => {

    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_API_URL || 'http://localhost:3001/bugs/'}${itemId}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {completed: false}
    };

    const response = await axios(config)
    response.data.completed = true
    
    if (response.data.requestType === "bugReport") {
      changeCompleted(response.data, "bugs");
    } else {
      changeCompleted(response.data, "features")
    }
  }
  

  return (
    <button onClick={buttonClicked}>Reset</button>
  )
}

export default UnCompleteButton;