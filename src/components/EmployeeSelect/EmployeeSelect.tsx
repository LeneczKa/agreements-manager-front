import React, {FormEvent, useEffect, useState} from "react";
import {EmployeeEntity} from "types";

interface Props {
    selectedId: string;
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
                setSelected(e.target.value)}
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
