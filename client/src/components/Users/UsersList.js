import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    let content = ''  ;
    if(props.users.length > 0 ) {
        content = 
            (<Card className={styles['users-list']}>
                <ul>
                    {props.users.map( user => (
                        <li key={user.id}>
                            {user.name} ( {user.age} years old )
                        </li>
                    ))}
                </ul>
            </Card>);
    }
    return(
       <>
         {content}
       </>
    );
}

export default UsersList;