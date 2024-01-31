import { createContext, useContext } from "react";

export const UserContext = createContext({
    isLoggedIn: 'false',
    user: {},
    addUser: (user) => { },
    setLogIn: () => { },
    setLogOut: () => { }
});

export const UserProvider = UserContext.Provider;

export default function useUser() {
    return useContext(UserContext);
};