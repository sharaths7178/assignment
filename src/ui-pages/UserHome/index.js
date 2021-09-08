import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';
import UserRoutes from '../../ui-routes/UserHomeRoute';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    buttonGrid: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },
    button1: {
        color: "#fff",
        border: "2px solid",
        borderRadius: "20px",
        padding: "5px",
        cursor: "pointer",
        margin: "0px 20px"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    contentMb: {
        flexGrow: 1,
        padding: theme.spacing(1),
        marginTop: "60px"
    },
}));

function UserHome(props) {
    const classes = useStyles();


    const historyChange = (endPoint) => {
        const { history } = props
        history.push(`/user-home/${endPoint}`);
    }

    const logouthistoryChange = () =>{
        props.history.push("/");
    }
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Grid>
                        <Typography variant="h2"> Dashboard</Typography>
                    </Grid>
                    <Grid className={classes.buttonGrid}>
                        <Button
                            className={classes.button1}
                            onClick={() => historyChange("users")}
                        >
                            Users
                        </Button>
                        <Button
                            className={classes.button1}
                            onClick={() => historyChange("album")}
                        >
                            Album
                        </Button>
                        <Button
                            className={classes.button1}
                            onClick={() => logouthistoryChange()}
                            color="inherit">
                            Logout
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main className={classes.contentMb}>
                <UserRoutes />
            </main>
        </div>
    );
}

export default withRouter(UserHome);