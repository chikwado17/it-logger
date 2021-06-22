import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchLogs } from '../logs/logActions';

const SearchBar = () => {

    const text = useRef('');
    const dispatch = useDispatch(); 

    const handleOnChange = (e) => {
        dispatch(searchLogs(text.current.value))
    }

    return (
        <nav style={{marginBottom: '30px'}} className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input id="search" ref={text} onChange={handleOnChange} type="search" placeholder='Search logs...' />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
      </nav>
    )
}

export default SearchBar;
