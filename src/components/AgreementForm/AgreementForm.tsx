import React from "react";
import {Link} from "react-router-dom";
import {EmployeeSelect} from "../EmployeeSelect/EmployeeSelect";
import { AgreementEntity, NewAgreementEntity } from "types";

interface Props {
    form: AgreementEntity | NewAgreementEntity;
    sendForm: ()=>void;

    updateForm: (name: string, value: string | number)=>void;
    text: string;
}
export const AgreementForm = (props: Props) => {

    return <form className='add-agreement-container' onSubmit={props.sendForm}>
        <Link to="/agreement" className='links'> ««« powrót </Link>
        <h1 className='form-title'>{props.text}</h1>
        <div className='form-part'>
            <h2 className='form-subtitle'>Dane Kontrahenta:</h2>
            <div className='input-box'>
                <label>Nazwa:</label>
                <input className='big-input'
                       type='text'
                       name='institutionName'
                       required
                       placeholder='Nazwa'
                       value={props.form.institutionName}
                       onChange={e => props.updateForm('institutionName', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Adress:</label>
                <input className='regular-input'
                       type='text'
                       name='institutionCity'
                       required
                       placeholder='Miasto'
                       value={props.form.institutionCity}
                       onChange={e => props.updateForm('institutionCity', e.target.value)}
                />
                <input className='mid-input'
                       type='text'
                       name='institutionStreet'
                       required
                       placeholder='ulica, nr'
                       value={props.form.institutionStreet}
                       onChange={e => props.updateForm('institutionStreet', e.target.value)}
                />
                <input className='regular-input'
                       type='text'
                       name='institutionZipCode'
                       required
                       placeholder='kod pocztowy'
                       value={props.form.institutionZipCode}
                       onChange={e => props.updateForm('institutionZipCode', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Osoba do kontaktu:</label>
                <input className='mid-input'
                       type='text'
                       name='personForContact'
                       required
                       pattern="^[a-zA-ZąęśćżźńĄĘŚĆŻŹŃ\- ]{2,50}$"
                       title='Dane osoby do kontaktu muszą mieć od 2 do 50 znaków'
                       placeholder='Imię i Nazwisko'
                       value={props.form.personForContact}
                       onChange={e => props.updateForm('personForContact', e.target.value)}
                />
                <input className='regular-input'
                       type='email'
                       name='personForContactMail'
                       required
                       placeholder='e-mail'
                       value={props.form.personForContactMail}
                       onChange={e => props.updateForm('personForContactMail', e.target.value)}
                />
                <input className='regular-input'
                       type='text'
                       name='personForContactPhone'
                       placeholder='nr telefonu'
                       value={props.form.personForContactPhone}
                       onChange={e => props.updateForm('personForContactPhone', e.target.value)}
                />
            </div>
        </div>
        <div className='form-part-two'>
            <h2 className='form-subtitle'>Dane dotyczące umowy:</h2>
            <div className='input-box'>
                <label>Data wysłania przegladu zlecenie:</label>
                <input type='date'
                       name='responseDate'
                       value={props.form.responseDate}
                       onChange={e => props.updateForm('responseDate', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Data wysłania oferty:</label>
                <input type='date'
                       name='offerSendingDate'
                       value={props.form.offerSendingDate}
                       onChange={e => props.updateForm('offerSendingDate', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Numer umowy:</label>
                <input className='mid-input'
                       type='text'
                       name='agreementNo'
                       placeholder='-- nr umowy --'
                       value={props.form.agreementNo}
                       onChange={e => props.updateForm('agreementNo', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Wartość umowy:</label>
                <input className='regular-input'
                       type='number'
                       name='invoiceAmount'
                       value={props.form.invoiceAmount}
                       onChange={e => props.updateForm('invoiceAmount', Number(e.target.value))}
                /> PLN
            </div>
            <div className='input-box'>
                <label>Data rozpoczęcia umowy:</label>
                <input type='date'
                       name='agreementStartDate'
                       value={props.form.agreementStartDate}
                       onChange={e => props.updateForm('agreementStartDate', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Data zakończenia umowy:</label>
                <input type='date'
                       name='agreementEndDate'
                       value={props.form.agreementEndDate}
                       onChange={e => props.updateForm('agreementEndDate', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Data realizacji umowy:</label>
                <input type='date'
                       name='executionDate'
                       value={props.form.executionDate}
                       onChange={e => props.updateForm('executionDate', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Osoby realizujące zlecenie:</label>
                <p>{props.form.employeeId1}; {props.form.employeeId2}</p>
                <EmployeeSelect selectedId={props.form.employeeId1}
                                onSelect={(selectedId) => props.updateForm('employeeId1', selectedId)}/>
                <EmployeeSelect selectedId={props.form.employeeId2}
                                onSelect={(selectedId) => props.updateForm('employeeId2', selectedId)}/>
            </div>
            <div className='input-box'>
                <label>Numer raportu:</label>
                <input className='mid-input'
                       type='text'
                       name='reportId'
                       placeholder='-- nr raportu --'
                       value={props.form.reportId}
                       onChange={e => props.updateForm('reportId', e.target.value)}
                />
                <input type='date'
                       name='reportDate'
                       value={props.form.reportDate}
                       onChange={e => props.updateForm('reportDate', e.target.value)}
                />
            </div>
            <div className='input-box'>
                <label>Data wystawienia faktury:</label>
                <input type='date'
                       name='invoiceDate'
                       value={props.form.invoiceDate}
                       onChange={e => props.updateForm('invoiceDate', e.target.value)}
                />
            </div>
        </div>
        <div className='notes-box'>
            <label>Notatki</label>
            <textarea value={props.form.notes}
                      onChange={e => props.updateForm('notes', e.target.value)}
            />
        </div>
        <button className='btn-insertion' type='submit'>Zapisz</button>
    </form>
}