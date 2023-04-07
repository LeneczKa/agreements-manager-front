import {useState} from "react";
import {ArchiveAgreement} from "../components/ArchiveAgreement/ArchiveAgreement";
import {SearchContext} from "../contexts/search.context";
import {HeaderOfList} from "../components/HeadOfList/HeaderOfList";

import '../styles/bodyComponentWrapper.scss'
export const AgreementArchiveView = () => {
    const [search, setSearch] = useState('');

    return <div className='body-component-wrapper'>
        <SearchContext.Provider value={{search, setSearch}}>
            <HeaderOfList title='Zlecenia archiwalne' searchPlaceholder='Wyszukaj wg Miasta'/>
            <ArchiveAgreement/>
        </SearchContext.Provider>
    </div>
}