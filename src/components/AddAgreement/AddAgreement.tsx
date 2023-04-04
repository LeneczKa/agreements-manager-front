import React, {FormEvent, useState} from "react";
import {AgreementEntity, NewAgreementEntity} from "types";
import {Spinner} from "../../common/Spinner/Spinner";
import {EmployeeSelect} from "../EmployeeSelect/EmployeeSelect";
import {Link} from "react-router-dom";

import '../../styles/Link.scss'
import './AddAgreement.scss'

export const AddAgreement = () => {
    const [form, setForm] = useState<NewAgreementEntity>({
        institutionName: '',
        institutionCity: '',
        institutionStreet: '',
        institutionZipCode: '',
        personForContact: '',
        personForContactMail: '',
        personForContactPhone: '',
        responseDate: '',
        offerSendingDate: '',
        agreementNo: '',
        agreementStartDate: '',
        agreementEndDate: '',
        executionDate: '',
        employeeId1: '',
        employeeId2: '',
        reportId: '',
        reportDate: '',
        invoiceAmount: 0,
        invoiceDate: '',
        notes: '',
        count: 0,
    })
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
            const res = await fetch(`http://localhost:3001/agreement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: AgreementEntity = await res.json();

            setResultInfo(`${data.institutionName} został dodany do listy.`);

        } finally {
            setLoading(false);
        }
        setForm({
            institutionName: '',
            institutionCity: '',
            institutionStreet: '',
            institutionZipCode: '',
            personForContact: '',
            personForContactMail: '',
            personForContactPhone: '',
            responseDate: '',
            offerSendingDate: '',
            agreementNo: '',
            agreementStartDate: '',
            agreementEndDate: '',
            executionDate: '',
            employeeId1: '',
            employeeId2: '',
            reportId: '',
            reportDate: '',
            invoiceAmount: 0,
            invoiceDate: '',
            notes: '',
        })
    };

    if (loading) {
        return <Spinner/>
    }
    if (resultInfo !== null) {
        return <div className='adding-result-info'>
            <Link to="/agreement" className='links'> ««« powrót </Link>
            <p><strong>{resultInfo}</strong></p>
            <button className='btn-insertion' onClick={() => setResultInfo(null)}>Dodaj kolejne zlecenie</button>
        </div>;
    }

    return (<form className='add-agreement-container' onSubmit={sendForm}>
            <Link to="/agreement" className='links'> ««« powrót </Link>
            <h1 className='form-title'>Dodaj zlecenie</h1>
            <div className='form-part'>
                <h2 className='form-subtitle'>Dane Kontrahenta:</h2>
                <div className='input-box'>
                    <label>Nazwa:</label>
                    <input className='big-input'
                        type='text'
                           name='institutionName'
                           required
                           placeholder='Nazwa'
                           value={form.institutionName}
                           onChange={e => updateForm('institutionName', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Adress:</label>
                    <input className='regular-input'
                        type='text'
                           name='institutionCity'
                           required
                           placeholder='Miasto'
                           value={form.institutionCity}
                           onChange={e => updateForm('institutionCity', e.target.value)}
                    />
                    <input className='mid-input'
                           type='text'
                           name='institutionStreet'
                           required
                           placeholder='ulica, nr'
                           value={form.institutionStreet}
                           onChange={e => updateForm('institutionStreet', e.target.value)}
                    />
                    <input className='regular-input'
                           type='text'
                           name='institutionZipCode'
                           required
                           placeholder='kod pocztowy'
                           value={form.institutionZipCode}
                           onChange={e => updateForm('institutionZipCode', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Osoba do kontaktu:</label>
                    <input className='mid-input'
                           type='text'
                           name='personForContact'
                           required
                           placeholder='Imię i Nazwisko'
                           value={form.personForContact}
                           onChange={e => updateForm('personForContact', e.target.value)}
                    />
                    <input className='regular-input'
                           type='email'
                           name='personForContactMail'
                           required
                           placeholder='e-mail'
                           value={form.personForContactMail}
                           onChange={e => updateForm('personForContactMail', e.target.value)}
                    />
                    <input className='regular-input'
                           type='text'
                           name='personForContactPhone'
                           placeholder='nr telefonu'
                           value={form.personForContactPhone}
                           onChange={e => updateForm('personForContactPhone', e.target.value)}
                    />
                </div>
            </div>
            <div className='form-part-two'>
                <h2 className='form-subtitle'>Dane dotyczące umowy:</h2>
                <div className='input-box'>
                    <label>Data wysłania przegladu zlecenie:</label>
                    <input type='date'
                           name='responseDate'
                           value={form.responseDate}
                           onChange={e => updateForm('responseDate', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Data wysłania oferty:</label>
                    <input type='date'
                           name='offerSendingDate'
                           value={form.offerSendingDate}
                           onChange={e => updateForm('offerSendingDate', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Numer umowy:</label>
                    <input className='mid-input'
                           type='text'
                           name='agreementNo'
                           placeholder='-- nr umowy --'
                           value={form.agreementNo}
                           onChange={e => updateForm('agreementNo', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Wartość umowy:</label>
                    <input className='regular-input'
                           type='number'
                           name='invoiceAmount'
                           value={form.invoiceAmount}
                           onChange={e => updateForm('invoiceAmount', Number(e.target.value))}
                    /> PLN
                </div>
                <div className='input-box'>
                    <label>Data rozpoczęcia umowy:</label>
                    <input type='date'
                           name='agreementStartDate'
                           value={form.agreementStartDate}
                           onChange={e => updateForm('agreementStartDate', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Data zakończenia umowy:</label>
                    <input type='date'
                           name='agreementEndDate'
                           value={form.agreementEndDate}
                           onChange={e => updateForm('agreementEndDate', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Data realizacji umowy:</label>
                    <input type='date'
                           name='executionDate'
                           value={form.executionDate}
                           onChange={e => updateForm('executionDate', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Osoby realizujące zlecenie:</label>
                    <EmployeeSelect selectedId={form.employeeId1}
                                    onSelect={(selectedId) => updateForm('employeeId1', selectedId)}/>
                    <EmployeeSelect selectedId={form.employeeId2}
                                    onSelect={(selectedId) => updateForm('employeeId2', selectedId)}/>
                </div>
                <div className='input-box'>
                    <label>Numer raportu:</label>
                    <input className='mid-input'
                           type='text'
                           name='reportId'
                           placeholder='-- nr raportu --'
                           value={form.reportId}
                           onChange={e => updateForm('reportId', e.target.value)}
                    />
                    <input type='date'
                           name='reportDate'
                           value={form.reportDate}
                           onChange={e => updateForm('reportDate', e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <label>Data wystawienia faktury:</label>
                    <input type='date'
                           name='invoiceDate'
                           value={form.invoiceDate}
                           onChange={e => updateForm('invoiceDate', e.target.value)}
                    />
                </div>
            </div>
            <div className='notes-box'>
                <label>Notatki</label>
                <textarea value={form.notes}
                          onChange={e => updateForm('notes', e.target.value)}
                />
            </div>
            <button className='btn-insertion' type='submit'>Zapisz</button>
        </form>
    )
}