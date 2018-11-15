import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import styles from './NewPost.css';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        body: "Body",
        title: "Title"
      },
      editing: false
    };
  }

  componentDidMount() {
    let self = this;
  }

  editTitle(e) {
    let p = this.state.post;

    p = {
      ...p,
      title: e.target.value
    }

    this.setState({post: p})
  }

  editBody(e) {
    let p = this.state.post;

    p = {
      ...p,
      body: e.target.value
    }

    this.setState({post: p})
  }

  render() {
    var display = <div className="DisplayText">
      <h1>{this.state.post.title}</h1>
      <ReactMarkdown source={this.state.post.body}/>
    </div>

    var edit = <div>
      <div>
        <input
          type="text"
          value={this.state.post.title}
          onChange={this.editTitle.bind(this)}
          />
      </div>

      <div>

        <textarea className="EditPostText"
          onChange={this.editBody.bind(this)}
          value={this.state.post.body}
          />

      </div>

    </div>

    return (
      <div>
        New Post
        <div className="Editor">
          {edit}
        </div>
        <div className="Preview">
          {display}
        </div>
      </div>
    )
  }

}

export default NewPost;
