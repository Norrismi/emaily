//customizing the label and where info is stored through the use of props.
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}}/>
      <div style={{ color: 'red', marginBottom: '20px' }}>{touched && error}</div>
    </div>
  );
};
