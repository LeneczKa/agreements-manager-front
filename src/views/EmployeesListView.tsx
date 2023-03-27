import React, {useState} from "react";
import {EmployeesList} from "../components/Employees/EmployeesList";
import {AddEmployee} from "../components/AddEmployee/AddEmployee";
import './bodyComponentWrapper.scss'
import {HeaderOfList} from "../components/HeadOfList/HeaderOfList";
import {SearchContext} from "../contexts/search.context";

export const EmployeesListView = () => {
    const [search, setSearch] = useState('')

    return <div className='body-component-wrapper'>
        <SearchContext.Provider value={{search, setSearch}}>
            <AddEmployee/>
            <HeaderOfList title='Lista pracowników'/>
            <EmployeesList/>
        </SearchContext.Provider>
    </div>
};