// import { join, dirname } from 'path'
// import { fileURLToPath } from 'url'
// import { loadFiles } from "@graphql-tools/load-files"
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadSchemaSync } from "@graphql-tools/load"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { mergeResolvers } from "@graphql-tools/merge"
import { resolvers as dateResolver } from './custom/date.resolver.js'
import { resolvers as numberResolver } from './custom/number.resolver.js'
import { resolvers as stringResolver } from './custom/string.resolver.js'
import { resolvers as metadataResolver } from './resolvers/metadata.resolver.js'

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const resolverFiles = await loadFiles(join(__dirname, "./**/*.resolver.*"), { useRequire: false })
const resolvers = [
  dateResolver,
  numberResolver,
  stringResolver,
  metadataResolver,
]

const typeDefs = loadSchemaSync("./**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: mergeResolvers(resolvers),
});