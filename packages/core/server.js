const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.static('public'))

  server.get('/:path', (req, res) => {
    const actualPage = '/index';
    const queryParams = { path: req.params.path };
    app.render(req, res, actualPage, queryParams);
  })

  server.get('/', (req, res) => {
    const actualPage = '/index';
    const queryParams = { path: 'home' };
    app.render(req, res, actualPage, queryParams);
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    // console.log(`> Ready on http://localhost:${port}`)
  })
})
