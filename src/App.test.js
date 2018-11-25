import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { shallowWithIntl, mountWithIntl } from "../helpers/intl-test";
import { reduxForm } from 'redux-form'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import AuthForm from './components/AuthForm/AuthForm';
import AuthPage from './components/AuthPage/AuthPage';
import translations from './translations';

configure({ adapter: new Adapter() });

describe('Render components', () => {

  it('should render App component', () => {
    expect(shallow(<App />).find(".app").length).toBe(1);
  });

  it('should render AuthPage component', () => {
    const component = shallowWithIntl(<AuthPage />, {changeLanguage: () => alert()}).shallow();
    expect(component.find(".auth-page").length).toBe(1);
  });

  // it('should render AuthForm component', () => {
  //   const intlProvider = new IntlProvider({ locale: 'ru', translations }, {});
  //   const { intl } = intlProvider.getChildContext();
  //   const component = shallow(<AuthForm/>, {context: { intl }}).shallow();
    
  //   expect(component.find(".form").length).toBe(1);
  // });
});

