import React, {FormEvent, useEffect, useState} from "react";
import {AgreementEntity, SimpleAgreementEntity} from "types";
import {apiURL} from "../../config/api";

import './ArchiveBtn.scss'

interface Props {
    count: number;
    agreement: SimpleAgreementEntity;
}

export const ArchiveBtn = (props: Props) => {
    const [form, setForm] = useState<AgreementEntity>()

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiURL}/agreement/${props.agreement.id}`);
            const data = await res.json();
            setForm(data.agreement)
        })();
    }, []);
    const archiveAgreement = async (e: FormEvent) => {
        e.preventDefault();

        if (!window.confirm(`Czy jesteś pewien, że chcesz przenieść zlecenie o numerze ${props.agreement.agreementNo} do archiwum?`)) {
            return;
        }
        const res = await fetch(`http://localhost:3001/agreement/${props.agreement.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...form
            }),
        });
        await res.json();

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occured: ${error.message}`);
            return;
        }
    }

    const btnDisplay = {display: props.count == 100 ? 'block' : 'none'};

    return <div className='btn-container'>
        <button className='btn-small'
                onClick={archiveAgreement}
                style={btnDisplay}
        >Archiwizuj
        </button>
    </div>
}