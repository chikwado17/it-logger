import React,  { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import './index.css';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';




const App = () => {

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });


  return (
    <div>
        <SearchBar />
        <AddBtn/>
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs/>
    </div>
  )
}

export default App;
