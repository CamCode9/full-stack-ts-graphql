import queryTwitterResolvers from "./resolvers/Query"
import { Resolvers } from "./resolvers-types.generated"
import Db, { DbTweet, DbUser } from "./db"
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';
import mutationTwitterResolver from "./resolvers/Mutation";


export interface TwitterResolverContext {
  db: Db
  dbTweetCache: Record<string, DbTweet>
  dbUserCache: Record<string, DbUser>
  dbTweetToFavoriteCountMap: Record<string, number>
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolvers,
  Tweet: tweetTwitterResolver,
  User: userTwitterResolver,
 Mutation: mutationTwitterResolver
}


export default resolvers