import {createStore} from "redux";
import favorites from "./reducer";



const store = createStore(favorites );
export default store;