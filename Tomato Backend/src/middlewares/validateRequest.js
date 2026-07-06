export const validateRequest = (schema) => {
    return (req,res,next) => {
        const result= schema.safeParse(req.body);

        if(!result.success){
            res.status(200).json({
                status : "error", 
                errors: result.error.issues.map(issue => issue.message)});
        }

        req.body=result.data; //body gets Sanitized/validated data
        next();
    }

}