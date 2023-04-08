import React, {useEffect, useState} from 'react';
import {SimpleAgreementEntity} from 'types';
import {Link} from "react-router-dom";
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {ArchiveBtn} from '../ArchiveBtn/ArchiveBtn';
import {DeleteBtn} from "../DeleteBtn/DeleteBtn";
import {apiURL} from "../../config/api";

import './AgreementsListOneItem.scss';

interface Props {
    agreement: SimpleAgreementEntity,
}

export const AgreementsListOneElement = (props: Props) => {
    const [success, setSuccess] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiURL}/agreement/${props.agreement.id}`);
            const data = await res.json();
            setSuccess(data.amountOfSuccess)
        })();
    }, []);

    return (<ul className="agreement-box">
            <Link to={`/agreement/${props.agreement.id}`} className='one-agreement-link'>
                <div className='agreement-address-box'>
                    <div>
                        <label>Nazwa:</label>
                        <p>{props.agreement.institutionName}</p>
                    </div>
                    <div>
                        <label>Adres:</label>
                        <p>{props.agreement.institutionCity}, {props.agreement.institutionStreet}</p>
                    </div>
                </div>
                <div className='agreement-data-box'>
                    <div>
                        <label>Data zakończenia umowy:</label> <p>{props.agreement.agreementEndDate}</p>
                    </div>
                    <div>
                        <label>Planowana data realizacji:</label>
                        <p>{props.agreement.executionDate}</p>
                    </div>
                    <div>
                        <label>Nr umowy:</label>
                        <p>{props.agreement.agreementNo}</p>
                    </div>
                    <div>
                        <label>Nr raportu:</label>
                        <p>{props.agreement.reportId}</p>
                    </div>
                </div>
                <div className='progress-bar'>
                    <ProgressBar count={success} bgcolour={'#2e6162'}/>
                </div>
            </Link>
            <ArchiveBtn count={success} agreement={props.agreement}/>
            <DeleteBtn agreement={props.agreement}/>
        </ul>
    )
}