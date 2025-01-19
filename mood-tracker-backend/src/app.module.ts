import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoodModule } from './mood/mood.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tabuadajanleinzer:AAOIUGhO6FBKkl9H@cluster0.i3sx7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
