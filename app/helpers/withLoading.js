import React from 'react'

export default (options = {}) => (Componenet) => {
  const { stateNames = [] } = options
  const defaultState = 'loading'

  const getInitialState = () => {
    if (stateNames.length > 0) {
      return stateNames.reduce(
        (result, item) => ({ ...result, [item]: false }),
        {}
      )
    }

    return {
      [defaultState]: false
    }
  }

  return class extends React.Component {
    state = getInitialState()

    isStateNameMissing = (stateName) => {
      if (stateName === defaultState) return false
      if (stateNames.some((name) => name === stateName)) return false
      return true
    }

    createLoading = (stateName = defaultState) => {
      if (this.isStateNameMissing(stateName)) {
        console.warn(`${stateName} is not defined in stateNames.`)
        return () => null
      }

      this.setState({
        [stateName]: true
      })

      return () => this.hideLoading(stateName)
    }

    hideLoading = (stateName) => {
      this.setState({
        [stateName]: false
      })
    }

    render () {
      const methods = {
        createLoading: this.createLoading
        // hideLoading: this.hideLoading
      }

      return <Componenet {...this.props} {...this.state} {...methods} />
    }
  }
}
