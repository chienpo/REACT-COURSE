import React from "react";

import { CButton } from '../UI/styled'
import {
    CalculatorControlls, 
    Buttons, 
    CalculatorActions
} from './styled'

interface ICalculatorButtonsProps {
    clickHandler: any,
}

class CalculatorButtons extends React.Component <{clickHandler: any}, ICalculatorButtonsProps> {

    handleClick = (e: any) => {
        const buttonName = e.target.name

        this.props.clickHandler(buttonName)
    }
    
    render() {
        return (
            <CalculatorControlls>
                <Buttons>
                    <CButton
                        name='1'
                        onClick={e => this.handleClick(e)}    
                    >1
                    </CButton>
                    <CButton
                        name='2'
                        onClick={e => this.handleClick(e)}    
                    >2
                    </CButton>
                    <CButton
                        name='3'
                        onClick={e => this.handleClick(e)}    
                    >3
                    </CButton>
                    <CButton
                        name='4'
                        onClick={e => this.handleClick(e)}    
                    >4
                    </CButton>
                    <CButton
                        name='5'
                        onClick={e => this.handleClick(e)}    
                    >5
                    </CButton>
                    <CButton
                        name='6'
                        onClick={e => this.handleClick(e)}    
                    >6
                    </CButton>
                    <CButton
                        name='7'
                        onClick={e => this.handleClick(e)}    
                    >7
                    </CButton>
                    <CButton
                        name='8'
                        onClick={e => this.handleClick(e)}    
                    >8
                    </CButton>
                    <CButton
                        name='9'
                        onClick={e => this.handleClick(e)}    
                    >9
                    </CButton>
                    <CButton
                        name='AC'
                        onClick={e => this.handleClick(e)}
                    >c
                    </CButton>
                    <CButton
                        name='0'
                        onClick={e => this.handleClick(e)}    
                    >0
                    </CButton>
                    <CButton
                        name='='
                        onClick={e => this.handleClick(e)}
                    >=
                    </CButton>
                </Buttons>
                <CalculatorActions>
                    <CButton
                        name='+'
                        onClick={e => this.handleClick(e)}
                    >+
                    </CButton>
                    <CButton
                        name='-'
                        onClick={e => this.handleClick(e)}
                    >-
                    </CButton>
                    <CButton
                        name='/'
                        onClick={e => this.handleClick(e)}
                    >/
                    </CButton>
                    <CButton
                        name='*'
                        onClick={e => this.handleClick(e)}
                    >*
                    </CButton>
                </CalculatorActions>
            </CalculatorControlls>
        )
    }
}

export default CalculatorButtons
