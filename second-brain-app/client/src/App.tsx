import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Add from "./icons/Add";
import Share from "./icons/Share";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        text="Add Content"
        size={"sm"}
        startIcon={<Add size={"sm"} />}
      />

      <Button
        variant="secondary"
        text="Share Brain"
        size="sm"
        startIcon={<Share size="sm" />}
      />

      <Card />
    </>
  );
}

export default App;
