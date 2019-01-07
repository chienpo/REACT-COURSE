import React from 'react'

const Fuel = (props: any) => (
    <div>
        <h2>Fuel</h2>
        <label>
            <input
                checked={props.checkboxValue === 'diesel'}
                type="radio"
                name="fuel"
                value='diesel'
                onChange={props.onRadioChange}
            />
            DIESEL
        </label>
        <label>
            <input
                checked={props.checkboxValue === 'benzin'}
                type="radio"
                name="fuel"
                value='benzin'
                onChange={props.onRadioChange}
            />
            BENZIN
        </label>
    </div>
)

export default Fuel
