import React, {useReducer} from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER, SET_ALERT} from "../types";

const GithubState = props =>
{
  const initialState =
      {
          user:{},
          users:[],
          loading:false,
          repos:[],
          alert:null
      };

  const [state,dispatch] = useReducer(GithubReducer,initialState);

    const searchUsers = async text=>
    {
        if (text !== '')
        {
            setLoading();
            const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);

            dispatch({
                type: SEARCH_USERS,
                payload: res.data.items
            });

        }
        else
        {
            setAlert({});
            setTimeout(() => setAlert(null), 4000);
        }

    };

    const clearUsers = ()=>
    {
        dispatch({
            type:CLEAR_USERS
        });
    };
    const getUser = async (username)=>
    {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
       dispatch({
           type:GET_USER,
           payload:res.data
       });
    };

    const getUserRepos = async (username)=>
    {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
        dispatch({
           type:GET_REPOS,
           payload:res.data
        });
    };

    const setLoading = () => dispatch({type:SET_LOADING});

    const setAlert = ()=>dispatch({
        type:SET_ALERT,
        payload: {msg:'please input something',type:'danger'}
    });

  return <GithubContext.Provider
      value = {
          {
              users:state.users,
              user:state.user,
              repos:state.repos,
              loading:state.loading,
              alert:state.alert,
              searchUsers,
              clearUsers,
              getUser,
              getUserRepos

          }
      }
  >
      {props.children}

    </GithubContext.Provider>
};

export default GithubState;