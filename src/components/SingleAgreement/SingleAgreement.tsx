import React, {useEffect, useState} from 'react';
import {AgreementEntity} from 'types';
import {Link, useParams} from "react-router-dom";
import {SingleAgreementTable} from "./SingleAgreementTable";

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
        <SingleAgreementTable agreement={agreement} title='Zlecenie'/>
        <Link to={`/agreement/update/${idOfAgreement}`} className='btn-insertion'>Edytuj</Link>
    </div>
}