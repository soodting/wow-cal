import fetch from 'isomorphic-fetch'
import join from 'lodash/join'
import map from 'lodash/map'
import get from 'lodash/get'
import toString from 'lodash/toString'
import { isServiceError, convertServiceResponseToError } from './handleError'

function convertToURLParam (params = {}) {
  let defaultParams = {
    t: Date.now()
  }

  let datas = { ...params, ...defaultParams }

  const urlParams = map(datas, (value, key) => {
    return `${key}=${encodeURIComponent(toString(value))}`
  })

  return `?${join(urlParams, '&')}`
}

function isService302 (response) {
  const foundXXO = response.url.indexOf('xxo-uat.true.th') !== -1
  if (response.redirected && foundXXO) return true
  return false
}

function parseJSON (response) {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {}
  })
}

function fetchAPI (options, url, params) {
  if (options == null) options = {}
  if (options.credentials == null) options.credentials = 'same-origin'
  const urlParams = convertToURLParam(params)

  return new Promise((resolve, reject) => {
    fetch(`${url}${urlParams}`, options)
      .then((response) => {
        if (isService302(response)) {
          alert('Your User Session Has Expired. Please Log In Now. Session Timeout') // eslint-disable-line
          return
        }

        return {
          ok: response.ok,
          status: response.status,
          response: parseJSON(response)
        }
      })
      .then(({ ok, status, response }) => {
        response.then((res) => {
          const statusCode = get(response, 'head.code', status)

          if (isServiceError(ok, statusCode, res)) {
            reject(convertServiceResponseToError(statusCode, res))
          }
          resolve(response)
        })
      })
      .catch((error) => {
        reject(
          convertServiceResponseToError({
            MessageEN: `${error.message} URL: ${url}`
          })
        )
      })
  })
}

const fetchGET = (url, params, headers = {}) => {
  const configs = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    credentials: 'same-origin'
  }
  return fetchAPI(configs, url, params)
}

const fetchPOST = (url, dataBody, params, headers = {}) => {
  const configs = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    credentials: 'same-origin',
    body: JSON.stringify(dataBody)
  }
  return fetchAPI(configs, url, params)
}

const fetchUploadImage = (url, datas) => {
  const formData = new FormData() // eslint-disable-line

  for (const key in datas) {
    formData.append(key, datas[key])
  }

  return fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    body: formData
  })
}

export { fetchAPI, fetchGET, fetchPOST, fetchUploadImage }
