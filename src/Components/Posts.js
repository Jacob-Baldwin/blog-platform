import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import styles from './Posts.css';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    let self = this;

    axios.get('/api/posts')
      .then(function (response) {

        let posts = response.data;

        self.setState({
          posts: posts
        });

        console.log(posts);

      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }

  render() {
    var render_post = (p) => {
      return(
        <div>
          <h1>{p.title}</h1>
          <ReactMarkdown source={p.body}/>
          <p className="Footnote">Last Modified: {Date(p.datemodified)}</p>
        </div>
      );
    }

    let posts = Object.keys(this.state.posts).map((key, index) => {
      return (render_post(this.state.posts[key]))
    });

    return (
      <div>
        Posts
        {posts}
      </div>
    )
  }

}

export default Posts
