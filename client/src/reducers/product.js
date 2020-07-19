import {
	CREATE_PRODUCT_START,
	CREATE_PRODUCT_SUCCESS,
	CREATE_PRODUCT_FAILURE,
    RETRIEVE_PRODUCTS_START,
    RETRIEVE_PRODUCTS_SUCCESS,
    RETRIEVE_PRODUCTS_FAILURE,
    FETCH_BOUGHT_PRODUCTS_START,
    FETCH_BOUGHT_PRODUCTS_SUCCESS,
    FETCH_BOUGHT_PRODUCTS_FAILURE,
    EDIT_PRODUCT_START,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    GET_SINGLE_PRODUCT_START,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAILURE
} from "../actions/actionTypes";

let initialProductState = {
	allProducts: [],
	inProgress: null,
    error: null,
    boughtProducts:[],
    singleProduct:null
};
export default function product(state = initialProductState, action) {
	switch (action.type) {
		case CREATE_PRODUCT_START:
			return {
				...state,
				inProgress: true,
				error: false
			};
		case CREATE_PRODUCT_SUCCESS:
			return {
				...state,
				inProgress: false,
				error: false,
				allProducts: [action.product, ...state.allProducts]
			};
		case CREATE_PRODUCT_FAILURE:
			return {
				...state,
				inProgress: false,
				error: action.error
            };
        case RETRIEVE_PRODUCTS_START:
            return{
                ...state,
                inProgress:true,
                error:false
            }
        case RETRIEVE_PRODUCTS_SUCCESS:
            return{
                ...state,
                inProgress:false,
                error:false,
                allProducts:[...action.products]
            }
        case RETRIEVE_PRODUCTS_FAILURE:
            return{
                ...state,
                inProgress:false,
                error:action.error,
            }
        case FETCH_BOUGHT_PRODUCTS_START:
            return{
                ...state,
                inProgress:true
            }
        case FETCH_BOUGHT_PRODUCTS_SUCCESS:
            return{
                ...state,
                inProgress:false,
                error:false,
                boughtProducts:[...action.products]
            }
        case FETCH_BOUGHT_PRODUCTS_FAILURE:
            return{
                ...state,
                error:action.error,
                inProgress:false,
            }
        case EDIT_PRODUCT_START:
            return{
                ...state,
                inProgress:true
            }
        case EDIT_PRODUCT_SUCCESS:
            let newProducts=state.allProducts.filter(function(product)
            {
                return product._id===action.product._id
            })
            return{
                ...state,
                inProgress:false,
                error:false,
                allProducts:newProducts
            }
        case EDIT_PRODUCT_FAILURE:
            return{
                ...state,
                inProgress:false,
                error:action.error
            }
        case DELETE_PRODUCT_START:
            return{
                ...state,
                inProgress:true,
                error:false
            }
        case DELETE_PRODUCT_SUCCESS:
            let new_Products=state.allProducts.filter(function(product)
            {
                return product._id!==action.productId
            })
            return{
                ...state,
                inProgress:false,
                error:false,
                allProducts:new_Products
            }
        case DELETE_PRODUCT_FAILURE:
            return{
                ...state,
                inProgress:false,
                error:action.error
            }
        case GET_SINGLE_PRODUCT_START:
            return{
                ...state,
                inProgress:true,
                error:false
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state,
                singleProduct:action.product,
                inProgress:false,
                error:false
            }
        case GET_SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                inProgress:false,
                error:action.error
            }
		default:
			return state;
	}
}
