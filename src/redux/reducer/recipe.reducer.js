const initialState = {
    recipe: [],
    myrecipe: [],
    isLoading: false,
  };

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PENDING":
            return {
                ...state, 
                isLoading: true
            }
        case "GET_ALL_SUCCESS":
            return {
                ...state, 
                recipe: action.payload,
                isLoading: false
            }
        case "GET_ALL_ERROR":
            return {
                ...state, 
                isLoading: false
            }

        case "GET_MY_RECIPE_PENDING":
            return {
                ...state, 
                isLoading: true
            }
        case "GET_MY_RECIPE_SUCCESS":
            return {
                ...state, 
                myrecipe: action.payload,
                isLoading: false
            }
        case "GET_MY_RECIPE_ERROR":
            return {
                ...state, 
                isLoading: false
            }

        case "ADD_RECIPE_PENDING":
            return {
                ...state, 
                isLoading: true
            }
        case "ADD_RECIPE_SUCCESS":
            return {
                ...state, 
                isLoading: false
            }
        case "ADD_RECIPE_ERROR":
            return {
                ...state, 
                isLoading: false
            }

        case "UPDATE_RECIPE_PENDING":
            return {
                ...state, 
                isLoading: true
            }
        case "UPDATE_RECIPE_SUCCESS":
            return {
                ...state, 
                isLoading: false
            }
        case "UPDATE_RECIPE_ERROR":
            return {
                ...state, 
                isLoading: false
            }

        case "DELETE_RECIPE_PENDING":
            return {
                ...state, 
                isLoading: true
            }
        case "DELETE_RECIPE_SUCCESS":
            return {
                ...state, 
                isLoading: false
            }
        case "DELETE_RECIPE_ERROR":
            return {
                ...state, 
                isLoading: false
            }

        default:
            return state;
    }
}

export default recipeReducer;
