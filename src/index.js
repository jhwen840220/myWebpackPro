import React from 'react'

import ReactDom from 'react-dom'

import './style/custom.scss'


const { useState } = React;

const UnitControl = () => (
  <div className="unit-control">
    <div className="unit">Mbps</div>
    <span className="exchange-icon fa-fw fa-stack">
      <i className="far fa-circle fa-stack-2x" ></i>
      <i className="fas fa-exchange-alt fa-stack-1x" ></i>
    </span>
    <div className="unit">Mb/s</div>
  </div>
)

const CardFooter = (props) => {
  const { inputValue } = props;
  let criteria;

  if(!inputValue) {
    criteria = {
      title: '---',
      backgroundColor: '#d3d8e2'
    };
  } else if (inputValue < 15) {
    criteria = {
      title: 'SLOW',
      backgroundColor: '#ee362d',
    };
  } else if (inputValue < 40) {
    criteria = {
      title: 'GOOD',
      backgroundColor: '#1b82f1',
    };
  } else if (inputValue >= 40) {
    criteria = {
      title: 'FAST',
      backgroundColor: '#13d569',
    };
  }

  return (
    <div 
      className="card-footer"
      style={{
        backgroundColor: criteria.backgroundColor
      }}>{criteria.title}</div>
  )
}


const SpeedConverter = () => {

  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input 
              type="number" 
              className="input-number" 
              min="0"
              onChange={handleInputChange}
              value={inputValue} 
              />
          </div>
          <span className="angle-icon fa-2x" style={{marginRop: "30px"}}>
            <i className="fas fa-angle-right" ></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input type="text" className="input-number text-right" disabled value={inputValue / 8} />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  )
}

ReactDom.render(<SpeedConverter />, document.getElementById('app')
);