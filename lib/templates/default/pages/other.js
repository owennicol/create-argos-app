import React from 'react'
import { connect } from 'react-redux'

import { loadData } from '../actions/actions'
import Page from '../components/page'

class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    return { isServer }
  }

  render() {
    return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
  }
}

export default connect()(Other)
