import { useRef, useEffect } from "react"

export const UserForm = ({userName, handleUserNameChange, isFocused}) => {
    const inputRef = useRef();

    // use an if statement to decide whether the focus of inputRef is focused
    useEffect(() => {
        if(isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])
    
    return (
    <div>
        <label htmlFor="username">New User:</label>
        <input
            id="username"
            name="username"
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            ref={inputRef}
        />
        <p>Searching for a new user name: {userName}</p>
    </div>
    )
}