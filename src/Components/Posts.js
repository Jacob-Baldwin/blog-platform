import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import styles from './Posts.css';
import Post from './Post';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
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

      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }

  render() {
    // let i = 0;
    // let persons = this.state.persons.map((p) => {
    //   i = i + 1;
    //   return (<PersonCard person={p} ranking={i}/>)
    // });

    return (
      <div>
        Posts
        <Post post={{title:"lol", body:"lol"}}/>
      </div>
    )
  }

}

export default Posts
