export const methodLimiter = (allowedMethods) => {
    return (req, res, next) => {
      if (!allowedMethods.includes(req.method)) {
        return res.status(405).json({ error: 'Método no permitido' });
      }
      next();
    };
  };
  