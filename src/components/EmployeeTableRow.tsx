import React from 'react';
import {EmployeeEntity} from 'types';

interface Props {
    employee: EmployeeEntity;
    // onEmployeesChange: () => void;
}

export const EmployeeTableRow = (props: Props) => {
    //
    // const editEmployee = async (e: MouseEvent) => {
    //     e.preventDefault()
    //
    //     const res = await fetch(`http://localhost:3001/employee/${props.employee.id}`, {
    //         method: 'PUT',
    //     });
    //
    //     if ([400, 500].includes(res.status)) {
    //         const error = await res.json();
    //         alert(`Error occured: ${error.message}`);
    //         return;
    //     }
    //     // props.onEmployeesChange();
    //
    // };

    return (
        <tr>
            <td>
                {props.employee.firstName}
            </td>
            <td>
                {props.employee.lastName}
            </td>
            <td>
                {props.employee.email}
            </td>
            <td>
                {props.employee.phone}
            </td>
            {/*<td>*/}
            {/*    <a href="#" onClick={editEmployee}>EDIT</a>*/}
            {/*</td>*/}
        </tr>
    )
};