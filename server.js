import {app} from "./app.js";
import {connectToDB} from"./connectionDB.js";

const PORT = process.env.PORT || 3000;

try {
    connectToDB(); 
    app.listen(PORT, ()=> {
        console.log(`Server listen on port ${PORT} http://localhost:${PORT}/api/private`);
    })

} catch (error) {
    console.log("server cannot run", error);
}

