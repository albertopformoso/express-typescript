import express from 'express' // ESModules
import * as diaryServices from '../service/diaryServices'
import toNewDiaryEntry from '../handler/diaryHandler'

const router = express.Router()

router.get('/', (_req, res) => {
  console.log('Fetching all entry diaries')
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  console.log('Fetching diary by id')
  const diary = diaryServices.findById(Number(req.params.id))
  return (diary !== undefined) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
