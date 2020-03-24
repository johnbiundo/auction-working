import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // context({ req }) {
      //   const ip = req.connection.remoteAddress.split(`:`).pop();

      //   return {
      //     ip: ip === '1' ? '192.169.0.1' : ip,
      //   };
      // },
      // formatError(err) {
      //   return {
      //     ...err,
      //     message: err.message,
      //     // @ts-ignore
      //     code: err.originalError?.code,
      //   };
      // },
      installSubscriptionHandlers: true,
      // subscriptions: {
      //   path: 'subscriptions',
      // },
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
