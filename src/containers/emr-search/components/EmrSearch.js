import React, { useRef } from 'react'
import styled from 'styled-components'
import UiBox from '../../../components/UiBox'

function EmrSearch({ onSearch }) {
    const searchInputElement = useRef(null);
    const formElement = useRef(null);

    const onSearchFormSubmit = event => {
        event.preventDefault();

        const isValidForm = formElement.current.checkValidity();
        formElement.current.classList.add('was-validated')

        if (isValidForm) {
            onSearch(true);
        }

        return false;
    }

    return (
        <UiSearch title="EMR Client Search" >
            <form ref={formElement} className={`needs-validation`} noValidate onSubmit={onSearchFormSubmit}>
                <div className="input-group mb-3 px-3 mt-3">
                    <input
                        type="text"
                        ref={searchInputElement}
                        className="form-control form-control-lg"
                        placeholder="Enter EMR Client ID"
                        required />
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </div>
            </form>
        </UiSearch>

    )
}

const UiSearch = styled(UiBox)`
    max-width: 480px;
    width: 80%;
`


export default EmrSearch
