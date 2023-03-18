export const UserForm = ({userName, handleUserNameChange}) => {
    return (
    <div>
        <label htmlFor="username">New User:</label>
        <input
            id="username"
            name="username"
            type="text"
            value={userName}
            onChange={handleUserNameChange}
        />
        <p>Searching for a new user name: {userName}</p>
    </div>
    )
}