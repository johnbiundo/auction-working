import { Resolver, Subscription, Query } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Codename } from './models/codename.model';

const pubSub = new PubSub();

@Resolver('Test')
export class TestResolver {
  @Query(() => Codename)
  test() {
    const result = {
      text: 'test text',
    };
    pubSub.publish('testSub', { testSub: result });
    return result;
  }

  @Subscription(() => Codename)
  testSub() {
    return pubSub.asyncIterator('testSub');
  }
}
