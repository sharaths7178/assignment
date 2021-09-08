import { Grid, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { connect } from "react-redux";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withRouter } from "react-router";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from '@material-ui/icons/Edit';
import { getUsersData } from "../../../../ui-redux/screen-configuration/actions";

const styles = {
    inputField: {
        padding: 10.5
    }
};


const columns = [
    {
        Header: 'Serial',
        accessor: 'id'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'username',
        accessor: 'username'
    },
    {
        Header: 'email',
        accessor: 'email'
    },
    {
        Header: 'address',
        accessor: 'address'
    },
    {
        Header: 'phone',
        accessor: 'phone'
    },
    {
        Header: 'website',
        accessor: 'website'
    },
    {
        Header: 'company',
        accessor: 'company'
    },
    {
        Header: 'Actions',
        accessor: 'action'
    }]

const UsersTable = props => {
    const { users, deleteId, ResponseData, getUsersDataDispatch } = props;
    //console.log("ResponseData", ResponseData);
    //const {error, setError } = useState(false);

    //console.log("delete Id", deleteId);
    const [rowsData, setRows] = useState([]);
    console.log(" Users ", users);
    useEffect(() => {
        getUsersDataDispatch();
    }, []);

    useEffect(() => {
        if (users.data && users.isSuccess) {
            prepareData(users.data);
        }
    }, [users]);

    const prepareData = (data) => {
        let rows = [];
        data.forEach((item) => {
            rows.push({
                id: item?.id,
                name: item?.name,
                username: item?.username,
                address: item?.address?.city + item?.address?.street + item?.address?.suite,
                email: item?.email,
                phone: item?.phone,
                website: item?.website,
                company: item?.company?.name,
                action: (
                    <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <span
                            className="material-icons"
                            style={{ cursor: "pointer" }}
                            onClick={e => editUserdata(item)}
                        >
                            <EditIcon />
                        </span>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={e => deleteUser(item.id)}
                        >
                            <DeleteForeverIcon />
                        </span>
                    </span>
                )
            })
            console.log("items", item)
        });
        setRows(rows);
    };


    const addUserHandler = () => {
        const { history } = props;
        history.push("/user-home/addUser")
    }

    const editUserdata = (item) => {
        props.history.push(`/user-home/editUser/${item.id}`);
        console.log("item ",item);
    }

    const deleteUser = () => {

    }
    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="h5">users Table </Typography>
                <IconButton onClick={() => addUserHandler()}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Grid>
            <Grid item md={12} xs={12} sm={12} style={{ marginTop: "2%" }}>
                <ReactTable
                    data={rowsData}
                    columns={columns}
                    defaultPageSize={10}
                    pageSizeOptions={[2, 4, 6]}
                    style={{ textAlign: "center" }}
                ></ReactTable>
            </Grid>
        </>

    );
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { users = {}, deleteId = [], ResponseData = [] } = preparedFinalObject;
    return { users: { ...users }, deleteId: [users], ResponseData: [...ResponseData] };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsersDataDispatch: () => {
            dispatch(getUsersData())
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UsersTable));