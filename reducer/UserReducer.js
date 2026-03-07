import React from 'react'
import { ins,del, upd } from '../action/UserAction'
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
            case upd:return {
                data: state.data.map((i,index)=>{
                    if(index==action.payload.id){
                        i = action.payload.data
                    }
                    return i
                })
            }
            default: return state
        }
}

export default UserReducer
