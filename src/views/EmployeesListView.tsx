import React, {useState} from "react";
import {EmployeesList} from "../components/Employees/EmployeesList";
import {AddEmployee} from "../components/AddEmployee/AddEmployee";
import {HeaderOfList} from "../components/HeadOfList/HeaderOfList";
import {SearchContext} from "../contexts/search.context";

import '../styles/bodyComponentWrapper.scss'
export const EmployeesListView = () => {
    const [search, setSearch] = useState('')

    return <div className='body-component-wrapper'>
        <SearchContext.Provider value={{search, setSearch}}>
            <AddEmployee/>
            <HeaderOfList title='Lista pracowników' searchPlaceholder='Wyszukaj wg Nazwiska'/>
            <EmployeesList/>
        </SearchContext.Provider>
    </div>
};