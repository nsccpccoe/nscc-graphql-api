import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../index.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateFuture: Date;
  DatePast: Date;
  Float0To1: number;
  FloatNegative: number;
  FloatNonNegative: number;
  FloatNonPositive: number;
  FloatNonZero: number;
  FloatPositive: number;
  IntNegative: number;
  IntNonNegative: number;
  IntNonPositive: number;
  IntNonZero: number;
  IntPositive: number;
  StringNonEmpty: string;
};

export type MetaData = {
  __typename?: 'MetaData';
  buildAt: Scalars['String'];
  platform: Scalars['String'];
  version: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  metadata: MetaData;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = T | Promise<T> | Partial<T> | Promise<Partial<T>>;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateFuture: ResolverTypeWrapper<Scalars['DateFuture']>;
  DatePast: ResolverTypeWrapper<Scalars['DatePast']>;
  Float0To1: ResolverTypeWrapper<Scalars['Float0To1']>;
  FloatNegative: ResolverTypeWrapper<Scalars['FloatNegative']>;
  FloatNonNegative: ResolverTypeWrapper<Scalars['FloatNonNegative']>;
  FloatNonPositive: ResolverTypeWrapper<Scalars['FloatNonPositive']>;
  FloatNonZero: ResolverTypeWrapper<Scalars['FloatNonZero']>;
  FloatPositive: ResolverTypeWrapper<Scalars['FloatPositive']>;
  IntNegative: ResolverTypeWrapper<Scalars['IntNegative']>;
  IntNonNegative: ResolverTypeWrapper<Scalars['IntNonNegative']>;
  IntNonPositive: ResolverTypeWrapper<Scalars['IntNonPositive']>;
  IntNonZero: ResolverTypeWrapper<Scalars['IntNonZero']>;
  IntPositive: ResolverTypeWrapper<Scalars['IntPositive']>;
  MetaData: ResolverTypeWrapper<MetaData>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringNonEmpty: ResolverTypeWrapper<Scalars['StringNonEmpty']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateFuture: Scalars['DateFuture'];
  DatePast: Scalars['DatePast'];
  Float0To1: Scalars['Float0To1'];
  FloatNegative: Scalars['FloatNegative'];
  FloatNonNegative: Scalars['FloatNonNegative'];
  FloatNonPositive: Scalars['FloatNonPositive'];
  FloatNonZero: Scalars['FloatNonZero'];
  FloatPositive: Scalars['FloatPositive'];
  IntNegative: Scalars['IntNegative'];
  IntNonNegative: Scalars['IntNonNegative'];
  IntNonPositive: Scalars['IntNonPositive'];
  IntNonZero: Scalars['IntNonZero'];
  IntPositive: Scalars['IntPositive'];
  MetaData: MetaData;
  Query: {};
  String: Scalars['String'];
  StringNonEmpty: Scalars['StringNonEmpty'];
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateFutureScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateFuture'], any> {
  name: 'DateFuture';
}

export interface DatePastScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DatePast'], any> {
  name: 'DatePast';
}

export interface Float0To1ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Float0To1'], any> {
  name: 'Float0To1';
}

export interface FloatNegativeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FloatNegative'], any> {
  name: 'FloatNegative';
}

export interface FloatNonNegativeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FloatNonNegative'], any> {
  name: 'FloatNonNegative';
}

export interface FloatNonPositiveScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FloatNonPositive'], any> {
  name: 'FloatNonPositive';
}

export interface FloatNonZeroScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FloatNonZero'], any> {
  name: 'FloatNonZero';
}

export interface FloatPositiveScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FloatPositive'], any> {
  name: 'FloatPositive';
}

export interface IntNegativeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IntNegative'], any> {
  name: 'IntNegative';
}

export interface IntNonNegativeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IntNonNegative'], any> {
  name: 'IntNonNegative';
}

export interface IntNonPositiveScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IntNonPositive'], any> {
  name: 'IntNonPositive';
}

export interface IntNonZeroScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IntNonZero'], any> {
  name: 'IntNonZero';
}

export interface IntPositiveScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IntPositive'], any> {
  name: 'IntPositive';
}

export type MetaDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['MetaData'] = ResolversParentTypes['MetaData']> = ResolversObject<{
  buildAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  metadata?: Resolver<ResolversTypes['MetaData'], ParentType, ContextType>;
}>;

export interface StringNonEmptyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['StringNonEmpty'], any> {
  name: 'StringNonEmpty';
}

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  DateFuture?: GraphQLScalarType;
  DatePast?: GraphQLScalarType;
  Float0To1?: GraphQLScalarType;
  FloatNegative?: GraphQLScalarType;
  FloatNonNegative?: GraphQLScalarType;
  FloatNonPositive?: GraphQLScalarType;
  FloatNonZero?: GraphQLScalarType;
  FloatPositive?: GraphQLScalarType;
  IntNegative?: GraphQLScalarType;
  IntNonNegative?: GraphQLScalarType;
  IntNonPositive?: GraphQLScalarType;
  IntNonZero?: GraphQLScalarType;
  IntPositive?: GraphQLScalarType;
  MetaData?: MetaDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringNonEmpty?: GraphQLScalarType;
}>;

