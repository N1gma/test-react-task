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
          reactStringReplace(this.props.textData.text, /(\w+)/g, (text, index) =>
            <TextNode
              key={ index }
              id={ index }
              color={
                this.props.textData.tags.some(tag => {
                  currentTag = tag;
                  return tag.name === text
                    && this.props.textData.activeTag === text;
                }) && currentTag.color }
              active={ parseInt(this.props.textData.activeTagID, 10) === parseInt(index, 10) }
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
    textData: state.textData
  }),
  dispatch => ({
    formatActions: bindActionCreators(formatActions, dispatch)
  })
)(Home);
