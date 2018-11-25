// @flow

import React, { Component } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { SubmissionError } from "redux-form";
import { FormattedMessage, injectIntl } from "react-intl";
import { type IntlShape } from "react-intl";
import { mockResponse } from "../../mock";
import "./AuthPage.css";

type Props = {
  intl: IntlShape;
  changeLanguage: (locale: string) => void;
}

class AuthPage extends Component<Props, {}> {

  async onHandleSubmit(values) {
    try {
      const response = await mockResponse({ ...values, grant_type: "password" });
      console.log(response, "response");
      alert(this.props.intl.formatMessage({ id: "app.login.success" }));
    } catch (err) {
      throw new SubmissionError({
        _error: this.props.intl.formatMessage({ id: err })
      });
    }
  }

  render() {
    const { intl, changeLanguage } = this.props;
    const isRuLocale = intl.locale === "ru";
    const rootFolder = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";

    return (
      <div className="auth-page">
        <div className="auth-page__container">
          <div className="auth-page__header">
            <img src={`${rootFolder}/assets/logo.svg`} alt="Teachbase.ru" />
          </div>
          <div className="auth-page__form">
            <div className="auth-page__form-header">
              <span className="auth-page__form-title">
                <FormattedMessage id="app.login" />
              </span>
              <FormattedMessage id="app.login.with_help" />
              <div className="auth-page__social">
                <a href="/" className="auth-page__social-item">Fb</a>
                <a href="/" className="auth-page__social-item">Vk</a>
                <a href="/" className="auth-page__social-item">Я</a>
                <a href="/" className="auth-page__social-item">G+</a>
              </div>
            </div>
            <div className="auth-page__form-content">
              <AuthForm onSubmit={this.onHandleSubmit.bind(this)} />
            </div>
          </div>
          <div className="auth-page__footer">
            <button onClick={changeLanguage.bind(null, "ru")} className={isRuLocale ? "active" : ""}>
              <FormattedMessage id="app.login.lang_toggle_ru" />
            </button>
            <span>|</span>
            <button onClick={changeLanguage.bind(null, "en")} className={!isRuLocale ? "active" : ""}>
              <FormattedMessage id="app.login.lang_toggle_en" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(AuthPage);