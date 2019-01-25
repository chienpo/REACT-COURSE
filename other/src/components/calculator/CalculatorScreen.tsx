import React from "react";

import { CalculatorDisplay, Screen } from './styled'

interface IDisplayProps {
    value: string
}

const Display: (props: IDisplayProps) => JSX.Element = ( props ) => (
    <CalculatorDisplay>
        <Screen>
            <div>{props.value}</div>
        </Screen>
    </CalculatorDisplay>
)

export default Display
