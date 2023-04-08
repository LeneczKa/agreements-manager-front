import React from "react";
import {SimpleArchiveAgreementEntity} from "types";
import {Link} from "react-router-dom";

import './ArchiveAgreement.scss'

interface Props {
    archiveAgreement: SimpleArchiveAgreementEntity;
}

export const ArchiveAgreementTableRow = (props: Props) => {
    return <tr>
        <td>
            {props.archiveAgreement.institutionName}
        </td>
        <td>
            {props.archiveAgreement.institutionCity}
        </td>
        <td>
            {props.archiveAgreement.agreementNo}
        </td>
        <td>
            {props.archiveAgreement.executionDate}
        </td>
        <td>
            {props.archiveAgreement.reportId}
        </td>
        <td>
            <Link to={`/archive/${props.archiveAgreement.id}`}>szczegóły</Link>
        </td>
    </tr>
}