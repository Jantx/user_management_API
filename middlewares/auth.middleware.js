export const validateBody = (fields) =>{
    return (req,res,next) => {
        const missingFields = fields.filter(field => !req.body[field]);
        if (missingFields.length > 0){
            return res.status(400).send(`Missing Fields: ${missingFields.join(", ")}`);
        }
        next();
    }
}