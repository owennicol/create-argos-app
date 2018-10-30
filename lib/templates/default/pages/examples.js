import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Head from '../components/head'
import Nav from '../components/nav'
import { loadData } from '../actions/actions'
import './index.scss'

class Examples extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    return { isServer }
  }

  state = {
    showData: false
  }

  handleShowData = () => {
    this.setState(prevState => {
      return {
        showData: !prevState.showData
      }
    })
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <Head title="Examples" />
        <Nav />

        <div className="hero">
          <h1 className="h1">Examples</h1>
          <div className="container">
            <button className="button" onClick={this.handleShowData}>
              {this.state.showData ? 'Hide' : 'Show'} data fetched using Sagas
            </button>
            {data &&
              this.state.showData && (
                <pre>
                  <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
              )}
          </div>
        </div>
      </div>
    )
  }
}

Examples.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export function mapStateToProps(state) {
  const { placeholderData } = state
  return {
    data: placeholderData
  }
}

export default connect(mapStateToProps)(Examples)
