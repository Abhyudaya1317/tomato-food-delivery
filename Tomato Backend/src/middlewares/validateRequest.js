export const validateRequest = (schema) => {
    return (req,res,next) => {
        const result= schema.safeParse(req.body);

        if(!result.success){
            res.status(200).json({
                status : "error", 
                error: result.error.errors.map((err) => err.message)});
        }

        req.body=result.data; //body gets Sanitized/validated data
        next();
    }

}