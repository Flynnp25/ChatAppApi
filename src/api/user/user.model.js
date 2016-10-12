'use strict';

import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

export default mongoose.model('User', UserSchema);
