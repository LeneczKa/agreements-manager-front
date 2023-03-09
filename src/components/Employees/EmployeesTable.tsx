import React from 'react';
import {EmployeeEntity} from 'types';
import {EmployeeTableRow} from "./EmployeeTableRow";

interface Props {
    employees: EmployeeEntity[];

}

export const EmployeesTable = (props: Props) => {
        return (<table>
            <thead>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>E-mail</th>
                <th>Telefon</th>
            </tr>
            </thead>
            <tbody>
            {
                props.employees.map(employee => (
                    <EmployeeTableRow employee={employee} key={employee.id} />
                ))
            }
            </tbody>
        </table>
    )
}
