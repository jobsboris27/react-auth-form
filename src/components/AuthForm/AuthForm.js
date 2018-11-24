import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormattedMessage, injectIntl } from "react-intl";

import Spinner from "../Spinner/Spinner";
import { required, minLength6, email } from "../../utils/validate";
import "./AuthForm.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <>
    <label>{label}</label>
    <div className={`form__field ${touched && error && 'error-input'}`}>
      <input {...input} placeholder={label} type={type} autoComplete="false"/>
    </div>
  </>
);


const AuthForm = props => {
  const { handleSubmit, submitting, invalid, error, intl, dirty } = props;
  const buttonContent = (
    submitting ?
      <Spinner/>
    :
      <span><FormattedMessage id="app.login.button"/></span>
  );
  const errorResponse = error && <div className="form__error">{error}</div>;

  return (
    <form className="form" onSubmit={handleSubmit(props.onSubmit)}>
      
      {errorResponse}

      <div className="form__row">
        <Field
          name="email"
          type="text"
          component={renderField}
          validate={[required, email]}
          label={intl.formatMessage({id: "app.login.email"})}
        />
      </div>
      <div className="form__row">
        <a className="form__link" href="/">
          <FormattedMessage id="app.login.forgot"/>
        </a>
        <Field
          name="password"
          type="password"
          component={renderField}
          validate={[required, minLength6]}
          label={intl.formatMessage({id: "app.login.password"})}
        />
      </div>
      <div className="form__row">
        <button type="submit" disabled={!dirty || invalid || submitting}>
          {buttonContent}
        </button>
      </div>
    </form>
  );
};

export default injectIntl(reduxForm({
  form: "authForm"
})(AuthForm));
