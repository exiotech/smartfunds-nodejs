import mongoose from 'mongoose';

import BaseSchema from 'model/BaseSchema';


const StartupSchema = BaseSchema.extend(
  {
    name: {
      type: String
    },
    address: {
      type: String
    },
    googleKey: {
      type: String,
      required: true
    },
    activeUsers: {
      type: String
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        Reflect.deleteProperty(ret, '_id');
        Reflect.deleteProperty(ret, '__v');
        Reflect.deleteProperty(ret, '__t');
        Reflect.deleteProperty(ret, '_password');
        Reflect.deleteProperty(ret, 'deleted');
        /* eslint-disable no-param-reassign */
        ret.id = doc._id;
      }
    }
  }
);

export default mongoose.model('Startup', StartupSchema);
