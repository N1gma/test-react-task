/*import Immutable from 'immutable';

 const defState = Immutable.fromJS({
 text: '',
 tags: [],
 activeTagID: '',
 activeTag: ''
 });*/


const defState = {
  text: '',
  tags: [],
  activeTagID: '',
  activeTag: ''
};

export default function textFormat(state = defState, action = {}) {
  switch (action.type) {
    case 'ADD_NEW_TAG':
      return {
        ...state,
        tags: [
          ...state.tags,
          action.tag
        ]
      };
    case 'TEXT_READY':
      return {
        ...state,
        text: action.text
      };
    case 'TAGS_READY':
      return {
        ...state,
        tags: action.tags
      };
    case 'SET_ACTIVE_TAG':
      return {
        ...state,
        activeTagID: action.id,
        activeTag: action.tag
      };
    default:
      return state;
  }
}
