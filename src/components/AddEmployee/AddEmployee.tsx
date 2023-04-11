import React, {FormEvent, useState} from "react";
import {NewEmployeeEntity, EmployeeEntity} from "types";
import {Spinner} from "../../common/Spinner/Spinner";
import {capitalizeFirstLowerCaseRest} from "../../utility/common-functions";
import {apiURL} from "../../config/api";

import './AddEmployee.scss'
import '../../styles/InsertionBtn.scss'

export const AddEmployee = () => {
    const [form, setForm] = useState<NewEmployeeEntity>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',

    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/employee`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: EmployeeEntity = await res.json();

            setResultInfo(`${capitalizeFirstLowerCaseRest(data.firstName)} ${capitalizeFirstLowerCaseRest(data.lastName)} został/-a dodany/-a do listy pracowników.`);

        } finally {
            setLoading(false);
        }

        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
    };

    if (loading) {
        return <Spinner/>
    }
    if (resultInfo !== null) {
        return <div className='adding-result-info-employee'>
            <p><strong>{resultInfo}</strong></p>
            <button className='btn-insertion' onClick={() => setResultInfo(null)}>Wróć do listy</button>
        </div>;
    }

    return <form className='add-employee-container' onSubmit={sendForm}>
        <h1 className='table-title'>Dodaj pracownika</h1>
        <div className='add-employee-form'>
            <div className='form-input-container'>
                <label className='form-label'>Imię: </label>
                <input className='form-input'
                       type='text'
                       name='firstName'
                       required
                       placeholder='Dodaj imię'
                       pattern="^[a-zA-ZąęśćżźńłóĄĘŚĆŻŹŃŁÓ\-]{3,20}$"
                       title='Imię musi mieć od 3 do 20 znaków'
                       value={form.firstName}
                       onChange={e => updateForm('firstName', e.target.value)}
                />
            </div>
            <div className='form-input-container'>
                <label className='form-label'>Nazwisko:</label>
                <input className='form-input'
                       type='text'
                       name='lastName'
                       required
                       placeholder='Dodaj nazwisko'
                       pattern="^[a-zA-ZąęśćżźńłóĄĘŚĆŻŹŃŁÓ\-]{2,30}$"
                       title='Nazwisko musi mieć od 2 do 30 znaków'
                       value={form.lastName}
                       onChange={e => updateForm('lastName', e.target.value)}
                />
            </div>
            <div className='form-input-container'>
                <label className='form-label'>E-mail:</label>
                <input className='form-input'
                       type='email'
                       name='email'
                       required
                       title='E-mail musi mieć min 5 znaków.'
                       placeholder='Dodaj e-mail'
                       value={form.email}
                       onChange={e => updateForm('email', e.target.value)}
                />
            </div>
            <div className='form-input-container'>
                <label className='form-label'>Numer telefonu:</label>
                <input className='form-input'
                       type='text'
                       name='phone'
                       required
                       placeholder='Dodaj numer telefonu'
                       pattern="^[0-9]{9}$"
                       title='Numer telefonu musi mieć 9 cyfr.'
                       value={form.phone}
                       onChange={e => updateForm('phone', e.target.value)}
                />
            </div>
        </div>
        <button className='btn-insertion' type="submit">Zapisz</button>
    </form>;
};
