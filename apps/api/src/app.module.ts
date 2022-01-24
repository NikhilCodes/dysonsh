import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customers/customers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './modules/projects/projects.module';
import { HealthController } from './modules/health/health.controller';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    MongooseModule.forRoot('mongodb+srv://dysonsh:test1234@cluster0.6rrfr.mongodb.net/dysondb?retryWrites=true&w=majority'),
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
        debug: !(process.env.NODE_ENV === 'production'),
        useGlobalPrefix: true,
      }),
    }),
    CustomersModule,
    ProjectsModule,
  ],
  controllers: [HealthController],
  providers: [AppService],
})
export class AppModule {}
