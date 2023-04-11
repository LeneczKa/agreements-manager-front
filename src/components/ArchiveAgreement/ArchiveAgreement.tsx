import React, {useContext, useEffect, useState} from "react";
import {SearchContext} from "../../contexts/search.context";
import {Spinner} from "../../common/Spinner/Spinner";
import {SimpleArchiveAgreementEntity} from "types";
import {ArchiveAgreementsTable} from "./ArchiveAgreementsTable";
import {apiURL} from "../../config/api";

import '../Employees/EmployeesList.scss'

export const ArchiveAgreement = () => {
    const {search} = useContext(SearchContext)
    const [archiveAgreementsList, setArchiveAgreementsList] = useState<SimpleArchiveAgreementEntity[] | []>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/archive/search/${search}`)
            const archiveAgreementsList = await res.json();
            setArchiveAgreementsList(archiveAgreementsList);
        })();
    }, [search, archiveAgreementsList]);

    if (archiveAgreementsList === null) {
        return <Spinner/>
    }

    return <div className='list-container'>
        <ArchiveAgreementsTable archiveAgreements={archiveAgreementsList}/>
    </div>
}