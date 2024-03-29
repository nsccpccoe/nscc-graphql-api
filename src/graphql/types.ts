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
  /** Non Empty String */
  StringNonEmpty: string;
  /** Uniform Resource Locator */
  URL: any;
};

export type Event = {
  __typename?: 'Event';
  community: Link;
  coverImage: Image;
  description: Scalars['StringNonEmpty'];
  endAt: Scalars['Date'];
  featured: Scalars['Boolean'];
  hosts: Array<EventHost>;
  id: Scalars['ID'];
  landingPage: Link;
  registration: Link;
  sponsors: Array<EventSponsor>;
  startAt: Scalars['Date'];
  subtitle: Scalars['StringNonEmpty'];
  title: Scalars['StringNonEmpty'];
};

export type EventCertificate = {
  __typename?: 'EventCertificate';
  downloadURL: Link;
  event: Event;
  id: Scalars['ID'];
  participant: EventParticipant;
  signatures: Array<EventHostHead>;
  type: EventCertificateType;
  verifyURL: Link;
};

export enum EventCertificateType {
  Achievement = 'Achievement',
  Appreciation = 'Appreciation',
  Completion = 'Completion',
  Participation = 'Participation'
}

export type EventHost = {
  __typename?: 'EventHost';
  coverImage: Scalars['URL'];
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
  logo: Image;
  shortName: Scalars['StringNonEmpty'];
  website: Scalars['URL'];
};

export type EventHostHead = {
  __typename?: 'EventHostHead';
  description: Scalars['StringNonEmpty'];
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
  signature: Image;
};

export type EventParticipant = {
  __typename?: 'EventParticipant';
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
};

export type EventSponsor = {
  __typename?: 'EventSponsor';
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
  logo: Image;
  shortName: Scalars['StringNonEmpty'];
  website: Link;
};

export type Image = {
  __typename?: 'Image';
  dark: Scalars['URL'];
  light: Scalars['URL'];
};

export type Link = {
  __typename?: 'Link';
  displayText: Scalars['StringNonEmpty'];
  href: Scalars['URL'];
  target: LinkTypeEnum;
};

export enum LinkTypeEnum {
  Blank = '_blank',
  Parent = '_parent',
  Self = '_self',
  Top = '_top'
}

export type MetaData = {
  __typename?: 'MetaData';
  /** Last Deployment Time */
  buildAt: Scalars['StringNonEmpty'];
  /** Name of a Server Owner */
  name: Scalars['StringNonEmpty'];
  /** Last Deployment Platform */
  platform: Scalars['StringNonEmpty'];
  /** API Version */
  version: Scalars['StringNonEmpty'];
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
  Event: ResolverTypeWrapper<Event>;
  EventCertificate: ResolverTypeWrapper<EventCertificate>;
  EventCertificateType: EventCertificateType;
  EventHost: ResolverTypeWrapper<EventHost>;
  EventHostHead: ResolverTypeWrapper<EventHostHead>;
  EventParticipant: ResolverTypeWrapper<EventParticipant>;
  EventSponsor: ResolverTypeWrapper<EventSponsor>;
  Float0To1: ResolverTypeWrapper<Scalars['Float0To1']>;
  FloatNegative: ResolverTypeWrapper<Scalars['FloatNegative']>;
  FloatNonNegative: ResolverTypeWrapper<Scalars['FloatNonNegative']>;
  FloatNonPositive: ResolverTypeWrapper<Scalars['FloatNonPositive']>;
  FloatNonZero: ResolverTypeWrapper<Scalars['FloatNonZero']>;
  FloatPositive: ResolverTypeWrapper<Scalars['FloatPositive']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  IntNegative: ResolverTypeWrapper<Scalars['IntNegative']>;
  IntNonNegative: ResolverTypeWrapper<Scalars['IntNonNegative']>;
  IntNonPositive: ResolverTypeWrapper<Scalars['IntNonPositive']>;
  IntNonZero: ResolverTypeWrapper<Scalars['IntNonZero']>;
  IntPositive: ResolverTypeWrapper<Scalars['IntPositive']>;
  Link: ResolverTypeWrapper<Link>;
  LinkTypeEnum: LinkTypeEnum;
  MetaData: ResolverTypeWrapper<MetaData>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringNonEmpty: ResolverTypeWrapper<Scalars['StringNonEmpty']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateFuture: Scalars['DateFuture'];
  DatePast: Scalars['DatePast'];
  Event: Event;
  EventCertificate: EventCertificate;
  EventHost: EventHost;
  EventHostHead: EventHostHead;
  EventParticipant: EventParticipant;
  EventSponsor: EventSponsor;
  Float0To1: Scalars['Float0To1'];
  FloatNegative: Scalars['FloatNegative'];
  FloatNonNegative: Scalars['FloatNonNegative'];
  FloatNonPositive: Scalars['FloatNonPositive'];
  FloatNonZero: Scalars['FloatNonZero'];
  FloatPositive: Scalars['FloatPositive'];
  ID: Scalars['ID'];
  Image: Image;
  IntNegative: Scalars['IntNegative'];
  IntNonNegative: Scalars['IntNonNegative'];
  IntNonPositive: Scalars['IntNonPositive'];
  IntNonZero: Scalars['IntNonZero'];
  IntPositive: Scalars['IntPositive'];
  Link: Link;
  MetaData: MetaData;
  Query: {};
  String: Scalars['String'];
  StringNonEmpty: Scalars['StringNonEmpty'];
  URL: Scalars['URL'];
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

export type EventResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  community?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  coverImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  featured?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hosts?: Resolver<Array<ResolversTypes['EventHost']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  landingPage?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  sponsors?: Resolver<Array<ResolversTypes['EventSponsor']>, ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventCertificateResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventCertificate'] = ResolversParentTypes['EventCertificate']> = ResolversObject<{
  downloadURL?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  participant?: Resolver<ResolversTypes['EventParticipant'], ParentType, ContextType>;
  signatures?: Resolver<Array<ResolversTypes['EventHostHead']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventCertificateType'], ParentType, ContextType>;
  verifyURL?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventHostResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventHost'] = ResolversParentTypes['EventHost']> = ResolversObject<{
  coverImage?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventHostHeadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventHostHead'] = ResolversParentTypes['EventHostHead']> = ResolversObject<{
  description?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventParticipantResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventParticipant'] = ResolversParentTypes['EventParticipant']> = ResolversObject<{
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventSponsorResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventSponsor'] = ResolversParentTypes['EventSponsor']> = ResolversObject<{
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

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

export type ImageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = ResolversObject<{
  dark?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  light?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

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

export type LinkResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  displayText?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  href?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['LinkTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['MetaData'] = ResolversParentTypes['MetaData']> = ResolversObject<{
  buildAt?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  metadata?: Resolver<ResolversTypes['MetaData'], ParentType, ContextType>;
}>;

export interface StringNonEmptyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['StringNonEmpty'], any> {
  name: 'StringNonEmpty';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  DateFuture?: GraphQLScalarType;
  DatePast?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  EventCertificate?: EventCertificateResolvers<ContextType>;
  EventHost?: EventHostResolvers<ContextType>;
  EventHostHead?: EventHostHeadResolvers<ContextType>;
  EventParticipant?: EventParticipantResolvers<ContextType>;
  EventSponsor?: EventSponsorResolvers<ContextType>;
  Float0To1?: GraphQLScalarType;
  FloatNegative?: GraphQLScalarType;
  FloatNonNegative?: GraphQLScalarType;
  FloatNonPositive?: GraphQLScalarType;
  FloatNonZero?: GraphQLScalarType;
  FloatPositive?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  IntNegative?: GraphQLScalarType;
  IntNonNegative?: GraphQLScalarType;
  IntNonPositive?: GraphQLScalarType;
  IntNonZero?: GraphQLScalarType;
  IntPositive?: GraphQLScalarType;
  Link?: LinkResolvers<ContextType>;
  MetaData?: MetaDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringNonEmpty?: GraphQLScalarType;
  URL?: GraphQLScalarType;
}>;

