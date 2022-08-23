import React from "react";
import { DndProvider } from "react-dnd";
import Template from "./components/template";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Template />
      </DndProvider>
    </div>
  );
}

export default App;
