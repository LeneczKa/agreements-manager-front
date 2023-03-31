import React, { useEffect, useState} from "react";
import {EmployeeEntity} from "types";

import './EmployeeSelect.scss'

interface Props {
    selectedId: string;
    onSelect:(selectedId:string)=>void
}
export const EmployeeSelect = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId === null ? '' : props.selectedId);
    const [employees, setEmployees] = useState<EmployeeEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/agreement/add`)
            const employees = await res.json();
            setEmployees(employees)
        })();
    }, []);
    return (
        <select
            value={selected}
            onChange={e => {
                setSelected(e.target.value)
                props.onSelect(e.target.value)}
        }
        >
            <option>- wybierz -</option>
            {employees.map(employee => (
                <option
                    value={employee.id}
                    key={employee.id}
                >
                    {employee.firstName} {employee.lastName}
                </option>
            ))}
        </select>
    );
}
