import React from 'react'
import { AuthContext } from '../context/user.context'

export const useAuth = () => React.useContext(AuthContext)
