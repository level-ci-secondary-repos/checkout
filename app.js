import express from 'express'

const app = express()
const port = Number(process.env.PORT || 1343)

app.use(express.static('.'))
app.listen(port, () => {
  console.log(`m-01 checkout is running at http://127.0.0.1:${port}`)
})
