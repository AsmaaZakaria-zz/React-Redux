import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// action creators
// export const fetchPosts = async () => {
//   /**
//    * bad approach!
//    * because we are breaking the rules of redux
//    *
//    * @Error ==> Actions must be a plain objects. Use custom middleware for async actions.
//    */
//   const response = await jsonPlaceholder.get('/posts');
//   console.log(response)
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   }
// }

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
}

// SECOND SOLN
export const fetchPostsAndUsers = () => async (dispatch, getSatet) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getSatet().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)))  // we don't care about await here...

  // second approach using _.chain()
  _.chain(getSatet().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

// FIRST SOLN to make a unique API requested
// this will does not work if we changed an user in the future
// as it will return the same cached user instead of the new one!
// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }
// // private function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`users/${id}`);
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
