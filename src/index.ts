import express from 'express' // ESModules
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware to transform the body to application/json content-type

const PORT = process.env.PORT ?? '3000'

app.get('/ping', (_, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
