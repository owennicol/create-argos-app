/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import App from '../index.js'

describe('With Enzyme', () => {
  it('App shows get started message', () => {
    const app = shallow(<App />)

    expect(
      app
        .find('p')
        .first()
        .text()
    ).toEqual('To get started, edit pages/index.js and save to reload.')
    expect(app).toMatchSnapshot()
  })
})
