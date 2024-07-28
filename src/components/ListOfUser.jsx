import axios from "axios";
import { useState, useEffect } from "react";
import UserList from './UserList';

const ListOfUser = () => {
    const [usersRecords, setUsersRecords] = useState([]);

    const fetchUsers = async () => {
        const options = { method: "GET", url: "https://jsonplaceholder.typicode.com/users" };

        try {
            const response = await axios(options);
            setUsersRecords(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(usersRecords);

    return (
        <div>
            <UserList users={usersRecords} />
        </div>
    );
}

export default ListOfUser;
