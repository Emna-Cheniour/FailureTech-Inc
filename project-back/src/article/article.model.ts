import * as mongoose from 'mongoose';


export const ArticleSchema = new mongoose.Schema({
  content: { type: String, required: true },
  path: { type: String, required: false },
  comments: { type: [String], required: false },

  
});

export interface Article extends Document {
    id:string;
    content:string;
    path :string;
    comments:string[];
    
    
    
}