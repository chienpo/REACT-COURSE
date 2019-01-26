import React from 'react'

import FilterAppBar from "../../components/Navigation/FilterAppBar/FilterAppBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Filter from "../../components/Filter/Filter";

class CarFilter extends React.Component {

    render () {
        return (
            <section>
                <FilterAppBar />
                <SideDrawer />
                <Filter props={true} />
            </section>
        )
    }
}

export default CarFilter
