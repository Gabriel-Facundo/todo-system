import { AuthContext } from 'contexts';
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { NOT_AUTHORIZED } from 'routes';

const Todos = () => {
    const {token} = useContext(AuthContext);
    
    return (
        <>
            {!token && <Redirect to={NOT_AUTHORIZED} />}
            <div>Todos!</div>
        </>
    )
}

export default Todos