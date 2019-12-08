const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const mongoose  = require('mongoose')
const { Nuxt, Builder } = require('nuxt')
let Deploys = require('./API/models/deployModel')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  await mongoose.connect('mongodb://server:Evercam123%40@ds153003.mlab.com:53003/deploys', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  let bikeRoutes = require('./API/routes/deployed')(app);

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
