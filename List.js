import React from 'react';
import './form.css';

const List = (props) => {
    const names = props.nameList;
    const emails = props.emailList;

    const renderNames = names.map(student => {
        return(
            <p>{student}</p>
        )

    })
    const renderEmail = emails.map(email => {
        return(
            <p>{email}</p>
        )
    })
    return (
        <div>
            <table id='table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{renderNames}</td>
                        <td>{renderEmail}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default List ;