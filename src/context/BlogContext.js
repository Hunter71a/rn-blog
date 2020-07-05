// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//  const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
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

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    callback();
  };
}


export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
  // [{ title: 'Chump POST', content: 'Shut up, Chump!', id: -1 }]  move dummy data to database
);

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);



  // [
  //   {title: 'Blog Post #1'},
  //   {title: 'Blog Post # 2'}
  // ];

//   return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
//     {children}
//   </BlogContext.Provider>
// };

// export default BlogContext;