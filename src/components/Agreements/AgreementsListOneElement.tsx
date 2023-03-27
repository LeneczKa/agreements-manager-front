import React from 'react';
import {SimpleAgreementEntity} from 'types';

import './AgreementsListOneItem.scss'

interface Props {
    agreement: SimpleAgreementEntity;
}

export const AgreementsListOneElement = (props: Props) => {
    return (
        <ul className="agreement-box">
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
            <div>progress bar</div>
        </ul>
    )
}