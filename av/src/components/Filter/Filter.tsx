import React from 'react'

import DialogSelect from "../UI/DialogSelect/DialogSelect";
import NestedList from  "../UI/NestedList/NestedList"

class Filter extends React.Component<{props: any}> {

    render() {
        return(
            <div>
                <h1>filters</h1>
                <DialogSelect />
                <NestedList />
            </div>
        )
    }
}

export default Filter
