import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default ({ mapState, actions, children }) => {
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
  return connect(mapState, mapDispatchToProps)((props) => children(props))
}
