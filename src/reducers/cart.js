//product id and quantity

if
(action.type=== 'ADD_TO_CART')

export default (state=[],action={})=>{
    if (action.type=== 'ADD_TO_CART') {
        return [...state,state.product]
    } else {
        return state
    }
}
