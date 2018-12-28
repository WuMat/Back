import mongoose from 'mongoose';


const Film = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titlePl: {type: String, required: true},
  title: {type: String, required: true},
  diskName: {type: String, required: true},
  size: {type: String, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}

},{
  timestamps: true
});


const expo = mongoose.model('Film', Film)
export default expo