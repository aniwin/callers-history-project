// src/App.tsx
import React from "react";
import "./App.css"; // Import your custom CSS file
import Table from "./components/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Previous Callers</h1>
        <div className="flex items-center justify-center h-full">
          <div className="overflow-x-auto w-full max-w-screen-lg">
            <Table></Table>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
