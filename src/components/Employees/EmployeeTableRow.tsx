import React, {FormEvent, useState} from 'react';
import {EmployeeEntity} from 'types';
import {Spinner} from "../../common/Spinner/Spinner";
import {capitalizeFirstLowerCaseRest} from "../../utility/common-functions";

import "./EmployeesList.scss"
import '../AddEmployee/AddEmployee.scss'
interface Props {
    employee: EmployeeEntity;
}

export const EmployeeTableRow = (props: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState<EmployeeEntity>({
        id: props.employee.id,
        firstName: props.employee.firstName,
        lastName: props.employee.lastName,
        email: props.employee.email,
        phone: props.employee.phone
    });
    const [loading, setLoading] = useState<boolean>(false);

    const updateForm = async (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)

        try {
            const res = await fetch(`http://localhost:3001/employee/${props.employee.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });

            const data: EmployeeEntity[] = await res.json();
            console.log(data);

        } finally {
            setLoading(false)
            setIsEditing(false);
        }

    }

    if (loading) {
        return <Spinner/>
    }

    if (!isEditing) {
        return (
            <tr>
                <td>
                    {capitalizeFirstLowerCaseRest(props.employee.firstName)}
                </td>
                <td>
                    {capitalizeFirstLowerCaseRest(props.employee.lastName)}
                </td>
                <td>
                    {(props.employee.email).toLowerCase()}
                </td>
                <td>
                    {props.employee.phone}
                </td>
                <td>
                    <button className='btn-small' onClick={() => setIsEditing(true)}>🖊</button>
                    <button className='btn-small'>🗑</button>
                </td>
            </tr>
        )
    } else {
        return <tr>
            <td>
                <input className='form-input'
                    type='text'
                       required
                       pattern="^[a-zA-Z]{3,20}$"
                       name='firstName'
                       value={form.firstName}
                       onChange={e => updateForm('firstName', e.target.value)}
                />
            </td>
            <td>
                <input className='form-input'
                    type='text'
                       required
                       pattern="^[a-zA-Z]{2,30}$"
                       name='lastName'
                       value={form.lastName}
                       onChange={e => updateForm('lastName', e.target.value)}
                />
            </td>
            <td>
                <input className='form-input'
                       type='email'
                       required
                       name='email'
                       value={form.email}
                       onChange={e => updateForm('email', e.target.value)}
                />
            </td>
            <td>
                <input className='form-input'
                       type='text'
                       required
                       pattern="^[0-9]{9}$"
                       name='phone'
                       value={form.phone}
                       onChange={e => updateForm('phone', e.target.value)}
                />
            </td>
            <td>
                <button className='btn-small' type="submit" onClick={sendForm}>Zapisz</button>
            </td>
        </tr>
    }
};


