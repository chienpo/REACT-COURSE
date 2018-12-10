import React from 'react'

const Brand = (props) => (
    <div>
        <h2>Brand</h2>
        <label>
            <input
                checked={props.checkboxValue === 'mazda'}
                type="radio"
                value='mazda'
                name="brand"
                onChange={props.onRadioChange}
            />
            MAZDA
        </label>
        <label>
            <input
                checked={props.checkboxValue === 'opel'}
                type="radio"
                name="brand"
                value='opel'
                onChange={props.onRadioChange}
            />
            OPEL
        </label>
    </div>
)

export default Brand
