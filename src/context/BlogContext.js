// import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

//  const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
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

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [{title: 'Chump POST', content: 'Shut up, Chump!', id: -1}]
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