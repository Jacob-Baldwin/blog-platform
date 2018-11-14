import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import styles from './Post.css';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      post_text: '# This is a header\n\nAnd this is a paragraph',
      editing: false
    };
  }

  componentDidMount() {
    let self = this;

    // axios.get('/api/persons')
    // .then(function (response) {

    //   let sorted_persons = response.data;

    //   sorted_persons.sort((a,b) => {
    //     a.score = a.upvotes - a.downvotes;
    //     b.score = b.upvotes - b.downvotes;

    //     return (b.score - a.score);
    //   })

    //   self.setState({
    //     persons: sorted_persons
    //   });

    // })
    // .catch(function (error) {
    //   console.log(error);
    //   throw error;
    // });
  }

  render() {
    // let i = 0;
    // let persons = this.state.persons.map((p) => {
    //   i = i + 1;
    //   return (<PersonCard person={p} ranking={i}/>)
    // });


    var display = <div>
      <ReactMarkdown source={this.state.post_text}/>
      <button onClick={() => {this.setState({editing:true})}}>Edit</button>
    </div>

    var edit = <div>
      <textarea onChange={(e) => {this.setState({post_text: e.target.value})}} value={this.state.post_text}/>
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
