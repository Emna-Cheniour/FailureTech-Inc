import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService:ArticleService){}
    @Get()
    async getAllBlogs() {
      const articles = await this.articleService.getArticles();
      return articles;
    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async saveBlog(@UploadedFile() file: Express.Multer.File,@Body("content")content): Promise<string> {
     
      const generatedId = await this.articleService.saveArticle(file,content);
     
      return generatedId;
    }
    @Patch(':id')
    async updateProduct(
      @Param('id') articleId: string,
      @Body('content') content: string,
      
    ) {
      await this.articleService.updateArticle(articleId, content);
      return null;
    }
    @Delete(':id')
  async removeProduct(@Param('id') articleId: string) {
      await this.articleService.deleteArticle(articleId);
      return null;
  }
  @Post(':id/comments')
  async addComment(
    @Param('id') id: string,
    @Body('comment') comment: string,
    
  ) {
    const article = await this.articleService.addComment(id, comment);
    return article;
  }
}
