import React ,{useContext} from "react";
import User from "./user";
import Spinner from './../spinner';
import GithubContext from '../../context/github/githubContext';

const Users= ()=>
{
    const githubContext  = useContext(GithubContext);
    const {users,loading} = githubContext;
    if(loading)
    {
        return <Spinner/>
    }
    else
    {
        return (
            <div style={userStyle}>
                {
                    users.map(user=>
                        (<User key={user.id} user={user}/>)
                    )
                }
            </div>
        )
    }
    
        
}

const userStyle = 
{
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'

};


export default Users