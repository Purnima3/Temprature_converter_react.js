import React from "react";
const scaleName = {
  c: "celsius",
  f: "Fahrenheit",
}; 
function Temptatureinput({ scale,temp ,onTemperatureChange}) {
  const onChangeHandle = (event)=>
  {
    onTemperatureChange(event.target.value);
  }
  return (
    <fieldset>
        <label>Enter the temprature in {scaleName[scale]}</label>
        <div> <input type="text" value={temp} onChange={onChangeHandle} /></div>
    </fieldset>
  );
}

export default Temptatureinput;
