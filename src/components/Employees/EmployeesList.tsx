import React, {useContext, useEffect, useState} from 'react';
import {EmployeeEntity} from 'types';
import {Spinner} from "../../common/Spinner";
import {EmployeesTable} from "./EmployeesTable";


export const EmployeesList = () => {
    const [employeesList, setEmployeesList] = useState<EmployeeEntity[] | null>(null);


    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/employee')
            const employeesList = await res.json();
            setEmployeesList(employeesList);
        })();
    }, [employeesList]);

    if (employeesList === null) {
        return <Spinner/>
    }


    return <>
        <h1>Pracownicy</h1>
        <EmployeesTable employees={employeesList} />
    </>
}