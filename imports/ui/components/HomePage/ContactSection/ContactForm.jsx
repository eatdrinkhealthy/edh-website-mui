import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Required field.");

const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address."
    : undefined;

const minLength2 = value =>
  value && value.length < 2 ? "Must have a least 2 characters." : undefined;

const maxLength40 = value =>
  value && value.length > 40 ? "Must not have more than 40 characters." : undefined;

const maxLength500 = value =>
  value && value.length > 500 ? "Must not have more than 500 characters." : undefined;

/* eslint-disable jsx-a11y/label-has-for */
const renderInput = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} id={input.name} component="input" type={type} />
    {touched && error && (
      <span id={`${input.name}Error`} className="form-error is-visible">
        {error}
      </span>
    )}
  </div>
);

renderInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const renderTextarea = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <textarea {...input} id={input.name} cols="10" rows="50" />
    {touched && error && (
      <span id={`${input.name}Error`} className="form-error is-visible">
        {error}
      </span>
    )}
  </div>
);

renderTextarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};
/* eslint-enable jsx-a11y/label-has-for */

const ContactFormComponent = props => {
  const { handleSubmit } = props;

  return (
    <div>
      <h2>Contact Us</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <Field
          name="contactName"
          label="Name"
          component={renderInput}
          type="text"
          validate={[required, minLength2, maxLength40]}
        />

        <Field
          name="contactEmail"
          label="Email"
          component={renderInput}
          type="email"
          validate={[required, emailFormat]}
        />

        <Field
          name="contactMessage"
          label="Message"
          component={renderTextarea}
          validate={[required, minLength2, maxLength500]}
        />

        <button id="contactSubmit" type="submit" className="button button--submit">
          Send
        </button>
      </form>
    </div>
  );
};

ContactFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const onSubmitSuccess = (result, dispatch, props) => {
  // on successful submit, clear form fields
  props.change("contactName", "");
  props.untouch("contactName"); // clears validation error

  props.change("contactEmail", "");
  props.untouch("contactEmail"); // clears validation error

  props.change("contactMessage", "");
  props.untouch("contactMessage"); // clears validation error

  // set focus on contactName field
  // NOTE: using document.querySelector is not a React standard (works here, not in jest)
  const contactNameElem = document.querySelector("input#contactName");
  if (contactNameElem) {
    contactNameElem.focus();
  }
};

const ContactForm = reduxForm({
  form: "contactForm",
  onSubmitSuccess,
})(ContactFormComponent);

export default ContactForm;
