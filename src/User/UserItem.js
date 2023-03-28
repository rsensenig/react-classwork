export const UserItem = ({users, handleUserInformation}) => {
    return (
        users.map(user => (
            <ul key= {user.id}>
                <li>Name: {user.name}</li>
                <li>Location: {user.location}</li>
                <li>Followers: {user.followers}</li>
                <li>Following: {user.following}</li>
                <li>
                    <button
                        type="button"
                        id="btnEditUser"
                        onClick={handleUserInformation}
                    >
                    Edit User
                    </button>
                </li>
            </ul>
        ))
    )
}