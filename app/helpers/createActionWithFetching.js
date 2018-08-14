import Toastify from 'glud-component/lib/Toastify'
import withTryCatch from './withTryCatch'

export default ({ loadingMessage, successMessage, endTask, callAction }) => {
  const loading = Toastify({
    type: 'LOADING',
    message: loadingMessage
  })
  const done = () => {
    loading.close()
    endTask && endTask()
  }

  const success = () => {
    if (successMessage) {
      Toastify({
        type: 'SUCCESS',
        closeTime: 2,
        message: successMessage
      })
    }
  }

  return withTryCatch(callAction, done, success)
}
