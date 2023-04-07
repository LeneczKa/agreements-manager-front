import React, {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../contexts/search.context";

import './HeadOfList.scss'
import'../../styles/InsertionBtn.scss'
interface Props {
    title: string;
    searchPlaceholder: string;
}

export const HeaderOfList = (props: Props) => {
    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState<string>(search);
    const [show, setShow] = useState<boolean>(false);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
        setShow(true);
    }

    return <div className='list-container'>
        <div className='employees-table-header'>
            <h1 className='table-title'>{props.title}</h1>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input
                    className='form-input'
                    type="text"
                    placeholder={props.searchPlaceholder}
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                />
                <button className='btn-small'>🔍</button>
            </form>
        </div>
        <button className='btn-insertion' style={{display: show ? 'block' : 'none'}} onClick={() => {
            setSearch('');
            setInputVal('');
            setShow(false)
        }}
        >Wróć do listy
        </button>
    </div>
}