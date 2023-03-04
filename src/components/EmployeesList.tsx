import React, {useEffect, useState} from 'react';
import {EmployeeEntity} from 'types';
import {Spinner} from "../common/Spinner";
import {EmployeesTable} from "./EmployeesTable";

export const EmployeesList = () => {
    const [employeesList, setEmployeesList] = useState<EmployeeEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/employee');
            const data = await res.json();
            console.log(data); //json
            setEmployeesList(data.employeesList)
            console.log(data.employeesList); //undefined dont know why
        })();
    }, []);

    if (employeesList === null) {
        return <Spinner/>
    }

    return <>
        <h1>Pracownicy</h1>
        <EmployeesTable employees={employeesList}/>
    </>
}