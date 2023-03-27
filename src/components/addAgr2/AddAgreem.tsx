import React, {FormEvent, useState} from "react";
import {AgreementEntity} from "types";

import '../AddAgreement/AddAgreement.scss'

export const AddAgreem = () => {
    const [form, setForm] = useState({
        institutionName: '',
        institutionCity: '',
        institutionStreet: '',
        institutionZipCode: '',
        personForContact: '',
        personForContactEmail: '',
        responseDate: '',
        offerSendingDate: '',
    });
    const [resultInfo, setResultInfo] = useState<string | null>(null)
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };
    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3001/agreement`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data: AgreementEntity = await res.json();
        console.log(data)

        setResultInfo(`${data.institutionName} został dodany/-a do listy z ID ${data.id}.`);

        setForm({
            institutionName: '',
            institutionCity: '',
            institutionStreet: '',
            institutionZipCode: '',
            personForContact: '',
            personForContactEmail: '',
            responseDate: '',
            offerSendingDate: '',
        });
    }

    if (resultInfo !== null) {
        return <div className='adding-result-info'>
            <p><strong>{resultInfo}</strong></p>
            <button className='btn-insertion' onClick={() => setResultInfo(null)}>Dodaj kolejnezlecenie</button>
        </div>;
    }

    return <form className='add-agreement-container' onSubmit={sendForm}>
        <h1 className='form-title'>Dodaj zlecenie</h1>
        <div>
            <h2>Dane Kontrahenta:</h2>
            <div>
                <label>Nazwa:</label>
                <input type='text'
                       name='institutionName'
                       required
                       placeholder='Nazwa'
                       value={form.institutionName}
                       onChange={e => updateForm('institutionName', e.target.value)}
                />
            </div>
            <div>
                <label>Adress:</label>
                <input type='text'
                       name='institutionCity'
                       required
                       placeholder='Miasto'
                       value={form.institutionCity}
                       onChange={e => updateForm('institutionCity', e.target.value)}
                />
                <input type='text'
                       name='institutionStreet'
                       required
                       placeholder='ulica, nr'
                       value={form.institutionStreet}
                       onChange={e => updateForm('institutionStreet', e.target.value)}
                />
                <input type='text'
                       name='institutionZipCode'
                       required
                       placeholder='kod pocztowy'
                       value={form.institutionZipCode}
                       onChange={e => updateForm('institutionZipCode', e.target.value)}
                />
            </div>
            <div>
                <label>Osoba do kontaktu:</label>
                <input type='text'
                       name='personForContact'
                       required
                       placeholder='Imię i Nazwisko'
                       value={form.personForContact}
                       onChange={e => updateForm('personForContact', e.target.value)}
                />
                <input type='email'
                       name='personForContactEmail'
                       required
                       placeholder='e-mail'
                       value={form.personForContactEmail}
                       onChange={e => updateForm('personForContactEmail', e.target.value)}
                />
            </div>
        </div>
        <div>
            <h2>Dane dotyczące umowy:</h2>
            <div>
                <label>Data wysłania przegladu zlecenie:</label>
                <input type='date'
                       name='responseDate'
                       value={form.responseDate}
                       onChange={e => updateForm('responseDate', e.target.value)}
                />
            </div>
            <div>
                <label>Data wysłania oferty:</label>
                <input type='date'
                       name='offerSendingDate'
                       value={form.offerSendingDate}
                       onChange={e => updateForm('offerSendingDate', e.target.value)}
                />
            </div>
        </div>
        <button className='btn-insertion' type='submit'>Zapisz</button>
    </form>
}