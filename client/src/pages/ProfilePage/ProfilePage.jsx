import './ProfilePage.css'
import { useContext, useReducer } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    console.log(user)

    return (
        <>
            <h1>{user.username}</h1 >
            <h1>{user.email}</h1 >
            <img src={user.imageUrl}></img>

        </>
    )
}

export default ProfilePage