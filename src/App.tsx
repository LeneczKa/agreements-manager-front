import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/Header/Header';
import {EmployeesListView} from "./views/EmployeesListView";
import {AgreementsListView} from "./views/AgreementsListView";
import {AddAgreementView} from "./views/AddAgreementView";
import {SingleAgreementView} from "./views/SingleAgreementView";
import {UpdateAgreementView} from "./views/UpdateAgreementView";
import {AgreementArchiveView} from "./views/AgreementArchiveView";
import {SingleArchiveAgreementView} from "./views/SingleArchiveAgreementView";
import {NotFoundView} from './views/NotFoundView';
import {WelcomePageView} from "./views/WelcomePageView";

import './App.css'

export const App = () => {
    return <div className='app-container'>
        <Header/>
        <Routes>
            <Route path="*" element={<NotFoundView/>}/>
            <Route path="/" element={<WelcomePageView/>}/>
            <Route path="/employee" element={<EmployeesListView/>}/>
            <Route path="/agreement" element={<AgreementsListView/>}/>
            <Route path="/agreement/add" element={<AddAgreementView/>}/>
            <Route path="/agreement/:idOfAgreement" element={<SingleAgreementView/>}/>
            <Route path="/agreement/update/:idOfAgreement" element={<UpdateAgreementView/>}/>
            <Route path="/archive" element={<AgreementArchiveView/>}/>
            <Route path="/archive/:idOfAgreement" element={<SingleArchiveAgreementView/>}/>
        </Routes>
    </div>
};

