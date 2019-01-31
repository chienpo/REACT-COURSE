import React from 'react'

import DialogSelect from '../../UI/DialogSelect/DialogSelect';
import NestedList from '../../UI/NestedList/NestedList'
import SummaryAnnouncement from "../SearchSummary/SummaryAnnouncement";

class SearchControls extends React.Component<{props: any}> {

    render() {
        return(
            <div>
                <h1>filters</h1>
                <SummaryAnnouncement />
                <DialogSelect />
                <NestedList />
            </div>
        )
    }
}

export default SearchControls
