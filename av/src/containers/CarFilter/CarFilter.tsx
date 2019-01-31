import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchControls from '../../components/SearchEngine/SearchControls/SearchControls';

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
            <SearchControls props={true} />
        );
    }
}

export default withStyles(styles)(CarFilter);