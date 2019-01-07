import React from 'react'

const Model = (props: any) => (
    <div>
        <h2>Model</h2>
        
        {props.chosenBrand.value === 'mazda' && (
            <>
                <label>
                    <input
                        checked={props.checkboxValue === 'mazda-323'}
                        type="radio"
                        name="model"
                        value='mazda-323'
                        onChange={props.onRadioChange}
                    />
                    mazda-323
                </label>
                <label>
                    <input
                        checked={props.checkboxValue === 'mazda-626'}
                        type="radio"
                        name="model"
                        value='mazda-626'
                        onChange={props.onRadioChange}
                    />
                    mazda-626
                </label>
            </>
        )}

        {props.chosenBrand.value === 'opel' && (
            <>
                <label>
                    <input
                        checked={props.checkboxValue === 'opel-111'}
                        type="radio"
                        name="model"
                        value='opel-111'
                        onChange={props.onRadioChange}
                    />
                    opel-111
                </label>
                <label>
                    <input
                        checked={props.checkboxValue === 'opel-222'}
                        type="radio"
                        name="model"
                        value='opel-222'
                        onChange={props.onRadioChange}
                    />
                    opel-222
                </label>
            </>
        )}
    </div>
)

export default Model
