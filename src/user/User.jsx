import React from 'react';
import { useParams } from 'react-router-dom';


function User(props) {
    
    const {userid} = useParams()
    return (
        <div className='bg-gray-600 text-4xl'>
            This is user :{userid}
        </div>
    );
}

export default User;