import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createWriteStream } from 'fs';
import { Model } from 'mongoose';
import * as path from 'path';
import { Article, } from './article.model';


@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) { }
   dir:string="/home/haythemkaouech/Desktop/Work/DevSecOps/images/"


  async getArticles() {
    const arts = await this.articleModel.find().exec();
    return arts.map(art => ({
      id: art.id,
      content: art.content,
      path: art.path,
      comments: art.comments,
     
    }));

  }

  async saveFileToLocalDirectory(file: Express.Multer.File, directory: string): Promise<string> {
    const filename = `${file.originalname}`;
    
    const filePath = path.join(directory, filename);
    const fileStream = createWriteStream(filePath);


    return new Promise((resolve, reject) => {
      fileStream.on('error', error => {
        if (fileStream.writable) {
          fileStream.destroy();
        }
        reject(error);
      });

      fileStream.on('finish', () => {
        resolve(filePath);
      });

      fileStream.write(file.buffer);
      fileStream.end();
    });
  }

  async insertArticle(content: string, path: string) {
    var comments: string[] = [];
   
    const newArticle = new this.articleModel({
      content,
      path,
      comments,
    });
    const result = await newArticle.save();
    return result.id as string;
  }
  async saveArticle(file: Express.Multer.File, content: string) {
   var filePath=null;
    if(file!=null){
       filePath = await this.saveFileToLocalDirectory(file, this.dir);
      }

    const generatedId = await this.insertArticle(content, filePath);
    return `File saved at ${filePath}`;
  }
  async updateArticle(
    articleId: string,
    content: string,
    
  ) {
    const updatedArticle = await this.articleModel.findById(articleId);
    if (content!=null) {
      updatedArticle.content =content;
    
      updatedArticle.save();
      console.log(updatedArticle.content)
  }
}
  async deleteArticle(articleId: string) {
    const result = await this.articleModel.deleteOne({_id: articleId}).exec();
    if (result.deletedCount=== 0) {
      throw new NotFoundException('Could not find Artcile.');
    }
  }
  async addComment(articleId: string, comment: string): Promise<Article> {
    const article = await this.articleModel.findById(articleId);
    if (!article) {
      throw new Error('Article not found');
    }

    article.comments.push(comment);
    return article.save();
  }


}
