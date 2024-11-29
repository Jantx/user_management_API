import {app} from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server listen on port ${PORT} http://localhost:${PORT}`)
})