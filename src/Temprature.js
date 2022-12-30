import React from "react";
import Temptatureinput from "./Temptatureinput";
class Temprature extends React.Component{

   constructor(props)
   {
      super(props)
      {
         this.state = {
            scale: "c",
            temp:45
         };
      }
   }

   toCelcius = (fahrenheit) =>{
      return ((fahrenheit - 32)*5) / 9;
   }

   toFahrenheit = (celsius) =>{
      return ((celsius)*9) / 5 +32;
   }

   onCelciusChange= (value)=>{
      let temp = value == ""?0:value;
      this.setState({scale:"c",temp:parseFloat(temp)});
   }

   onFahrenheitChange= (value)=>{
      let temp = value == ""?0:value;
      this.setState({scale:"f",temp:parseFloat(temp)});
   }
   render()
   {
      const celsius = this.state.scale == "f" ? this.toCelcius(this.state.temp):this.state.temp;
      const fahrenheit = this.state.scale == "c" ? this.toFahrenheit(this.state.temp): this.state.temp;
      return (
    <div>
        <Temptatureinput scale={"c"} temp={celsius} onTemperatureChange={this.onCelciusChange}/>

        <Temptatureinput scale={"f"} temp={fahrenheit} onTemperatureChange={this.onFahrenheitChange}/>
        </div>
      );
   }
}
export default Temprature;