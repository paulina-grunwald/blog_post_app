import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
// Field is a react componed wired into redux-form
class NewPosts extends Component {
  renderTitleField (field) {
    return (
      <div className='form-group'>
        <label>Title</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>

    )
  }
  renderTagsField () {

  }

  render () {
    return (
      <form>
        <Field
          name='title'
          component={this.renderTitleField}
        />
        <Field
          name='title'
          component={this.renderTagsField}
        />
      </form>

    )
  }
}

export default reduxForm({
  // make sure that string attached to form is unique
  form: 'PostsNewForm'
})(NewPosts)
