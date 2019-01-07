import React from 'react'

interface IWizardForm {
    field: {};
    value: string;
}

interface ICheckoutProps {
    wizardForm: IWizardForm;
    loading: boolean;
}

const Checkout: (props: ICheckoutProps) => JSX.Element = ( props ) => {
    const { wizardForm } = props

    return (
        <div>
            <h2>Checkout</h2>

            <div>
                {Object.entries(wizardForm).map(([formElement, field], index) => (
                    <div key={index}>
                        <strong>{formElement}: </strong>{field.value}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Checkout
