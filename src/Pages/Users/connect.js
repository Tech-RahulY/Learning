import { connect } from "react-redux";
import { fetchUsers,setActiveUser } from "../../Redux/Actions/UserActions";
import Users from "./component";

const mapStateToProps = (state) => {
 return {
    Users  : state.Users,
    activeUser : state.Users.activeUser,
 }
};

const mapDispatchToProps = (dispatch) => {
    return {
       getUsers : (id) =>  dispatch(fetchUsers(id)),
       setActiveUser : (details) =>  dispatch(setActiveUser(details)),
    }
   };

export default connect(mapStateToProps,mapDispatchToProps)(Users);