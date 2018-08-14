import { fetchGET, fetchPOST } from '../api'

// const mock = process.env.NODE_ENV === 'development'
const mock = false

export default ({
  method = 'get',
  jsonMock = '',
  url = '',
  params = {},
  body = {}
}) => {
  const serviceURL = mock ? `/JSONMockUp/${jsonMock}` : url
  if (method === 'post' && !mock) return fetchPOST(serviceURL, body, params)
  return fetchGET(serviceURL, params)
}
