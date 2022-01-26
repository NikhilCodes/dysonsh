import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customers/customers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './modules/projects/projects.module';
import { HealthController } from './modules/health/health.controller';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './guards/jwt-auth.guard'

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
        context: ({ req }) => ({ req }),
      }),
    }),
    CustomersModule,
    ProjectsModule,
    AuthModule,
  ],
  controllers: [HealthController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
  }
}
