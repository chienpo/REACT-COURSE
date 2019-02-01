import React from 'react'
import {connect} from 'react-redux'

import Navigation from '../../components/Navigation/Navigation'
import { Page, Section } from '../../components/UI/styled'
import { CalculatorWrapper} from '../../components/calculator/styled'
import CalculatorButtons from '../../components/calculator/CalculatorButtons'
import CalculatorScreen from '../../components/calculator/CalculatorScreen'
import buttonClick from '../../store/actions'

interface IButtonClick { type: string, payload: { buttonName: string }}

interface ITaskOneState {
    tot: string,
    oper: any,
    nxt: string,
    handleClick(name: string): void
}



class Calculator extends React.Component  <{dispatch: any, calc: any, buttonClick: any}, ITaskOneState, IButtonClick> {

    handleClick = (buttonName: string) => {
        this.props.buttonClick(buttonName)
    };

    render() {
        return (
            <Page>
                <Navigation />
                <Section>
                    <CalculatorWrapper>
                        <CalculatorScreen
                            value={this.props.calc.next || this.props.calc.total || '0'}
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

const mapStateToProps = (state: any) => {
    return {
        calc: state.calc
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        buttonClick: (buttonName: string) => {
            dispatch(buttonClick(buttonName))
        }
    }
};

export default connect<{}>(mapStateToProps, mapDispatchToProps)(Calculator)
