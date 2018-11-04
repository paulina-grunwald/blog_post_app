import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
// Field is a react componed wired into redux-form
class NewPosts extends Component {
  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>

          {touched ? error : ''}
        </div>
      </div>

    )
  }

  onSubmit (values) {
    // this===component
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
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
    errors.tags = 'Enter a tags!'
  }
  if (!values.content) {
    errors.content = 'Enter post content'
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
