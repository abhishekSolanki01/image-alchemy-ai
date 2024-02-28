import { Document, Schema, model, models } from "mongoose";

// create an iimage interface based on the schema
export interface IImage extends Document{
  title: string;
  transformation: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object; // Assuming config is an arbitrary object
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
  }
  createdAt?: Date;
  updatedAt?: Date;
}


const imageSchema = new Schema({
  title: { type: String, required: true },
  transformation: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number, required: false },
  height: { type: Number, required: false },
  config: { type: Object },
  transformationUrl: { type: URL, required: false },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  
});

const Image = models?.Image || model('Image', imageSchema);

export default Image;