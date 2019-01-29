import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Filter from '../../components/Filter/Filter';

const styles = {
    authWrapper: {
        width: '100%',
    },
    drawerPaper: {
        width: '100%'
    }
};

class CarFilter extends React.Component<{props: any}> {
    render() {
        return (
            <Filter props={true} />
        );
    }
}

export default withStyles(styles)(CarFilter);