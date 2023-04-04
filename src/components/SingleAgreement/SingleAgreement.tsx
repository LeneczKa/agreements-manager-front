import React, {useEffect, useState} from 'react';
import {AgreementEntity} from 'types';
import {Link, useParams} from "react-router-dom";

import './SingleAgreement.scss';

export const SingleAgreement = () => {
    const [agreement, setAgreement] = useState<AgreementEntity | null>(null);
    const {idOfAgreement} = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/agreement/${idOfAgreement}`);
            const data = await res.json();
            setAgreement(data.agreement);
        })();
    }, [idOfAgreement])

    if (agreement === null) {
        return null;
    }

    return <div className='agreement-wrapper'>
        <Link to={'/agreement'} className='links'>««« powrót</Link>

        <div className='agreement-main-container'>
            <h2 className='title'>Zlecenie</h2>
            <table>
                <tr>
                    <td className='first-box'>
                        <h3>Nazwa:</h3>
                        <p>{agreement.institutionName}</p>
                    </td>
                    <td className='second-box'>
                        <h3>Adres:</h3>
                        <p>{agreement.institutionStreet}</p>
                        <p>{agreement.institutionCity} {agreement.institutionZipCode}</p>
                    </td>
                </tr>
            </table>
            <div className='regular-box'>
                <h3 className='sub-title'>Osoba do kontaktu:</h3>
                <table>
                    <tr>
                        <td>{agreement.personForContact}</td>
                        <td>{agreement.personForContactPhone}</td>
                        <td>{agreement.personForContactMail}</td>
                    </tr>
                </table>
            </div>
            <div className='regular-box'>
                <h3 className='sub-title'>Dane dotyczące umowy:</h3>
                <table className='third-table'>
                    <tr>
                        <td>Nr umowy:</td>
                        <td> {agreement.agreementNo}</td>
                    </tr>
                    <tr>
                        <td>Wartość umowy:</td>
                        <td> {agreement.invoiceAmount} PLN</td>
                    </tr>
                    <tr>
                        <td>Data wystawienia faktury:</td>
                        <td> {agreement.invoiceDate}</td>
                    </tr>
                    <tr>
                        <td>Data wysłania przeglądu zlecenia:</td>
                        <td> {agreement.responseDate}</td>
                    </tr>
                    <tr>
                        <td>Data wysłania oferty:</td>
                        <td> {agreement.offerSendingDate}</td>
                    </tr>
                    <tr>
                        <td>Okres obowiązywania umowy:</td>
                        <td> {agreement.agreementStartDate} - {agreement.agreementEndDate}</td>
                    </tr>
                    <tr>
                        <td>Data realizacji zlecenia:</td>
                        <td> {agreement.executionDate}</td>
                    </tr>
                    <tr>
                        <td>Numer raportu:</td>
                        <td> {agreement.reportId}</td>
                    </tr>
                    <tr>
                        <td>Data sporządzenia raportu:</td>
                        <td> {agreement.reportDate}</td>
                    </tr>
                </table>
            </div>
            <div className='regular-box'>
                <h3 className='sub-title'>Osoba/-y odpowiedzialna/-e za realizację zlecenia:</h3>
                <table>
                    <tr>
                        <td>{agreement.employeeId1}</td>
                        <td>{agreement.employeeId2}</td>
                    </tr>
                </table>
            </div>
        </div>
        <Link to={`/agreement/update/${idOfAgreement}`} className='btn-insertion'>Edytuj</Link>
    </div>
}