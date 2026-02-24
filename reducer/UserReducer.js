import React from 'react'
import { ins,del } from '../action/UserAction'
const initialState = {
    data:[],
    counter:0
}
const UserReducer = (state=initialState,action)=>{
        switch(action.type){
            case ins:return {
                data:[
                    ...state.data,
                    action.payload
                ]
            }
            case del:return {
                data:state.data.filter((i,index)=>index != action.payload)
            }
            default: return state
        }
}

export default UserReducer
