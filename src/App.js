import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import AppRoutes from "./AppRoutes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      {/* <DndProvider backend={HTML5Backend}> */}
      <AppRoutes />
      {/* </DndProvider> */}
    </div>
  );
}

export default App;
