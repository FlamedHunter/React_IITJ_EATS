import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'1',
    name:'Arman Garg',
    email:'garg.25@iitj.ac.in',
    img:'https://drive.google.com/u/0/uc?id=1AX2XhkhJ6ine9H0vDBrox7zRamLh-P_s&export=download',
    addresses:['Kishan Bagh colony street No.1 Nabha Gate Sangrur','Sangrur Punjab'],
    number:'0987654321',
}

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        updatenumber:(state,action)=>{
            state.number = action.payload;
        },
        deleteaddress:(state,action)=>{
            const index = action.payload
            state.addresses.splice(index,1)
        },
        editaddress:(state,action)=>{
            const updatedaddress = action.payload.updatedaddress
            const index = action.payload.index
            state.addresses[index] = updatedaddress
        },
        addnewaddress:(state,action)=>{
            const newaddress = action.payload
            state.addresses.push(newaddress)
        }
    }
})

export const {updatenumber,deleteaddress,addnewaddress,updatedaddress} = profileSlice.actions

export default profileSlice.reducer