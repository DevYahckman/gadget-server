import express from 'express'
import {Watch, validateWatches} from '../model/watches'

const router = express.Router()


router.get('/', (req,res)=>{
    res.send('The gadgets')
})


router.post('/', async(req, res)=>{
    const {error}=validateWatches(req.body)
    if (error) return res.status(400).send(error.details[0].message)


       const watch = new Watch({
            // id:2,
            brand: req.body.brand,
            model: req.body.model,
            description: req.body.description,
            condition: req.body.condition,
            price: req.body.price,
          });

          await watch.save()
          res.send(watch)

    
})





export default router