import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import SettingsCheckbox from '../components/settingsCheckbox.js';

 jest.unmock('../components/settingsCheckbox.js');

describe('settingsCheckbox Component', ()=>{

const label="Use Video";

const checkedOption={name:"useVideo", value:"true"};

const cbSubmitSetting=()=>{console.log('called')};

it('renders a input tag', () => {
  //expect(true).toBe(true);
   const wrapper = shallow(
     <SettingsCheckbox checkedOption={checkedOption} cbSubmitSetting={cbSubmitSetting} label={label} />);
   expect(wrapper.find('input').length).toEqual(1);
 });

  it('renders a div', () => {
    // expect(true).toBe(true);
     const wrapper = shallow(
        <SettingsCheckbox checkedOption={checkedOption} cbSubmitSetting={cbSubmitSetting} label={label} />);
     expect(wrapper.find('div').length).toEqual(1);
  });

  it('renders a span', () => {
    // expect(true).toBe(true);
     const wrapper = shallow(
        <SettingsCheckbox checkedOption={checkedOption} cbSubmitSetting={cbSubmitSetting} label={label} />);
     expect(wrapper.find('span').length).toEqual(1);
   });

   it('renders a label', () => {
     // expect(true).toBe(true);
      const wrapper = shallow(
          <SettingsCheckbox checkedOption={checkedOption} cbSubmitSetting={cbSubmitSetting} label={label} />);
      expect(wrapper.props().label).toEqual(label);
   });

});