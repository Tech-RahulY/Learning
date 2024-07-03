import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserList from "./Components/UserList";
import UserFlyout from "./Components/UserFlyout"

export const Users = ({getUsers,Users,activeUser,setActiveUser}) => {
    const [searchParam,setSearchParam]= useSearchParams();
    const userId = searchParam.get('id') || 0;

    useEffect(() => {
        getUsers(userId);
    },[]);

 const showflyout = (id) => {
    const details = Users.Users.find(u => {
        return u.id == id
    });
    setActiveUser(details);
    setSearchParam( {
        id:id,
    })
 }

    return (
        <div className="container">
            <div className="row">
                <h1>Users</h1>
                {
                    Users.isLoading  ? <p>...Loading</p>
                    : Users.Error ? <p>Users.Error</p>
                    : Users.Users.map( u => {
                        return( 
                        <div key={u.id} className="col-md-4">
                            <UserList details={u} showflyout={showflyout}></UserList>
                        </div>  
                        )    
                    })
                }
                { userId.length > 0 ?    
                          <UserFlyout details={activeUser} ></UserFlyout> 
                : null}
            </div>
        </div>

    );
};


export default Users;