import express from 'express'
import ssr from './ssr'
import config from '../configs'

const app = express()
const cloudscraper = require('cloudscraper')

app.use(express.static('build'))
app.set('port', process.env.PORT || config.port)
const PORT = app.get('port')

app.get('/callApi?:url', async (req, res) => {
  console.log('### call api ###')
  console.log(req.query.url)
  cloudscraper.get(req.query.url, function (error, response, body) {
    if (error) {
      console.log('Error occurred')
      res.json({ status: 0 })
    } else {
      console.log(response.statusCode)
      if (response.statusCode === 200) {
        const jsonBody = JSON.parse(body)
        res.json({ status: response.statusCode, json: jsonBody })
      } else {
        res.json({ status: response.statusCode })
      }
    }
  })
})
app.use(ssr)

app.listen(PORT, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> Listening on port ${PORT}.`)
  }
})
