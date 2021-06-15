import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      // [mongoDB]:https://cloud.mongodb.com/v2/60c8dc8f85fde969977a86ec#clusters
      'mongodb+srv://atukan0930:8GNSzyEN7vNopEc1@cluster0.5fngo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
