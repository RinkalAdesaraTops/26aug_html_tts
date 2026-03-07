import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: []
}
const EmpReducer = createSlice({
    name:"Emp",
    initialState,
    reducers: {
        insData: (state, action) => {
            state.data = [
                ...state.data,
                action.payload
            ]
        },
        delData: (state, action) => {
            state.data = state.data.filter((i, index) => index != action.payload)
        },
        updData: (state, action) => {
            state.data = state.data.map((i, index) => {
                if (index == action.payload.id) {
                    i = action.payload.data
                }
                return i
            })
        }
    }
})
export const {insData,delData,updData} = EmpReducer.actions
export default EmpReducer.reducer
