import React from 'react'
import { createStore } from 'redux'
import UserReducer from '../reducer/UserReducer'

const UserStore =createStore(UserReducer)

export default UserStore
