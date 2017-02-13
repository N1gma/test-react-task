import Immutable from 'immutable';

const defState = Immutable.fromJS({
  text: '',
  tags: Immutable.List()
});

export default function textFormat(state = defState, action = {}) {
  switch (action.type) {
    case 'ADD_NEW_TAG':
      return state.set('tags', state.get('tags').push(Immutable.Map(action.tag)));
    case 'TEXT_READY':
      return state.set('text', action.text);
    case 'TAGS_READY':
      return state.set('tags', Immutable.List(...action.tags));
    case 'SET_ACTIVE_TAG':
      return state.merge({
        activeTagID : action.id,
        activeTag : action.tag
      });
      // return state.set('activeTagID', action.id).set('activeTag', action.tag);
    default:
      return state;
  }
}
