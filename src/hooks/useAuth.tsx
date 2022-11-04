import React from 'react'
import { useContext } from "react"
import { AuthContext } from '../contexts/Authen'
function useAuth() {
    return useContext(AuthContext);
}

export default useAuth