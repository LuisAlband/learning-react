export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

//Update del LocalStorage para guardar el cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {

    const { type: actionType, playload: actionPlayload } = action
    //type => Accion que tiene que hacer  && playload => Objeto necesario para la accion

    switch(actionType){
        case 'ADD_TO_CART':{
            //Check if the product is already in the cart
            const { id } = actionPlayload
            const productInCartIndex = state.findIndex(item => item.id == id)

            //If is
            if(productInCartIndex >=0){
                /*Usando struredClone 
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1*/

                //Usando Map
                const newState = state.map(item => {
                    if (item.id == id){
                        return{
                            ...item,
                            quantity:item.quantity + 1
                        }
                    }
                    return item
                })

                updateLocalStorage(newState)
                return newState
            }

            
            //If no is
            const newState = [
                ...state,
                {
                    ...actionPlayload, //product
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState

        }
        case 'REMOVE_FROM_CART': {
            const { id } = actionPlayload
            const newState =  state.filter(item => item.id != id)
            updateLocalStorage(state)
            return newState

        }
        case 'CLEAR_CART': {
            updateLocalStorage([])
            return ([])
        }
    }
    return state
}