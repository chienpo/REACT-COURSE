import React from 'react'

const Checkout = (props) => (
    <div>
        <h2>Checkout</h2>

        <div>
            {Object.entries(props.wizardForm).map(([formElement, field], index) => (
                <div key={index}>
                    <strong>{formElement}: </strong>{field.value}
                </div>
            ))}
        </div>
    </div>
)


export default Checkout
