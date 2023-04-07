import React, {FormEvent, useEffect, useState} from "react";
import {Spinner} from "../../common/Spinner/Spinner";
import {Link, useParams} from "react-router-dom";
import {AgreementEntity} from "types";
import {AgreementForm} from "../AgreementForm/AgreementForm";

import './AddAgreement.scss'

export const UpdateAgreement = () => {
    const [form, setForm] = useState<AgreementEntity>({
        id: '',
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
    const {idOfAgreement} = useParams();


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/agreement/${idOfAgreement}`);
            const data = await res.json();
            setForm(data.agreement);
        })();
    }, [])
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };
    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);
        // const workMode = isUpdated ? 'PATCH' : 'POST';
        try {
            const res = await fetch(`http://localhost:3001/agreement/update/${idOfAgreement}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form
                }),
            });
            const data: AgreementEntity = await res.json();

            setResultInfo(`Zlecenie o ${data.id} zostało zmienione.`);

        } finally {
            setLoading(false);
        }
        setForm({
            id: '',
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
    };

    if (loading) {
        return <Spinner/>
    }
    if (resultInfo !== null) {
        return <div className='adding-result-info'>
            <Link to="/agreement" className='links'> ««« powrót </Link>
            <p><strong>{resultInfo}</strong></p>
        </div>;
    }
    return <AgreementForm form={form} updateForm={() => updateForm} sendForm={() => sendForm} text={'Edytuj zlecenie'}/>
}