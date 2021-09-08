import React from 'react';
import {
    IconButton,
    InputAdornment,
    TextField,
    createMuiTheme,
    withStyles
} from "@material-ui/core";
//import Visibility from "@material-ui/icons/Visibility";
//import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = {
    paperRoot: {
        padding: "6px 10px",
        display: "flex",
        alignItems: "center",
        background: "#fff"
    },
    paperRootError: {
        padding: "6px 10px",
        display: "flex",
        alignItems: "center",
        background: "#fff",
        border: "2px solid red"
    },
    input: {
        flex: 1,
        color: "black",
        fontSize: 14
    },
    inputTwo: {
        color: "black"
    }
};

const CustomTextfield = props => {
    const { handleChange,
        fieldValue,
        placeholder,
        type,
        fullWidth,
        classes,
        isValid = true,
        hasEndAdornment = false,
        onCutHandler,
        onCopyHandler,
        onPasteHandler,
        id,
        accept,
        ...rest } = props;

    return (
        <div>
            <TextField
               // type={type === "password" ? (showPassword ? "text" : "password") : type}
                value={fieldValue}
                onChange={handleChange}
                placeholder={placeholder}
                label={placeholder}
                variant={"outlined"}
                fullWidth={fullWidth}
                accept={accept}
                {...rest}
                // endAdornment={
                //     hasEndAdornment && (
                //         <InputAdornment position="end">
                //             <IconButton
                //                 aria-label="Toggle password visibility"
                //                 onClick={this.handleClickShowPassword}
                //             >
                //                 {showPassword ? <Visibility /> : <VisibilityOff />}
                //             </IconButton>
                //         </InputAdornment>
                //     )
                // }
                onCut={onCutHandler}
                onPaste={onPasteHandler}
                onCopy={onCopyHandler}
                id={id}
            />
        </div>
    );
}

export default CustomTextfield;
