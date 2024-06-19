import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => { 
    res.send('Fetching on the file bro')
})

router.post('/', (_req, res) => {
    res.send('Se guardo bro')
})

export default router;