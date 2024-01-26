

const errorHandler = (err, req, res, next) => {
    const statusCode= err.statusCode || 500; // si tiene codigo de error usamos ese, sino usaremos 500

    const errorResponse= { error :
        {
            message : err.message || "Error interno del servidor",
            code : err.code || "internal error"
        }
    }

    res.status(statusCode).json(errorResponse);
};


module.exports = errorHandler;