import React from "react";
import {SimpleArchiveAgreementEntity} from "types";
import {ArchiveAgreementTableRow} from "./ArchiveAgreementTableRow";

interface Props {
    archiveAgreements: SimpleArchiveAgreementEntity[];
}

export const ArchiveAgreementsTable = (props: Props) => {
    return (<table className='user-table'>
            <thead>
            <tr>
                <th>Nazwa</th>
                <th>Miasto</th>
                <th>Numer umowy</th>
                <th>Data realizacji</th>
                <th>Numer raportu</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                props.archiveAgreements.map(archiveAgreement => (
                    <ArchiveAgreementTableRow archiveAgreement={archiveAgreement} key={archiveAgreement.id}/>
                ))
            }
            </tbody>
        </table>
    )
}