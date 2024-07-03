
export const UserList = ({details,showflyout}) => {
    return (
        <div key={details.id} className="card">
            <div className="card-body">
                <h5 className="card-title">Name : {details.username}</h5>
                <p className="card-text">Emails : {details.email}</p>
                <p className="card-text">Phone :   {details.phone}</p>
                <p className="card-text">Website : {details.website}</p>
                <a className="btn btn-primary" onClick={() => showflyout(details.id)} >Show Full details</a>
            </div>
        </div>
    );
};


export default UserList;