import mongoose from 'mongoose';

import Film from '../models/film'

const getAll = async(req, res, next) => {
  const filmsPromis = 
  Film
    .find()
  const countPromis =  Film.countDocuments();
  const[films, count] = await Promise.all([filmsPromis, countPromis]);
  return res.status(200).json({films, count })
}

const send = async(req, res, next) => {
  const film = new Film({
    _id: new mongoose.Types.ObjectId(),
    titlePl: req.body.titlePl,
    title: req.body.title,
    diskName: req.body.diskName,
    size: req.body.size
  });
  film
  .save()
  .then(result=>{
    console.log(result);
    res.status(200).json({
      update: result
    })
  })
}

const delet = async(req, res) => {
  const id = req.params.filmId;

  Film
  .deleteOne({_id: id})
  .exec()
  .then(result => {
    console.log(result)
    res.status(200).json({
      message: 'film removed'
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      message:err
    })
  })
}

export{getAll, send, delet}


