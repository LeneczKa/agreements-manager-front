import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {SingleAgreementTable} from "../SingleAgreement/SingleAgreementTable";
import { ArchiveAgreementEntity } from 'types';

import '../SingleAgreement/SingleAgreement.scss'
export const SingleArchiveAgreement = () => {
    const [archiveAgreement, setArchiveAgreement] = useState<ArchiveAgreementEntity | null>(null);
    const {idOfAgreement} = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/archive/${idOfAgreement}`);
            const archiveAgreement = await res.json();
            setArchiveAgreement(archiveAgreement);
        })();
    }, [idOfAgreement])

    if (archiveAgreement === null) {
        return null;
    }

    return <div className='agreement-wrapper'>
        <Link to={'/archive'} className='links'>««« powrót</Link>
        <SingleAgreementTable agreement={archiveAgreement} title='Zlecenie archiwalne'/>
    </div>
}