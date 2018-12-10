import React from 'react'
import styled from 'styled-components'

import Navigation from '../Navigation/Navigation'
import Brand from './Brand'
import Model from './Model'
import Fuel from './Fuel'
import Transmission from './Transmission'
import Checkout from './Checkout'

const Page = styled.div`
    background: white;
    width: 80%;
    margin: 0 auto;
`

const Section = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background: lightgrey;
    text-align: center;
    width: 100%;
`

const PageCounter = styled.div`
    background: white;
    width: 40px;
    height: 20px;
    background: white;
    color: black;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    margin: 0 auto;
    margin-top: 25px;
`

const Controls = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    background: lightgrey;
    position: relative;

    button:last-child {
        margin-left: auto;
    }
`

const ControlButton = styled.button`
    background: grey;
    color: white;
    font-weight: bold;
    width: 25%;
    height: 100%;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &.active {
        background: orangered;

        &:hover {
            opacity: 1;
        }
    }

    &:disabled {
        opacity: .4;
        cursor: not-allowed;
    }
`

const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
    }

    label {
        cursor: pointer;
    }
`

const TABS = {
    BRAND: 'Brand',
    MODEL: 'Model',
    FUEL: 'Fuel',
    TRANSMISSION: 'Transmission',
    CHECKOUT: 'Checkout'
}

class TaskTwo extends React.Component {
    state={
        activeTab: TABS.BRAND,
        currentPage: 1,
        wizardForm: {
            brand: {
                value: '',
                valid: ''
            },
            model: {
                value: '',
                valid: ''
            },
            fuel: {
                value: '',
                valid: ''
            },
            transmission: {
                value: '',
                valid: ''
            }
        },
        nextButtonIsAllowed: false
    }

    constructor (props) {
        super(props)
    
        this.TABS_CONTENT = {
            [TABS.BRAND]: {
                name: 'Brand',
                component: props => <Brand
                    checkboxValue={this.state.wizardForm.brand.value}
                    onRadioChange={(e) => this.setVal(e)}
                />
            },
            [TABS.MODEL]: {
                name: 'Model',
                component: props => <Model
                    checkboxValue={this.state.wizardForm.model.value}
                    chosenBrand={this.state.wizardForm.brand}
                    onRadioChange={(e) => this.setVal(e)}
                />
            },
            [TABS.FUEL]: {
                name: 'Fuel',
                component: props => <Fuel
                    checkboxValue={this.state.wizardForm.fuel.value}
                    onRadioChange={(e) => this.setVal(e)}
                />
            },
            [TABS.TRANSMISSION]: {
                name: 'Transmission',
                component: props => <Transmission
                    checkboxValue={this.state.wizardForm.transmission.value}
                    onRadioChange={(e) => this.setVal(e)}
                />
            },
            [TABS.CHECKOUT]: {
                name: 'Checkout',
                component: props => <Checkout
                    wizardForm={this.state.wizardForm}
                />
            }
        }
    }

    componentDidMount() {
        this.setActivePage()
    }


    checkValidity = (fieldValue) => {
        let isValid = true

        isValid = fieldValue !== '' && isValid

        return isValid
    }

    setVal = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        const updatedWizardForm = {
            ...this.state.wizardForm
        }

        const updatedFormElement = {
            ...updatedWizardForm[fieldName]
        }

        updatedFormElement.value = e.target.value
        updatedFormElement.valid = this.checkValidity(fieldValue)

        updatedWizardForm[fieldName] = updatedFormElement

        this.setState({
            wizardForm: updatedWizardForm
        })
    }

    setActivePage = () => {
        let arr = Object.keys(TABS)

        let index = arr.findIndex(k => k===(this.state.activeTab).toUpperCase()) + 1
       
        this.setState({currentPage: index})
    }

    setPage = (value) => {
        const page = Object.keys(TABS)[value-1]

        this.setState({
            activeTab: TABS[page],
            currentPage: value
        })
    }

    checkNextButtonAllowed = () => {
        const validValue = this.state.wizardForm[this.state.activeTab.toLowerCase()]

        let nextBtnIsValid

        if (validValue) {
            nextBtnIsValid = validValue.valid ? true : false
        }

        return nextBtnIsValid
    }

    render() {
        return(
            <Page>   
                <Navigation />
                <Section>
                    <Tabs>
                        {Object.entries(this.TABS_CONTENT).map(([tabName, Tab], index) => (
                            <div key={index}>
                                {this.state.activeTab === tabName && <Tab.component />}
                            </div>
                        ))}
                    </Tabs>

                    <PageCounter>{this.state.currentPage}</PageCounter>

                    <Controls>
                        {this.state.currentPage !== 1 && (
                            <ControlButton
                                onClick={() => this.setPage(this.state.currentPage - 1)}
                            >Previous
                            </ControlButton>
                        )}

                        {this.state.currentPage !== Object.keys(TABS).length && (
                            <ControlButton
                                disabled={!this.checkNextButtonAllowed()}
                                onClick={() => this.setPage(this.state.currentPage + 1)}
                            >Next
                            </ControlButton>
                        )}
                    </Controls>
                </Section>
            </Page>
        )
    }
}

export default TaskTwo
