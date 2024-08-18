import express from 'express'
import users from './routes/users'
import auth from './routes/auth'
import watches from './routes/watches'
import products from './routes/products'
import orders from './routes/order'
import mongoose from 'mongoose'
const app = express()


app.use(express.json())
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/watches', watches)
app.use('/api/products', products)
app.use('/api/orders', orders)







mongoose
  .connect("mongodb://127.0.0.1:27017/gadgetynpm")
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log("could not connect ", err));












const port = 5000

app.listen(port,()=>console.log(`listening on port ${port}`))
export default app
