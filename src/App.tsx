import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Alert,
  Badge,
  Button,
  DataCard,
  Typography,
  Toggle,
  RangeSlider,
} from "myreact-ui-lib";

function App() {
  const [count, setCount] = useState(20);
  const toggleHandler = () => {
    console.log("Toggling");
  };
  return (
    <React.Fragment>
      <Button variant="success">Package Button</Button>
      <Button variant="outline_danger">Package Button</Button>
      <Typography variant="h1">H1 Header</Typography>
      <Alert title="Alarm" variant="warning">
        Alert
      </Alert>
      <Badge text="2" variant="danger" />
      <Toggle onToggle={toggleHandler} isChecked={true} variant="success" />
      <RangeSlider
        minValue={10}
        maxValue={50}
        initialValue={count}
        selectedValue={setCount}
      />
      <div>KreLink</div>
    </React.Fragment>
  );
}

export default App;
