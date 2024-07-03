import axios from 'axios';

export const Fetch_Users_Request = "Fetch_Users_Request";
export const Set_Users_Details = "Set_Users_Details ";
export const Set_Active_User= "Set_Active_User ";
export const Error_Occured = "Error_Occured ";

export const fetchUsersRequest = () =>
    {
        return {
            type :Fetch_Users_Request
        }
    };

export const setUsersDetails = (details) =>
        {
            return {
                type :Set_Users_Details,
                payload :details
            }
        };

export const setActiveUser = (details) =>
            {
                return {
                    type :Set_Active_User,
                    payload :details
                }
            };        

export const errorOccured = (msg) =>
            {
                return {
                    type :Error_Occured,
                    payload :msg
                }
            };

export const fetchUsers = (id = 0) =>
    {
        return (dispatch, getState) =>
            {
                dispatch(fetchUsersRequest());
                axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response.data)
            dispatch(setUsersDetails(response.data));
            if (id > 0)
                {
                    const data = getState().Users;
                    console.log("state" + data);
                    const details = data.Users.find(u => {
                        return u.id == id
                    });
                    dispatch(setActiveUser(details));
                }
        })
        .catch(error => {
            console.log(error.message);
            dispatch(errorOccured(error.message));
        });
            }
    }