import { Grid, Typography, Card, CardContent, Button, CardActions, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import UsersTable from '..';
import CustomTextField from "../../../../../ui-atoms/Custom-TextField";
import { addNewUser, getUsersData, getUsersDataById } from '../../../../../ui-redux/screen-configuration/actions';

const styles = () => ({
    buttonCard: {
        justifyContent: "center",
    },
    buttonStyle: {
        padding: "6px 10px",
        margin: "20px",
        borderRadius: "10px"
    }
});


const AddUser = props => {
    const { classes, addNewUserdata, match, getUsersDataByIdDispatch, usersDetails, newUser } = props
    console.log({ props });
    console.log("users edit details ", usersDetails);
    console.log("new Users Details", newUser);
    const [formerror, setformerror] = useState({ name: "", username: "", email: "", address: "", phone: "", website: "", company: "" })
    const [formState, setFormState] = useState({ name: "", username: "", email: "", address: "", phone: "", website: "", company: "" })
    useEffect(() => {
        console.log({ match });
        if (match.params && match.params.id) {
            console.log("params:", match.params.id);
            getUsersDataByIdDispatch(match.params.id)
        }
    }, [match])

    useEffect(() => {
        if (usersDetails?.data && usersDetails?.isSuccess) {
            setFormState({
                name:usersDetails?.data?.name,
                phone:usersDetails?.data?.phone,
                username:usersDetails?.data?.username,
                website:usersDetails?.data?.website,
                email:usersDetails?.data?.email,
                address:usersDetails?.data?.address?.city,
                company:usersDetails?.data?.company?.name,
            })
        }
    }, [usersDetails])

    const validateFeild = () => {
        const { name = "", username = "", email = "", address = "", phone = "", website = "", company = "" } = formState;
        let emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let formIsValid = true;
        let errors = {};

        if (name === "" && !name) {
            formIsValid = false;
            errors["name"] = "* Please select a  Name";
        }
        if (username === "" && !username) {
            formIsValid = false;
            errors["username"] = "* Please select a Name";
        }

        if (email === "" && !email) {
            formIsValid = false;
            errors["email"] = "*Please add Student's E-mail ID";
        }

        if (email && !emailRegex.test(email)) {
            formIsValid = false;
            errors["email"] = "* Please enter valid student email address";
        }

        if (address === "" && !address) {
            formIsValid = false;
            errors["address"] = "*Please add Student's Date of Birth";
        }

        if (phone === "" && !phone) {
            formIsValid = false;
            errors["phone"] = "*Please add Student's Phone Number";
        }

        if (website === "" && !website) {
            formIsValid = false;
            errors["website"] = "*Please add website ";
        }

        if (company === "" && !company) {
            formIsValid = false;
            errors["company"] = "*Please add Student's Class";
        }
        setformerror({ ...errors });
        return formIsValid;
    };

    const handleChange = (label, value) => {
        setFormState({ ...formState, [label]: value });
    };

    const addUser = () => {
        debugger
        if (validateFeild()) {
            addNewUserdata(formState);
            console.log("newUSer",newUser);
            debugger
            setFormState({
                name: "",
                username: "",
                email: "",
                address: "",
                phone: "",
                website: "",
                company: ""
            })
            props.history.push("/user-home/users");
        }
        console.log("form state ", formState);
        console.log(addNewUserdata);
    }
    const UpdateUser = () => {
        // if (validateFeild()) {
        //     addNewUserdata(formState);
        //     setFormState({
        //         name: "",
        //         username: "",
        //         email: "",
        //         address: "",
        //         phone: "",
        //         website: "",
        //         company: ""
        //     })
        //     props.history.push("/user-home/users");
        // }
    }

    const cancelUser = () => {
        const { history } = props;
        history.push("/user-home/users");
    }

    return (

        <Grid container>
            <Grid item md={12} xs={12}>
                <Card style={{ background: "gainsboro", width: "80%", margin: "100px" }}>
                    <CardContent >
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant="h5" style={{ marginBottom: "30px" }}>
                                    ADD USER
                                </Typography>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12} style={{ margin: "30px" }}>
                                <Grid container spacing={4} >
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            placeholder="name"
                                            id="name"
                                            value={formState.name}
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            type="text"
                                            error={formerror.name}
                                            helperText={formerror.name ? formerror.name : ""}
                                        />
                                    </Grid>
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            id="username"
                                            placeholder="UserName"
                                            value={formState.username}
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            type="text"
                                            error={formerror.username}
                                            helperText={formerror.username ? formerror.username : ""}
                                        />
                                    </Grid>
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            id="email"
                                            placeholder="email"
                                            value={formState.email}
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            type="email"
                                            error={formerror.email}
                                            helperText={formerror.email ? formerror.email : ""}
                                        />
                                    </Grid>
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            id="address"
                                            placeholder="address"
                                            value={formState.address}
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            error={formerror.address}
                                            helperText={formerror.address ? formerror.address : ""}
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            id="phone"
                                            placeholder="phone"
                                            value={formState.phone}
                                            type="number"
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            error={formerror.phone}
                                            helperText={formerror.phone ? formerror.phone : ""}
                                            max={10}
                                            min={10}
                                        />
                                    </Grid>
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            placeholder="website"
                                            value={formState.website}
                                            id="website"
                                            type="text"
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            error={formerror.website}
                                            helperText={formerror.website ? formerror.website : ""}
                                        />
                                    </Grid>
                                    <Grid md={3} xs={12} sm={12}>
                                        <CustomTextField
                                            style={{ marginTop: "20px" }}
                                            placeholder="Company"
                                            value={formState.company}
                                            id="company"
                                            handleChange={(e) => handleChange(e.target.id, e.target.value)}
                                            type="text"
                                            error={formerror.company}
                                            helperText={formerror.company ? formerror.company : ""}
                                        />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                        <CardActions>
                            <Grid container md={12} xs={12} className={classes.buttonCard}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    margin="10px"
                                    className={classes.buttonStyle}
                                    onClick={() => addUser()}
                                >
                                    {match.params ? "ADD" : "UADD"}
                                </Button>
                                <Button
                                    className={classes.buttonStyle}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    margin="10px"
                                    onClick={() => cancelUser()}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </CardActions>


                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    );
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { newUser, usersDetails = {} } = preparedFinalObject;
    return { usersDetails: { ...usersDetails }, newUser: {...newUser}};
}

const mapDispatchToProps = dispatch => {
    return {
        addNewUserdata: (data) => {
            dispatch(addNewUser(data))
        },
        getUsersDataByIdDispatch: (id) => {
            dispatch(getUsersDataById(id))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(AddUser)));