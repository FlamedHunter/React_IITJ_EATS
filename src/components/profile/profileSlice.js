import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'1',
    name:'Arman Garg',
    email:'garg.25@iitj.ac.in',
    img:'https://drive.google.com/u/0/uc?id=1AX2XhkhJ6ine9H0vDBrox7zRamLh-P_s&export=download',
    addresses:['Sangrur','Sangrur Punjab'],
    number:'0987654321',
}

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        updatenumber:(state,action)=>{
            state.number = action.payload;
        },
    }
})

export const {updatenumber} = profileSlice.actions

export default profileSlice.reducer