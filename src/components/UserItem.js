export const UserItem = (props) => {
    return (
        props.userList.map(user => (
            <ul key= {user.id}>
                <li>Name: {user.name}</li>
                <li>Location: {user.location}</li>
                <li>Followers: {user.followers}</li>
                <li>Following: {user.following}</li>
            </ul>
        ))
    )
}