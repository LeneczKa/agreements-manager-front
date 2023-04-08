import React, {FormEvent, useState} from "react";
import {AgreementEntity, NewAgreementEntity} from "types";
import {Spinner} from "../../common/Spinner/Spinner";
import {Link} from "react-router-dom";
import {AgreementForm} from "../AgreementForm/AgreementForm";

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

    return <AgreementForm form={form} sendForm={() => sendForm} updateForm={() => updateForm} text={'Dodaj zlecenie'}/>
}