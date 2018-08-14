import { createFetcher } from '../helpers'
import config from '../../configs'

const URL = `${config.host}`

const fetchSaveAuthorize = ({ body, params }) =>
  createFetcher({
    method: 'post',
    url: `${URL}/modify`,
    params,
    body,
    jsonMock: 'saveAuthorize.json'
  })

const fetchCallApi = (params) =>
  createFetcher({
    url: `${URL}/callApi`,
    params,
    jsonMock: 'marketData.json'
  })

export { fetchSaveAuthorize, fetchCallApi }
