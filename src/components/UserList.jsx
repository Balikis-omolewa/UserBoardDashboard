import React from 'react';
import { Table } from 'react-bootstrap';

const UserList = ({ users }) => {
    return (
        <div className='mt-5'>
            <Table className='user-table'>
                <thead>
                    <tr className='size' style={{ textAlign: "left"}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Company</th>
                        <th>City</th>
                        <th>Portfolio</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr className='size' key={user.id}>
                            <td>{user.id || 'N/A'}</td>
                            <td>{user.name || 'N/A'}</td>
                            <td>{user.email || 'N/A'}</td>
                            <td>{user.phone || 'N/A'}</td>
                            <td>{user.company?.name || 'N/A'}</td>
                            <td>{user.address?.city || 'N/A'}</td>
                            <td>
                                <a className={`status-badge ${user.status?.toLowerCase() || 'active'}`} 
                                   href={`http://${user.website}`} 
                                   target='_blank' 
                                   rel='noopener noreferrer'>
                                    Visit Portfolio
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UserList;
