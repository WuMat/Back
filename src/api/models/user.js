import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  password: {type: String, required: true}
})

const user = mongoose.model('User', userSchema);

export default user