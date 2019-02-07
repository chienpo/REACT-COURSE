import React from 'react'

import DialogSelect from '../../UI/DialogSelect/DialogSelect';
import NestedList from '../../UI/NestedList/NestedList'
import SummaryAnnouncement from "../SearchSummary/SummaryAnnouncement";

import { carBrandList } from "../../UI/DialogSelect/select-lists";

class SearchControls extends React.Component<{props: any}> {

    render() {
        return(
            <div>
                <h1>filters</h1>
                <SummaryAnnouncement />
                <DialogSelect name='model' title='asd' options={carBrandList} />
                <NestedList />
            </div>
        )
    }
}

export default SearchControls
