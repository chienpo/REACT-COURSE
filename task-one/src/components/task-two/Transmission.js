import React from 'react'

const Transmission = (props) => (
    <div>
        <h2>Transmission</h2>
        <label>
            <input
                checked={props.checkboxValue === 'handle'}
                type="radio"
                name="transmission"
                value='handle'
                onChange={props.onRadioChange}
            />
            HANDLE
        </label>
        <label>
            <input
                checked={props.checkboxValue === 'automat'}
                type="radio"
                name="transmission"
                value='automat'
                onChange={props.onRadioChange}
            />
            AUTOMAT
        </label>
    </div>
)

export default Transmission
