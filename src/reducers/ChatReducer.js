export const ChatReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_CONVERSATION':{
            return {...state, conversationList: action.payload}
        }

        case 'UPDATE_ID_CONVERSATION':{
            return {...state, idConversation: action.payload._id, nameConversation: action.payload.nameConversation}
        }

        case 'UPDATE_LAST_MESSAGE_CONVERSATION':{
            const arr = [...state.conversationList]
            const index = arr.findIndex(item => item.idUser === action.payload.idUser)
            arr[index] = action.payload
            
            return {...state, conversationList: arr};
        }

        case 'SHOW_CONVERSATION':{
            const arr = [...state.conversationList]
            const index = arr.findIndex(item => item.idUser === action.payload.idUser)
            console.log('index',index)
            const newConversation = action.payload
            if(index < 0){
                arr.push(newConversation)
            }

            return {...state, conversationList: arr};
        }

        case 'SEEN_CONVERSATION':{
            const arr = [...state.conversationList]
            const index = arr.findIndex(item => item.idUser === action.payload.idUser)
            console.log('index',index)
            const newConversation = action.payload
            if(index < 0){
                arr.push(newConversation)
            }

            return {...state, conversationList: arr};
        }
    
        default: return state
    }
}

