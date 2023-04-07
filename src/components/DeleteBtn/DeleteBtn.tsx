import React, {FormEvent} from "react";
import { SimpleAgreementEntity } from "types";

import './DeleteBtn.scss'
interface Props {
    agreement: SimpleAgreementEntity;
}
export const DeleteBtn = (props: Props) => {
    const deleteAgreement = async (e: FormEvent) => {
        e.preventDefault();

        if(!window.confirm(`Czy na pewno chcesz usunąć zlecenie o numerze ${props.agreement.agreementNo}?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/agreement/${props.agreement.id}`, {
            method: 'DELETE',
        })

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occured: ${error.message}`);
            return;
        }
    };
    return <button className='btn-small btn-delete' onClick={deleteAgreement}>🗑</button>
}