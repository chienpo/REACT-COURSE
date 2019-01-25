import React from 'react'
import {connect} from 'react-redux'

import Navigation from '../../components/Navigation/Navigation'
import { Page, Section } from '../../components/UI/styled'
import { CalculatorWrapper} from '../../components/calculator/styled'
import CalculatorButtons from '../../components/calculator/CalculatorButtons'
import CalculatorScreen from '../../components/calculator/CalculatorScreen'
import * as actionTypes from '../../store/actions';
import calculate from '../../components/calculator/Calculate'

interface ITaskOneState {
    tot: null | 'string',
    oper: null | 'string',
    nxt: null | 'string',
    handleClick(name: string): void,
}

class Calculator extends React.Component  <ITaskOneState> {

    state = {
        operation: '',
        next: '',
        total: ''
    }
    
    handleClick = (buttonName: string) => {
        this.setState(calculate(this.state, buttonName) as ITaskOneState)
    }

    render() {
        return (
            <Page>
                <Navigation />
                <Section>
                    <CalculatorWrapper>
                        <CalculatorScreen
                            value={this.state.next || this.state.total || '0'}
                        />
                        <CalculatorButtons
                            clickHandler={this.handleClick}
                        />
                    </CalculatorWrapper>
                </Section>
            </Page>
        )
    }
}

// const mapStateToProps = (state: any) => {
//     return {
//         tot: state.tot.total,
//         oper: state.oper.operation,
//         nxt: state.nxt.next
//     }
// }

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         handleClick: () => dispatch({type: actionTypes.AC, buttonName})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
export default Calculator
