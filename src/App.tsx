import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Alert, Badge, Button, DataCard, Typography } from "myreact-ui-lib";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="success">Package Button</Button>
      <Button variant="outline_danger">Package Button</Button>
      <Typography variant="h1">H1 Header</Typography>
      <Alert title="Alarm" variant="warning">
        Alert
      </Alert>
      <Badge text="2" variant="danger" />
    </>
  );
}

export default App;
