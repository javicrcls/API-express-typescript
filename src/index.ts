import express from 'express'

const app = express()
app.use(express.json()) //transform req.body to json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinging!!')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

