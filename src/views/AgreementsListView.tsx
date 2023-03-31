import React, {useState} from "react";
import {AgreementsList} from "../components/Agreements/AgreementsList";
import {SearchContext} from "../contexts/search.context";
import {HeaderOfList} from "../components/HeadOfList/HeaderOfList";

import '../styles/bodyComponentWrapper.scss'
export const AgreementsListView = () => {
    const [search, setSearch] = useState<string>('');

    return <div className='body-component-wrapper'>
        <SearchContext.Provider value={{search, setSearch}}>
            <HeaderOfList title='Lista zleceń'/>
            <AgreementsList/>
        </SearchContext.Provider>
    </div>
};