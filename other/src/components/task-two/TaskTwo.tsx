import React from 'react'

import Navigation from '../Navigation/Navigation'
import Brand from './Brand'
import Model from './Model'
import Fuel from './Fuel'
import Transmission from './Transmission'
// import Checkout from './Checkout'
import { Page, Section, PageCounter, Controls, ControlButton, Tabs } from './styled/styled'

interface ITabs {
    [key: string]: string;
}

const TABS: ITabs = {
    BRAND: 'Brand',
    MODEL: 'Model',
    FUEL: 'Fuel',
    TRANSMISSION: 'Transmission',
    CHECKOUT: 'Checkout'
}

interface IWizardFormStrings {
    value: string;
    valid: boolean;
}

interface IWizardFormElement {
    [key: string]: IWizardFormStrings;
}

interface IWizardForm {
    [key: string]: IWizardFormElement;
}

class TaskTwo extends React.Component {
    state={
        activeTab: TABS.BRAND,
        currentPage: 1,
        wizardForm: {
            brand: {
                value: '',
                valid: false
            },
            model: {
                value: '',
                valid: false
            },
            fuel: {
                value: '',
                valid: false
            },
            transmission: {
                value: '',
                valid: false
            }
        },
        nextButtonIsAllowed: false
    }

    TABS_CONTENT = {
        [TABS.BRAND]: {
            name: 'Brand',
            component: (props: any) => <Brand
                checkboxValue={this.state.wizardForm.brand.value}
                onRadioChange={(e: any) => this.setVal(e)}
            />
        },
        [TABS.MODEL]: {
            name: 'Model',
            component: (props: any) => <Model
                checkboxValue={this.state.wizardForm.model.value}
                chosenBrand={this.state.wizardForm.brand}
                onRadioChange={(e: any) => this.setVal(e)}
            />
        },
        [TABS.FUEL]: {
            name: 'Fuel',
            component: (props: any) => <Fuel
                checkboxValue={this.state.wizardForm.fuel.value}
                onRadioChange={(e: any) => this.setVal(e)}
            />
        },
        [TABS.TRANSMISSION]: {
            name: 'Transmission',
            component: (props: any) => <Transmission
                checkboxValue={this.state.wizardForm.transmission.value}
                onRadioChange={(e: any) => this.setVal(e)}
            />
        },
        // [TABS.CHECKOUT]: {
        //     name: 'Checkout',
        //     component: (props: any) => <Checkout
        //         wizardForm={this.state.wizardForm}
        //     />
        // }
    }

    componentDidMount() {
        this.setActivePage()
    }


    checkValidity = (fieldValue: any) => {
        let isValid = true

        isValid = fieldValue !== '' && isValid

        return isValid
    }

    setVal = (e: any) => {
        const fieldName: string = e.target.name
        const fieldValue: string = e.target.value

        const updatedWizardForm: any = {
            ...this.state.wizardForm
        }

        const updatedFormElement: IWizardFormStrings = {
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

    setPage = (value: any) => {
        const page = Object.keys(TABS)[value-1]

        this.setState({
            activeTab: TABS[page],
            currentPage: value
        })
    }

    checkNextButtonAllowed = () => {
        // const validValue = this.state.wizardForm[this.state.activeTab.toLowerCase()]

        // let nextBtnIsValid

        // if (validValue) {
        //     nextBtnIsValid = validValue.valid ? true : false
        // }

        // return nextBtnIsValid
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
                                // disabled={!this.checkNextButtonAllowed()}
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
