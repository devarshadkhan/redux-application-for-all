import {createSlice , nanoid} from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage

const persistConfig = {
  key: 'root', // Key under which the state will be stored in localStorage
  storage
}
const initialState = {
    count: 0
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCount:(state,action) =>{
            state.count += 1
        },
        decCount :(state,action)=>{
            if(state.count > 0){
                state.count -= 1
            }
        },
        clrCount:(state,action)=>{
            state.count = 0
        }
    }
})

export const {addCount,decCount,clrCount} = CounterSlice.actions
const persistedReducer = persistReducer(persistConfig,CounterSlice.reducer);
export default persistedReducer
// export default CounterSlice.reducer