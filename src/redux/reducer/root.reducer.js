import { combineReducers } from "redux"
import recipeReducer from "./recipe.reducer"
import userReducer from "./user.reducer"

const rootReducer = combineReducers({
    user: userReducer,
    recipe: recipeReducer
})

export default rootReducer