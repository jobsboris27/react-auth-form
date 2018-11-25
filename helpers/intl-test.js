import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';
import translations from '../src/translations';

const intlProvider = new IntlProvider({ locale: 'ru', translations }, {});
const { intl } = intlProvider.getChildContext();

const nodeWithIntlProp = (node, props) => {
  return React.cloneElement(node, { ...props });
}

export const shallowWithIntl = (node, props = {}) => {
  return shallow(nodeWithIntlProp(node, props), { context: { intl }});
};

export const mountWithIntl = node => {
  return mount(nodeWithIntlProp(node), {
    context: { intl },
    childContextTypes: { intl: intlShape }
  });
}
