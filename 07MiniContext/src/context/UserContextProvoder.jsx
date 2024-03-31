import React from 'react'
import UserContext from './UserContext'

const UserContextProvoder=({children})=> {
    const [user,setUser] = React.useState(null)
    return (
        <UserContext.Provoder value={{user, setUser}}>
            {children}
        </UserContext.Provoder>
    )
}

export default UserContextProvoder
