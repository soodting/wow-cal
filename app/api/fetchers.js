import { createFetcher } from '../helpers'
import config from '../../configs'

const URL = `${config.host}/svc-authorization/api/management`

const fetchSaveAuthorize = ({ body, params }) =>
  createFetcher({
    method: 'post',
    url: `${URL}/modify`,
    params,
    body,
    jsonMock: 'saveAuthorize.json'
  })

export { fetchSaveAuthorize }
