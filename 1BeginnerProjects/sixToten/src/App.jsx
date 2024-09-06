import "./App.css";
import TodoList from "./components/6todoList/TodoList";
import TreeView from "./components/7treeView/TreeView";
import Header from "./components/Header";
import myData from "./components/7treeView/data";
import QrCode from "./components/QrCode-generator/QrCode";

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* 6 Todo list */}
      {/* <TodoList/> */}

      {/* 7 treeView/ Menu UI/ Recursive navigation Menu  */}
      {/* <TreeView menuData={myData}/> */}

      {/* 8 Qr Code Generator */}
      <QrCode/>

      
    </div>
  );
}

export default App;
