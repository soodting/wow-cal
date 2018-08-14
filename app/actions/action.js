import { createActionWithFetching } from '../helpers'
import demoModule from '../modules/demo'
import { fetchSaveAuthorize } from '../api/fetchers'

const saveAuthorize = ({ body, identity }) => {
  const callAction = async (dispatch) => {
    const params = {
      identity
    }
    await fetchSaveAuthorize({ body, params })
    dispatch(demoModule.actions.updateName('Gamo'))
  }

  return createActionWithFetching({
    loadingMessage: 'Saving Authorizie..',
    successMessage: 'Success',
    callAction
  })
}

export { saveAuthorize }
