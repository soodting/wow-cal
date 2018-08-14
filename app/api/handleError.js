import get from 'lodash/get'

const getMessageError = (statusCode, response) => {
  if (get(response, 'head')) return response.head.message
  if (get(response, 'message')) return response.message[0]
  if (get(response, 'messages')) return response.messages[0]
  if (get(response, 'MessageTH')) return response.MessageTH
  if (get(response, 'MessageEN')) return response.MessageEN
  return `Service Error ${statusCode}`
}

const isServiceError = (ok, statusCode, response) => {
  if (!ok) return true
  if (response.fault) return true
  if (response.IsError) return true
  return false
}

const convertServiceResponseToError = (statusCode, response) => {
  return {
    type: 'ERROR',
    message: getMessageError(statusCode, response),
    closeTime: 10
  }
}

export { isServiceError, convertServiceResponseToError }
