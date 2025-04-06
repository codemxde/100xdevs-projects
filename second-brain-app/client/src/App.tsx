import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Modal from "./components/Modal";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Category from "./components/ui/Category";
import Add from "./icons/Add";
import Share from "./icons/Share";
import X from "./icons/X";
import YouTube from "./icons/YouTube";
import { RootState } from "./redux/store";

function App() {
  const visible = useSelector((state: RootState) => state.modal.visible);

  return (
    <>
      {/* <Button
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

      <Card /> */}
      <Dashboard />
      {visible ? <Modal /> : ""}

      {/* <Modal /> */}
      {/* <Category logo={<YouTube />} category="Videos" /> */}
    </>
  );
}

export default App;
