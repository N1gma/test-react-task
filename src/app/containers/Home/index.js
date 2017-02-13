import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reactStringReplace from 'react-string-replace';
import * as formatActions from 'app/redux/actions/text';
import TextNode from 'app/components/textNode';
import styles from './style.css';


class Home extends Component {
  constructor() {
    super(...arguments);
    this.selectWord = this.selectWord.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
  }

  componentWillMount() {
    this.props.formatActions.getText();
    this.props.formatActions.getTags();
  }


  selectWord(e) {
    if (e.target.tagName.toUpperCase() === 'SPAN') {
      this.props.formatActions.setActiveTag(e.target.id, e.target.innerText);
    }
  }

  addNewTag(tag) {
    return () => {
      this.props.formatActions.addTag(tag);
    };
  }

  render() {
    let currentTag;
    return (
      <div onClick={ this.selectWord }>
        {
          reactStringReplace(this.props.textData.get('text'), /(\w+)/g, (text, index) =>
            <TextNode
              key={ index }
              id={ index }
              color={
                this.props.textData.get('tags').some(tag => {
                  currentTag = tag;
                  return tag.get('name') === text
                    && this.props.textData.get('activeTag') === text;
                }) && currentTag.get('color') }
              active={ parseInt(this.props.textData.get('activeTagID'), 10) === parseInt(index, 10) }
              text={ text }
              buttonClick={ this.addNewTag }
            />
          )
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    textData: state
  }),
  dispatch => ({
    formatActions: bindActionCreators(formatActions, dispatch)
  })
)(Home);
