import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom' 

const userItem = ({user: {login,avatar_url,html_url}})=> 
{  
    return (
        <div className="card text-center">
            <img
            alt=''
            className="round-img"
            src={avatar_url}
            style={{width:'60px'}}
            />
            <p>{login}</p>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm'>More</Link>
        </div>
    )
    
};

userItem.propTypes = 
{
    user: PropTypes.object.isRequired,
}



export default userItem
