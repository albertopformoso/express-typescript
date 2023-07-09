import express from 'express' // ESModules
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  console.log('Fetching all entry diaries')
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default router
