import { GraphQLError, GraphQLScalarType, Kind } from 'graphql'
import { Resolvers } from '../types'
import isUrl from 'is-url-superb'

const parseString = (value: unknown) => {
  if(typeof value === 'string') {
    return value
  }
  throw new GraphQLError("TypeError: Invalid String")
}

export const resolvers: Resolvers = {
  StringNonEmpty: new GraphQLScalarType<string, string>({
    name: 'StringNonEmpty',
    description: 'Non Empty String',
    serialize(value) {
      const str: string = parseString(value)
      if(str.trim().length > 0) return str
      throw new GraphQLError("String must not be Empty")
      
    },
    parseValue(value) {
      const str: string = parseString(value)
      if(str.trim().length > 0) return str
      throw new GraphQLError("String must not be Empty")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("Non Empty String")
    },
  }),
  URL: new GraphQLScalarType<string, string>({
    name: 'URL',
    description: 'Uniform Resource Identifier String',
    serialize(value) {
      const str: string = parseString(value)
      if(isUrl(str)) return str
      throw new GraphQLError("Validation Error: Invalid URL")
    },
    parseValue(value) {
      const str: string = parseString(value)
      if(isUrl(str)) return str
      throw new GraphQLError("Validation Error: Invalid URL")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("TypeError: Invalid String")
    },
  }),
}