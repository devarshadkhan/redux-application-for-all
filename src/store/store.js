import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./slices/CounterSlice"
import persistedReducer from "./slices/CounterSlice"
import { persistStore } from 'redux-persist'; // Import persistStore

 const store = configureStore({
    reducer:persistedReducer,
})
const persistor = persistStore(store);
export { store, persistor };
// export default store