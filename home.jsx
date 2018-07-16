import React from 'react'
import { connect } from 'react-redux'
//import { fetchProfile } from './actions'

const Home = React.createClass({
  /*propTypes: {
    profile: React.PropTypes.object,
    fetchProfile: React.PropTypes.func
  },*/

  // When the component gets added to the DOM, fetch any data we need
  componentDidMount () {
    //if (!this.props.profile) this.props.fetchProfile()
  },

  render () {
    /* ... use this.props.profile ... */
    <h1>hello world</h1>
  }
})

//Home.fetchData = ({ store }) => store.dispatch(fetchProfile())

// Extract the props we want to connect from the current store state
const mapStateToProps = (state) => ({ profile: state.profile })

// Add dispatchers to the component props for fetching the data _client side_
/*const mapDispatchToProps = (dispatch) => {
  return { fetchProfile: () => dispatch(fetchProfile()) }
}*/

// Connect this component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Home)