import React, { useState } from "react";
import "./App.css";
import Slider from "./Slider";
import SlidebarItem from "./SlidebarItem";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    porperty: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    porperty: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    porperty: "saturation",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    porperty: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    porperty: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    porperty: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    porperty: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [selectedOptionsIndex, setSelectedOptionsIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOptions = options[selectedOptionsIndex];

  function handleSliderChange({target}){
setOptions(prevOptions=>{
  return prevOptions.map((option, index)=>{
    if (index !== selectedOptionsIndex) return option 
      
    return {...options, value: target.value}
  })
})
  }

  return (
    <div className="container">
      <div className="mainImage" />
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SlidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionsIndex}
              handleClick={()=>setSelectedOptionsIndex(index)}
            />
          );
        })}
      </div>
      <Slider 
      min={selectedOptions.range.min}
      max={selectedOptions.range.max}
      value={selectedOptions.value}
      handleChange={handleSliderChange}
      
      />
    </div>
  );
}

export default App;
