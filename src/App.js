import React, { Component } from "react";
import AuthPage from "./components/AuthPage/AuthPage";
import { IntlProvider } from "react-intl";
import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';
import translations from "./translations";

addLocaleData([...ru, ...en]);

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      locale: "ru"
    }
  }

  onChangeLanguage(locale) {
    if (this.state.locale === locale) return;

    this.setState({
      locale
    })
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} key={this.state.locale} messages={translations[this.state.locale]}>
        <div className="app">
          <AuthPage changeLanguage={this.onChangeLanguage.bind(this)} />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
