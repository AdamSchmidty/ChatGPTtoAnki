import {app} from "./app"

const port = process.env.PORT || 3000;
console.log('hi')

app.listen(port, () => {
    console.log(`Server succesfully started and listening on port ${port}`)
})