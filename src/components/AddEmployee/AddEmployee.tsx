import React, {FormEvent, useState} from "react";
import {NewEmployeeEntity, EmployeeEntity} from "types";
import {Spinner} from "../../common/Spinner";

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

            setResultInfo(`${data.firstName} ${data.lastName} has been created on Employees' list with ID ${data.id}`);

        } finally {
            setLoading(false);
        }

        //czyszczenie inputa po odświezniu strony
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
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Dodaj kolejnego pracownika</button>
        </div>;
    }

    return <form onSubmit={sendForm}>
        <h2>Dodaj pracownika</h2>
        <label>
            <input type='text'
                   name= 'first name'
                   required
                   placeholder='Dodaj imię'
                   value={form.firstName}
                   onChange={e => updateForm('firstName', e.target.value)}
            />
        </label>
        <label>
            <input type='text'
                   name= 'last name'
                   required
                   placeholder='Dodaj nazwisko'
                   value={form.lastName}
                   onChange={e => updateForm('lastName', e.target.value)}
            />
        </label>
        <label>
            <input type='text'
                   name= 'email'
                   required
                   placeholder='Dodaj e-mail'
                   value={form.email}
                   onChange={e => updateForm('email', e.target.value)}
            />
        </label>
        <label>
            <input type='text'
                   name= 'phone'
                   required
                   placeholder='Dodaj numer telefonu'
                   value={form.phone}
                   onChange={e => updateForm('phone', Number(e.target.value))}
            />
        </label>
        <button type="submit">Zapisz</button>
    </form>
};
