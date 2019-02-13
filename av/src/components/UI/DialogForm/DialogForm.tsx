import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SortIcon from '@material-ui/icons/Sort';

interface IDialogForm {
    showDialogWindow: boolean;
    openDialogWindow: any;
    onCloseDialogWindow: any;
    children: any;
}

const DialogForm = (props: IDialogForm) => (
    <div>
        <Button
            type='button'
            color="inherit"
            aria-label="Menu"
            onClick={props.openDialogWindow}
        >
            <SortIcon />
        </Button>
        <Dialog
            open={props.showDialogWindow}
            onClose={props.onCloseDialogWindow}
            aria-labelledby="form-dialog-title"
        >
            {props.children}
        </Dialog>
    </div>
);

export default DialogForm