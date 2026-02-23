import{ createSlice } from "@reduxjs/toolkit";
 const bookmarkSlice= createSlice({
    name:'bookmarks',
    initialState:["intro to basics", "react redux"],
    reducers:{
        addbookmark:(state,action)=>{
            state.push(action.payload);
        },
        removebookmark:(state,action)=>{
            return state.filter((lesson) => lesson !== action.payload);
        }
    }
})
export const {addbookmark,  removebookmark}= bookmarkSlice.actions;
export default bookmarkSlice.reducer;