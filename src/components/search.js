import React, { useState, useContext } from 'react'
import GithubContext from "../context/github/githubContext";

const Search  = ()=> {
    const githubContext = useContext(GithubContext);

    const [text,setText] = useState('');

    const onSubmit = (e)=>
    {
        e.preventDefault();
        githubContext.searchUsers(text);
        setText('');
    };
    const onChange = (e) =>
    {
        setText(e.target.value);
    };

    return (
            <div>
            <form onSubmit={onSubmit}>
                 <input type="text" onChange={onChange} name="text" placeholder="Search github users...."/>
                 <input type="submit" value="search" className="btn btn-dark btn-block"/>

                 { githubContext.users.length > 0 &&
                <button className="btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
                 }
            </form>
            </div>
        )

}

export default Search;

