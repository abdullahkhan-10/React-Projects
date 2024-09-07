import "./App.css";
import TodoList from "./components/6todoList/TodoList";
import TreeView from "./components/7treeView/TreeView";
import Header from "./components/Header";
import myData from "./components/7treeView/data";
import QrCode from "./components/8QrCode-generator/QrCode";
import LightDark from "./components/9light-dark-theme/LightDark";
import ScrollIndicator from "./components/10scroll-indicator/ScrollIndicator";

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* 6 Todo list */}
      {/* <TodoList/> */}

      {/* 7 treeView/ Menu UI/ Recursive navigation Menu  */}
      {/* <TreeView menuData={myData}/> */}

      {/* 8 Qr Code Generator */}
      {/* <QrCode/> */}

      {/* 9 Light and dark theme */}
      {/* <LightDark/> */}

      {/* 10 Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

      
    </div>
  );
}

export default App;
