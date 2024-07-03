import {Fetch_Users_Request,Set_Users_Details,Error_Occured,Set_Active_User } from '../Actions/UserActions';

const intialstate= {
    isLoading: false,
    Users: [],
    error:null
}
const UserReducer = (state = intialstate, action) => {
    switch (action.type)
    {
        case Fetch_Users_Request : 
        return {
            ...state,
            isLoading:true
        }
        case Set_Users_Details : 
        return {
            isLoading:false,
            Users:action.payload,
            error:null

        }
        case Set_Active_User : 
        return {
            ...state,
            activeUser:action.payload,
        }
        case Error_Occured : 
        return {
            isLoading:false,
            Users:[],
            error:action.payload
        }

        default : return state;
    }

}


export default UserReducer;