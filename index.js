const express = require('express')
const app = express()
const PORT = process.env.PORT || 3060

app.post("/send/me/data", (req,res) => {
    res.send({"message": "ok!"})
})

app.listen(PORT, () => console.log("server is running"))
