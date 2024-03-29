import React from 'react';
import {EmployeeEntity} from 'types';
import {EmployeeTableRow} from "./EmployeeTableRow";
import {Link} from "react-router-dom";

import "./EmployeesList.scss";

interface Props {
    employees: EmployeeEntity[];
}

export const EmployeesTable = (props: Props) => {
    return (<table className='user-table'>
            <thead>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>E-mail</th>
                <th>Telefon</th>
                <th><Link to="/employee/archive" className='archive-link'>Archiwum</Link></th>
            </tr>
            </thead>
            <tbody>
            {
                props.employees.map(employee => (
                    <EmployeeTableRow employee={employee} key={employee.id}/>
                ))
            }
            </tbody>
        </table>
    )
}
