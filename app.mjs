import express from "express"
import { Http2ServerRequest } from "http2"
import http from "https"
import path from 'path'
import bodyParser from "body-parser"
import ejs from "ejs"

const app = express()
const __dirname = path.resolve()

app.set('view engine', 'ejs')

app.get("/", function(req, res){

    var today = new Date()
    var currentDay = today.getDay()
    var day = ""


    switch (currentDay) {
        case 0:
            day = "Κυριακή"
        break
        case 1:
            day = "Δευτέρα"
        break
        case 2:
            day = "Τρίτη"
        break
        case 3:
            day = "Τετάρτη"
        break
        case 4:
            day = "Πέμπτη"
        break
        case 5:
            day = "Παρασκευή"
        break
        case 6:
            day = "Σάββατο"
        break
        default:
            console.log("Error:  current day is equal to: " + currentDay)
    }

           res.render("list", {kindOfDay: day})
    
})



app.listen(3000, () => console.log("Ο Σέρβερ ξεκίνησε στην θύρα 3000"))