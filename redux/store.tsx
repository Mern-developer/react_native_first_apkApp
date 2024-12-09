import { configureStore  } from "@reduxjs/toolkit";
import  meditationReducer  from "./slice";



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store =configureStore({
  reducer:{
    setMeditationDuration: meditationReducer 
  }  
})

