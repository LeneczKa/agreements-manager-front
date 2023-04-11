import React, {useContext, useEffect, useState} from "react";
import {SimpleAgreementEntity} from "types";
import {Spinner} from "../../common/Spinner/Spinner";
import {SearchContext} from "../../contexts/search.context";
import {AgreementsListOneElement} from "./AgreementsListOneElement";
import {Link} from "react-router-dom";
import {apiURL} from "../../config/api";

import './AgreementList.scss'

export const AgreementsList = () => {
    const {search} = useContext(SearchContext)
    const [agreementsList, setAgreementsList] = useState<SimpleAgreementEntity[] | []>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/agreement/search/${search}`);
            const agreementsList = await res.json();
            setAgreementsList(agreementsList);
        })();
    }, [search, agreementsList]);

    if (agreementsList === null) {
        return <Spinner/>
    }

    return <div className='list-container'>
        <Link to="/agreement/add" className='links'>Dodaj zlecenie</Link>
        {
            agreementsList.map(agreement => (
                <AgreementsListOneElement agreement={agreement} key={agreement.id}/>
            ))
        }
    </div>
}