import express from 'express'
import morgan from 'morgan'
import logger from './logger'
import bodyParser from 'body-parser'

import cors from 'cors'
import './db'

import RouterAuth from './routes/auth.routes'
import RouterPost from './routes/post.routes'
import RouterUser from './routes/user.routes'

const app = express()

app.use(cors({
  origin: '*'
}))
app.use(morgan('dev'))
app.use(express.text())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  try {
    res.json({
      Author: 'INLAZE',
      project: 'test',
      version: '0.1',
      contributor: ['Darly Marcela Vergara Alvarez']
    })
  } catch (err) {
    logger.debug(err)
  }
})

app.use('/inlaze/auth', RouterAuth)
app.use('/inlaze/post', RouterPost)
app.use('/inlaze/user', RouterUser)

export default app