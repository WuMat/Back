import jwt from 'jsonwebtoken'

export function checkAuth (req, res, next){
  try{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next()
  }catch(error){
    return res.status(404).json({
      message: 'auth failed'
    })
  }  
}

// export default checkAuth