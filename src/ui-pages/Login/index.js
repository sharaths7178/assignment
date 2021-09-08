import React, { useState } from 'react';
import { Grid, Card, Button, Typography, withStyles } from '@material-ui/core';
import './index.css';
import CustomTextField from '../../ui-atoms/Custom-TextField';
import { connect } from 'react-redux';
import { addlogin } from '../../ui-redux/screen-configuration/actions';

const styles = theme => ({
    root: {
        height: "100vh",
        // background: "#242430",
        background: "#242430",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rootTwo: {
        height: "100vh",
        background: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    login: {
        boxShadow:
            "3px 3px 9px 5px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        borderRadius: 20
    },
    lefttext: {
        color: theme.palette.primary.main,
        fontWeight: 100,
        paddingTop: "108px"
    },
    steppertext: {
        marginTop: "3%",
        color: "#fff"
    },
    steppertextmobo: {
        marginTop: "20px",
        color: "#fff"
    },
    stepper: {
        height: "40%"
        // background: "#242430"
    },
    stepperTwo: {
        height: "40%",
        background: theme.palette.secondary.main
    },
    field: {
        marginLeft: "2px",
        marginRight: "2px"
    },
    icon: {
        marginTop: "22px"
    },
    signbutton: {
        borderRadius: 0,
        color: "#fff",
        fontFamily: "sans-serif"
    },
    headertext: {
        color: theme.palette.primary.main,
        fontWeight: 400,
        paddingTop: "1%"
    },
    headertextmobo: {
        color: theme.palette.primary.main,
        fontWeight: 400,
        paddingTop: "1px"
    },
    bodycontent: {
        margin: "8% 0%"
    },
    bodycontentmobo: {
        margin: "22px 0px"
    },
    welcometext: {
        paddingTop: "2%",
        fontWeight: "900",
        // color: "#fff",
        color: "blue",
        display: "flex",
        justifyContent: "center"
    },
    welcometextmobo: {
        paddingTop: "79px",
        fontWeight: "900",
        color: "#fff"
    },
    selectedStep: {
        fontSize: 70,
        cursor: "pointer",
        color: theme.palette.primary.main
    },
    unselectedStep: {
        fontSize: 70,
        cursor: "pointer",
        color: "#fff"
    },
    forgotPass: {
        color: "#1691d0",
        cursor: "pointer"
    },
    errorMessage: {
        color: "red"
    },
    dialogButton: {
        color: "black",
        marginTop: "5%",
        borderRadius: 0,
        padding: "8px 16px",
        textTransform: "none"
    },
    webHeader: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1
    },
    avatar: {
        marginRight: "16px"
    },
    logobull: {
        color: "yellow",
        fontSize: "x-large",
        fontStyle: "italic",
        fontWeight: 900,
        cursor: "pointer"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        background: "#25273e"
    }
});


const Login = props => {
    const { classes, addLoginData } = props;
    const [formerror, setformerror] = useState({ username: "", password: "" });
    const [formState, setFormState] = useState({ username: "", password: "" });

    const validateFeild = () => {
        const { username = "", password = "" } = formState
        let formIsValid = true;
        let errors = {};

        if (username === "") {
            formIsValid = false;
            errors["username"] = "please  enter username";
        }

        if (password === "") {
            formIsValid = false;
            errors["password"] = "please enter password";
        }
        setformerror({ ...errors });
        return formIsValid;
    }

    const handleChange = (label, value) => {
        setFormState({ ...formState, [label]: value });
    }

    const handleLogin = () => {
        const { username = "", password = "" } = formState
        if (validateFeild()) {
            if (username === "sharath7178" && password === "12345678") {
                props.history.push("/user-home");
            }
            console.log("user name ", username);
            setFormState({
                username: "",
                password: "",
            })
        }
    }

    return (
        <Grid
            item
            md={6}
            xs={12}
            sm={12}
            container
            style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "30px",
                display: "flex",
                maxWidth: "unset",
                height: "100vh",
            }}
        >
            <Card >
                <Card >
                    <Grid container style={{ padding: 16 }}>
                        <Grid item md={12} xs={12} sm={12}>
                            <Typography variant="h6" className={classes.welcometext}>
                                Login
                            </Typography>

                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-around"
                                className={classes.bodycontent}
                            >
                                <Grid
                                    item
                                    md={10}
                                    xs={12}
                                    sm={12}
                                    style={{ marginBottom: "5%" }}
                                >
                                    <CustomTextField
                                        placeholder=" username"
                                        id="username"
                                        fullWidth={true}
                                        fieldValue={formState.username}
                                        handleChange={e => handleChange(e.target.id, e.target.value)}
                                        error={formerror.username}
                                        helperText={formerror.username ? formerror.username : ""}
                                        type="text"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={10}
                                    xs={12}
                                    sm={12}
                                    style={{ marginBottom: "5%" }}
                                >
                                    <CustomTextField
                                        placeholder="Password"
                                        id="password"
                                        fullWidth={true}
                                        //   onKeyDown={e => this.onEnterClick(e)}
                                        fieldValue={formState.password}
                                        handleChange={e => handleChange(e.target.id, e.target.value)}
                                        type="password"
                                        error={formerror.password}
                                        helperText={formerror.password ? formerror.password : ""}
                                        hasEndAdornment={true}
                                    //   onCutHandler={e => e.preventDefault()}
                                    //   onCopyHandler={e => e.preventDefault()}
                                    //   onPasteHandler={e => e.preventDefault()}
                                    />
                                </Grid>

                                <Grid item md={8} xs={8} sm={8}>
                                    <Button
                                        className={classes.signbutton}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        onClick={e => handleLogin()}
                                    >
                                        {" "}
                                        Sign In
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Card>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addLoginData: (dataLogin) => {
            dispatch(addlogin(dataLogin))
        }
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Login));