import AlertMessage from 'glud-component/lib/AlertMessage'

export default (func, endTask, success) => async (dispatch, getState) => {
  try {
    await func(dispatch, getState)
    success && success()
    endTask && endTask()
  } catch (error) {
    AlertMessage.open(error)
    endTask && endTask()
  }
}
