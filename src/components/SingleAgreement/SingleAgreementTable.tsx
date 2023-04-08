import React from "react";
import { AgreementEntity, ArchiveAgreementEntity } from "types";

interface Props {
    agreement: AgreementEntity | ArchiveAgreementEntity,
    title: string,
}
export const SingleAgreementTable = (props: Props) => {
    return <div className='agreement-main-container'>
        <h2 className='title'>{props.title}</h2>
        <table>
            <tr>
                <td className='first-box'>
                    <h3>Nazwa:</h3>
                    <p>{props.agreement.institutionName}</p>
                </td>
                <td className='second-box'>
                    <h3>Adres:</h3>
                    <p>{props.agreement.institutionStreet}</p>
                    <p>{props.agreement.institutionCity} {props.agreement.institutionZipCode}</p>
                </td>
            </tr>
        </table>
        <div className='regular-box'>
            <h3 className='sub-title'>Osoba do kontaktu:</h3>
            <table>
                <tr>
                    <td>{props.agreement.personForContact}</td>
                    <td>{props.agreement.personForContactPhone}</td>
                    <td>{props.agreement.personForContactMail}</td>
                </tr>
            </table>
        </div>
        <div className='regular-box'>
            <h3 className='sub-title'>Dane dotyczące umowy:</h3>
            <table className='third-table'>
                <tr>
                    <td>Nr umowy:</td>
                    <td> {props.agreement.agreementNo}</td>
                </tr>
                <tr>
                    <td>Wartość umowy:</td>
                    <td> {props.agreement.invoiceAmount} PLN</td>
                </tr>
                <tr>
                    <td>Data wystawienia faktury:</td>
                    <td> {props.agreement.invoiceDate}</td>
                </tr>
                <tr>
                    <td>Data wysłania przeglądu zlecenia:</td>
                    <td> {props.agreement.responseDate}</td>
                </tr>
                <tr>
                    <td>Data wysłania oferty:</td>
                    <td> {props.agreement.offerSendingDate}</td>
                </tr>
                <tr>
                    <td>Okres obowiązywania umowy:</td>
                    <td> {props.agreement.agreementStartDate} - {props.agreement.agreementEndDate}</td>
                </tr>
                <tr>
                    <td>Data realizacji zlecenia:</td>
                    <td> {props.agreement.executionDate}</td>
                </tr>
                <tr>
                    <td>Numer raportu:</td>
                    <td> {props.agreement.reportId}</td>
                </tr>
                <tr>
                    <td>Data sporządzenia raportu:</td>
                    <td> {props.agreement.reportDate}</td>
                </tr>
            </table>
        </div>
        <div className='regular-box'>
            <h3 className='sub-title'>Osoba/-y odpowiedzialna/-e za realizację zlecenia:</h3>
            <table>
                <tr>
                    <td>{props.agreement.employeeId1}</td>
                    <td>{props.agreement.employeeId2}</td>
                </tr>
            </table>
        </div>
    </div>
}