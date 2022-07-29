import React from 'react';
import './alert.css';

function Alert(props) {
  const style = {
    'backgroundColor': props.color,
  };
  return <div style={style} className="alert">{props.message}</div>;
}

export default Alert;
