import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
class PostsIndex extends Component {
  // call life cycle method
  componentDidMount () {
    // kick off post data loading process (network request)
    this.props.fetchPosts()
  }

  renderPosts () {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      )
    })
  }
  render () {
    return (
      <div>

        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a Post
          </Link>
        </div>

        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

// get posts from the state as props
function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

// pass action creator
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
