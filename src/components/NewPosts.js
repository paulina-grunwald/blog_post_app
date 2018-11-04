import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
// Field is a react componed wired into redux-form
class NewPosts extends Component {
  renderField (field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>

    )
  }

  render () {
    return (
      <form>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Tags'
          name='tags'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
      </form>

    )
  }
}

function validate (values) {
  const errors = {}

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a title!'
  }
  if (!values.tags) {
    errors.title = 'Enter a tags!'
  }
  if (!values.content) {
    errors.title = 'Enter post content'
  }

  // If errors is an empty object, the form is ready to submit
  // If errors has any properties, redux assumes form is invalid
  return errors
}

export default reduxForm({
  validate,
  // make sure that string attached to form is unique
  form: 'PostsNewForm'
})(NewPosts)
