// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//  const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return (blogPost.id === action.payload.id) ? action.payload : blogPost;

        // refactored with ternary expression immediately above
        // if (blogPost.id === action.payload.id) {
        //   return action.payload;
        // } else {
        //     return blogPost;        
        // }
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [...state,
      {
        id: Math.floor(Math.random() * 9999999),
        title: action.payload.title,
        content: action.payload.content,
      }
     ];
    default:
      return state;
  }
};

// const getBlogPosts = dispatch => {
//   return (title, content, callback) => {
//     const response = await jsonServer.get('/blogposts');
//     dispatch({ type: 'get_blogposts', payload: response.data });
//   };
// };

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
  // return async (title, content, callback) => {
  //   await jsonServer.post('/blogposts', {title: title, content: content})
   // dispatch({ type: 'add_blogpost', payload: { title, content } });
  if (callback) callback();
  };
};

const deleteBlogPost = dispatch => {
  // return async (id) => {
  //   await jsonServer.delete(`/blogposts/${id}`);
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  // return async (id, title, content, callback) => {
  //   await jsonServer.put(`/blogposts/${id}`, {title, content});
  return (id, title, content, callback) =>{
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });    
    if (callback) callback();
  };
}


export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'POST', content: 'Test Message 1!', id: -1 },
  { title: 'POST #2', content: 'Test Message 2!', id: -2 }]
  // [{ title: 'POST', content: 'Test Message 1!', id: -1 }]  move dummy data to database
);
