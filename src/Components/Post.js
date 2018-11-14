import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import styles from './Post.css';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        body: "",
        title: ""
      },
      editing: false
    };
  }

  componentDidMount() {
    let self = this;
    this.setState({
      post: this.props.post
    })
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
    var display = <div>
      <h1>{this.state.post.title}</h1>
      <ReactMarkdown source={this.state.post.body}/>
      <button onClick={() => {this.setState({editing:true})}}>Edit</button>
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

      <button onClick={() => {this.setState({editing:false})}}>Done</button>
    </div>

    return (
      <div>
        Post
        {this.state.editing?edit:display}
      </div>
    )
  }

}

export default Post
