import Loadable from 'react-loadable';
import Loading from '../ui-moluecules/Loading';
import React from 'react';
import { Route } from 'react-router';

const UsersTable = Loadable({
    loader: () =>
        import("../ui-pages/UserHome/Components/UsersTable"),
    loading: Loading
});

const addUser = Loadable({
    loader: () =>
        import("../ui-pages/UserHome/Components/UsersTable/AddUser"),
    loading: Loading
});

const Album = Loadable({
    loader: () =>
        import("../ui-pages/UserHome/Components/Album"),
    loading: Loading
});


const UserRoutes = () => {
    return (
        <div>
            <Route exact path="/user-home/users" component={UsersTable} />
            <Route exact path="/user-home/addUser" component={addUser} />
            <Route exact path="/user-home/editUser/:id" component={addUser} />
            <Route exact path= "/user-home/deleteUser/:id" component= {UsersTable}/>
            <Route exact path="/user-home/album" component={Album} />
        </div>
    );
}

export default UserRoutes;