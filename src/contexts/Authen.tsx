import { stat } from 'fs';
import React, { JSXElementConstructor, useState } from 'react'
import { useReducer, useEffect } from 'react';
const INITIALIZE = "INITIALIZE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
interface stateResult {
    isAuthenticated: boolean,
    user: string,
    login: any,
    logout: any
}
let initialState: stateResult = {
    isAuthenticated: false,
    user: '',
    login: null,
    logout: null

};
interface Action {
    type: string;
    payload?: {
        user: string,
    };
}
const getInitialize = () => {
    let prevUser = window.localStorage.getItem("username");
    if (prevUser) {
        initialState = { ...initialState, isAuthenticated: true, user: prevUser }
    }
    return initialState;
}
const AuthContext = React.createContext(initialState);
function AuthenProvider({ children }: any) {

    const [state, setState] = useState(getInitialize);
    const login = async (user: string, callback: Function) => {
        if (user) {
            setState({ ...state, isAuthenticated: true, user });
            window.localStorage.setItem("username", user);
            callback();

        }
    }
    const logout = async (callback: Function) => {
        setState({ ...state, isAuthenticated: false, user: '' });
        window.localStorage.removeItem("username");
        callback();
    }
    return (
        <AuthContext.Provider value={{ ...state, login, logout }} >{children}</AuthContext.Provider>

    )
}

export { AuthContext, AuthenProvider }