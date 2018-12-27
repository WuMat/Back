import mongoose from 'mongoose';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jsw from 'jsonwebtoken'

const send = async(req, res) => {
  User.find({name: req.body.name})
  .exec()
  .then(user=>{
    if(user.length >= 1){
      return res.status(409).json({
        message: 'User exist'
      });
    }
    else{
      bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err){
          return res.status(500).json({
            error: err
          });
        }else{
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            password: hash
          });
          user
          .save()
          .then(result=>{
            console.log(result);
            res.status(201).json({
              message: 'user created'
            });
          })
          .catch(err=>{
            console.log(err)
            res.status(500).json({
              error: err
            })
          })
        }
      })
    }
  })
}

const login = async(req, res) => {

  User.findOne({name: req.body.name})
  .exec()
  .then(user=>{
    if(user.length < 1){
      return res.status(404).json({
        message: 'user exist'
      })
    }
    bcrypt.compare(req.body.password, user.password, (err, result)=>{
      if(err){
        return res.status(404).json({
          message: 'bcrypt failed'
        })
      }
      if(result){
        const time = '1'
        const token = jsw.sign({
          name: user.name,
          iserId: user._id
        },process.env.JWT_KEY,
        {
          expiresIn: `${time}h`
        }
        );
        return res.status(200).json({
          message: 'auth success',
          token: token,
          expiresIn: time
        })
      }
      return res.status(404).json({
        message: 'Auth failed'
      })
    })
  })
  .catch(err=>{
    res.status(500).json({
      error: err
    })
  })
}

export {send, login}



