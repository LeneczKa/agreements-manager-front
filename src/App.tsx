import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/Header/Header';
import {EmployeesListView} from "./views/EmployeesListView";
import {AgreementsListView} from "./views/AgreementsListView";
import {SearchContext} from "./contexts/search.context";

import './App.css'
import {AddAgreementView} from "./views/AddAgreementView";

export const App = () => {
    // const [search, setSearch] = useState('');
    return (
        <div className='app-container'>
                <Header/>
                <Routes>
                    <Route path="/employee" element={<EmployeesListView/>}/>
                    <Route path="/agreement" element={<AgreementsListView/>}/>
                    <Route path="/agreement/add" element={<AddAgreementView/>}/>
                </Routes>
        </div>
    );
};

