/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import _ from "lodash";

const mountFormWithInputs = (formComponent, inputs, store) => {
  // if a store is provided, mount with a <Provider /> and store
  const wrapper = store
    ? mount(<Provider store={store}>{formComponent}</Provider>) // for redux-form forms
    : mount(formComponent); // for standard forms

  _.forIn(inputs, (value, input) => {
    wrapper.find(`input[name='${input}']`).simulate("change", { target: { value } });
  });

  return wrapper;
};

mountFormWithInputs.propTypes = {
  formComponent: PropTypes.element.isRequired,
  inputs: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default mountFormWithInputs;
