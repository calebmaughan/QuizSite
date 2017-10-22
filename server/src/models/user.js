var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt');
var Schema      = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name:     String
});

// Compare the passed password with the value in the database. A model method.
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
}

// Pre-save hook method. The bcrypt module generates a hash from a generated
// salt string and a user's password.
UserSchema.pre('save', function saveHook(next) {
  var user = this;

  // isModified is a mongoose function
  if (!user.isModified('password'))
    return next()


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace password with hashed value
      user.password = hash;
      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
