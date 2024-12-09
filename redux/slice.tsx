import { createSlice  } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface meditationState{
    setDuration: number 
    duration: number
}

const initialState: meditationState ={
    setDuration: 0,
    duration:0
}

export const meditationSlice = createSlice({
    name: 'meditationDuration',
    initialState,
    reducers:{
        setDuration: (state, action: PayloadAction<number> )=>{
             state.duration = action.payload
        }
    
    }
})

export const {setDuration} = meditationSlice.actions;

export default meditationSlice.reducer;