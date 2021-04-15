const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")("STRIPE_SECRET_KEY")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())


app.post("/pay", cors(), async (req, res) => {
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Illustrations/Posters",
            payment_method: id,
            confirm: true,
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment Successful",
            success: true
        })

    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment Failed",
            success: false
        })
    }
})

app.listen(process.env.PORT || 4001, () => {
    console.log("Server is listening on port 4001")
})

