import { GraphQLError, GraphQLScalarType, Kind } from 'graphql'
import { Resolvers } from '../types'
import isUrl from 'is-url-superb'
import { validate as isEmail } from 'email-validator'
import { isCompanyEmail } from 'company-email-validator'

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
      if(str.trim().length > 0) return str.trim()
      throw new GraphQLError("String must not be Empty")
      
    },
    parseValue(value) {
      const str: string = parseString(value)
      if(str.trim().length > 0) return str.trim()
      throw new GraphQLError("String must not be Empty")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("Non Empty String")
    },
  }),
  Char: new GraphQLScalarType<string, string>({
    name: 'Char',
    description: 'Single English Character',
    serialize(value) {
      const str: string = parseString(value).trim()
      if(str.length === 1) return str
      throw new GraphQLError("Validation Error: Invalid English Character")
    },
    parseValue(value) {
      const str: string = parseString(value).trim()
      if(str.length === 1) return str
      throw new GraphQLError("Validation Error: Invalid English Character")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("TypeError: Invalid String")
    },
  }),
  CharUppercase: new GraphQLScalarType<string, string>({
    name: 'CharUppercase',
    description: 'Single English Uppercase Character',
    serialize(value) {
      const str: string = parseString(value).trim()
      if(str.length === 1 && str.toUpperCase() === str) return str
      throw new GraphQLError("Validation Error: Invalid English Uppercase Character")
    },
    parseValue(value) {
      const str: string = parseString(value).trim()
      if(str.length === 1 && str.toUpperCase() === str) return str
      throw new GraphQLError("Validation Error: Invalid English Uppercase Character")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("TypeError: Invalid String")
    },
  }),
  CharLowercase: new GraphQLScalarType<string, string>({
    name: 'CharLowercase',
    description: 'Single English Lowercase Character',
    serialize(value) {
      const str: string = parseString(value).trim()
      if(str.length === 1 && str.toLowerCase() === str) return str
      throw new GraphQLError("Validation Error: Invalid English Lowercase Character")
    },
    parseValue(value) {
      const str: string = parseString(value).trim()
      if(str.length === 1 && str.toLowerCase() === str) return str
      throw new GraphQLError("Validation Error: Invalid English Lowercase Character")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("TypeError: Invalid String")
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
  Email: new GraphQLScalarType<string, string>({
    name: 'Email',
    description: 'Email',
    serialize(value) {
      const str: string = parseString(value)
      if(isEmail(str)) return str
      throw new GraphQLError("Validation Error: Invalid Email")
    },
    parseValue(value) {
      const str: string = parseString(value)
      if(isEmail(str)) return str
      throw new GraphQLError("Validation Error: Invalid Email")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("TypeError: Invalid String")
    },
  }),
  EmailCompany: new GraphQLScalarType<string, string>({
    name: 'EmailCompany',
    description: 'EmailCompany',
    serialize(value) {
      const str: string = parseString(value)
      if(isCompanyEmail(str)) return str
      throw new GraphQLError("Validation Error: Invalid Company Email")
    },
    parseValue(value) {
      const str: string = parseString(value)
      if(isCompanyEmail(str)) return str
      throw new GraphQLError("Validation Error: Invalid Company Email")
    },
    parseLiteral(ast) {
      if(ast.kind === Kind.STRING) {
        return this.parseValue!(ast.value)
      }
      throw new GraphQLError("TypeError: Invalid String")
    },
  }),
}