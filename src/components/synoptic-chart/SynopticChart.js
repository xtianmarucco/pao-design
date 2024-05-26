import React from 'react';
import './synoptic-chart.scss';

const SynopticChart = () => {
  return (
    <div className="synoptic-chart">
      <div className="center-element">Personal attitudes</div>
      <div className="element top">Empathic</div>
      <div className="element top-right">Fast learner</div>
      <div className="element bottom-right">Detail-oriented</div>
      <div className="element bottom">Creative</div>
      <div className="element bottom-left">Motivated</div>
      <div className="element top-left">Sociable</div>
      <svg className="arrows">
        <line x1="50%" y1="50%" x2="50%" y2="15%" />
        <line x1="50%" y1="50%" x2="85%" y2="20%" />
        <line x1="50%" y1="50%" x2="85%" y2="85%" />
        <line x1="50%" y1="50%" x2="50%" y2="85%" />
        <line x1="50%" y1="50%" x2="15%" y2="85%" />
        <line x1="50%" y1="50%" x2="15%" y2="20%" />
      </svg>
    </div>
  );
};

export default SynopticChart;
