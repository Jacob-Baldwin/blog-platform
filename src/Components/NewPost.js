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
        title: "Title",
        dateposted: (new Date()).toISOString(),
        datemodified: (new Date()).toISOString()
      },
      editing: false
    };
  }

  componentDidMount() {
    let self = this;
  }

  submitPost() {
    let self = this;

    axios.post('/api/posts/new', this.state.post)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
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
        <div className="Editor">
          {edit}
          <button onClick={this.submitPost.bind(this)}>Submit</button>
        </div>
        <div className="Preview">
          {display}
        </div>
      </div>
    )
  }

}

export default NewPost;
