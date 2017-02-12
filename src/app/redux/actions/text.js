import { Get, Post } from 'app/helpers/middlewares';
import getNewColor from 'app/helpers/colors';

export function addTag(tag) {
  return dispatch => Post('http://54.187.63.201/api/v1/tag/',
    {
      name: tag,
      document: 1
    })
    .then(() => dispatch({
      type: 'ADD_NEW_TAG',
      tag: {
        name: tag,
        color: getNewColor()
      }
    }));

}
export function setActiveTag(id, tag) {
  return {
    type: 'SET_ACTIVE_TAG',
    id,
    tag
  };
}

export function showText(text) {
  return {
    type: 'TEXT_READY',
    text
  };
}

export function getText() {
  return dispatch => Get('http://54.187.63.201/api/v1/document/')
    .then(text => dispatch(showText(text[0].content.slice(text[0].content.length / 2))));
}

export function getTags() {
  return dispatch => Get('http://54.187.63.201/api/v1/tag/')
    .then(results => {
      const tags = results.map(tag => ({
        ...tag,
        color: getNewColor()
      }));
      return dispatch({
        type: 'TAGS_READY',
        tags
      });
    });
}
