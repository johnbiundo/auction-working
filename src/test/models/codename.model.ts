import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Codename {
  @Field()
  text: string;
}
