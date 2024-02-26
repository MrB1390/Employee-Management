import React from "react";
import './App.css'
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EmpTable from "./components/EmpTable";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Page from "./components/Page";
import DataContext from "./utils/DataContext";
import CreateContext from "./utils/CreateContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div class="container-fluid">
        <div className="row">
          <div className="col-lg-1">
          <Sidebar />
          <ToastContainer />
          </div>
          <div className="col-lg-11">
            <DataContext>
             <Routes>
              <Route path="/" element={<CreateContext> <EmpTable /> </CreateContext>}/>
              <Route path="/add" element={<Adduser />}/>
              <Route path="/edit" element={<Edituser />}/>
              <Route path="/list" element={<List />}/>
              <Route path="*" element={<Page />}/>
             </Routes>
             </DataContext>
            </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
