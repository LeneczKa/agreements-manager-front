import React, {useContext, useEffect, useState} from 'react';
import {EmployeeEntity} from 'types';
import {Spinner} from "../../common/Spinner/Spinner";
import {EmployeesTable} from "./EmployeesTable";
import {SearchContext} from "../../contexts/search.context";

import './EmployeesList.scss';
import '../AddEmployee/AddEmployee.scss';

export const EmployeesList = () => {
    const {search} = useContext(SearchContext)
    const [employeesList, setEmployeesList] = useState<EmployeeEntity[] | []>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/employee/search/${search}`)
            const employeesList = await res.json();
            setEmployeesList(employeesList);
        })();
    }, [search, employeesList]);

    if (employeesList === null) {
        return <Spinner/>
    }

    return <div className='list-container'>
        <EmployeesTable employees={employeesList}/>
    </div>
}