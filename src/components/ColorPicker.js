/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 12 2020 23:13:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { ChromePicker } from "react-color";

function ColorPicker() {
  const [color, setColor] = React.useState("#fff");
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  return (
    <div style={{ backgroundColor: color }}>
      <h3>Picked color: {color}</h3>
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        {showColorPicker ? "Close Picker" : "Show Picker"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
    </div>
  );
}

export default ColorPicker;
