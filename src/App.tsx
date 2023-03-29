import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/Header/Header';
import {EmployeesListView} from "./views/EmployeesListView";
import {AgreementsListView} from "./views/AgreementsListView";
import {AddAgreementView} from "./views/AddAgreementView";
import {SingleAgreementView} from "./views/SingleAgreementView";

import './App.css'
export const App = () => {
    // const [search, setSearch] = useState('');
    return (
        <div className='app-container'>
                <Header/>
                <Routes>
                    <Route path="/employee" element={<EmployeesListView/>}/>
                    <Route path="/agreement" element={<AgreementsListView/>}/>
                    <Route path="/agreement/add" element={<AddAgreementView/>}/>
                    <Route path="/agreement/:idOfAgreement" element={<SingleAgreementView/>}/>
                </Routes>
        </div>
    );
};

