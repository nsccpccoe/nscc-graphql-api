import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../../index.js';
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
  Char: any;
  CharLowercase: any;
  CharUppercase: any;
  Date: Date;
  DateFuture: Date;
  DatePast: Date;
  /**
   * Email
   * Dependency: https://www.npmjs.com/package/email-validator
   */
  Email: any;
  /**
   * Company Email
   * Dependency: https://www.npmjs.com/package/company-email-validator
   */
  EmailCompany: any;
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
  /**
   * Uniform Resource Locator
   * Dependency: https://www.npmjs.com/package/is-url-superb
   */
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
  participant: Participant;
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
  coverImage: Image;
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
  links: Array<Link>;
  logo: Image;
  shortName: Scalars['StringNonEmpty'];
};

export type EventHostHead = {
  __typename?: 'EventHostHead';
  description: Scalars['StringNonEmpty'];
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
  signature: Image;
};

export type EventSponsor = {
  __typename?: 'EventSponsor';
  coverImage: Image;
  displayName: Scalars['StringNonEmpty'];
  id: Scalars['ID'];
  links: Array<Link>;
  logo: Image;
  shortName: Scalars['StringNonEmpty'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other'
}

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

export type Participant = {
  __typename?: 'Participant';
  collegeBranch?: Maybe<Scalars['StringNonEmpty']>;
  collegeDivision?: Maybe<Scalars['CharUppercase']>;
  collegeName?: Maybe<Scalars['StringNonEmpty']>;
  displayName?: Maybe<Scalars['StringNonEmpty']>;
  dob?: Maybe<Scalars['DatePast']>;
  email: Scalars['Email'];
  gender?: Maybe<Gender>;
  graduationYear?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  links: Array<Link>;
  phoneNumber?: Maybe<Scalars['StringNonEmpty']>;
  photoURL?: Maybe<Scalars['URL']>;
  prn?: Maybe<Scalars['StringNonEmpty']>;
  rollNumber?: Maybe<Scalars['StringNonEmpty']>;
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
  Char: ResolverTypeWrapper<Scalars['Char']>;
  CharLowercase: ResolverTypeWrapper<Scalars['CharLowercase']>;
  CharUppercase: ResolverTypeWrapper<Scalars['CharUppercase']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateFuture: ResolverTypeWrapper<Scalars['DateFuture']>;
  DatePast: ResolverTypeWrapper<Scalars['DatePast']>;
  Email: ResolverTypeWrapper<Scalars['Email']>;
  EmailCompany: ResolverTypeWrapper<Scalars['EmailCompany']>;
  Event: ResolverTypeWrapper<Event>;
  EventCertificate: ResolverTypeWrapper<EventCertificate>;
  EventCertificateType: EventCertificateType;
  EventHost: ResolverTypeWrapper<EventHost>;
  EventHostHead: ResolverTypeWrapper<EventHostHead>;
  EventSponsor: ResolverTypeWrapper<EventSponsor>;
  Float0To1: ResolverTypeWrapper<Scalars['Float0To1']>;
  FloatNegative: ResolverTypeWrapper<Scalars['FloatNegative']>;
  FloatNonNegative: ResolverTypeWrapper<Scalars['FloatNonNegative']>;
  FloatNonPositive: ResolverTypeWrapper<Scalars['FloatNonPositive']>;
  FloatNonZero: ResolverTypeWrapper<Scalars['FloatNonZero']>;
  FloatPositive: ResolverTypeWrapper<Scalars['FloatPositive']>;
  Gender: Gender;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntNegative: ResolverTypeWrapper<Scalars['IntNegative']>;
  IntNonNegative: ResolverTypeWrapper<Scalars['IntNonNegative']>;
  IntNonPositive: ResolverTypeWrapper<Scalars['IntNonPositive']>;
  IntNonZero: ResolverTypeWrapper<Scalars['IntNonZero']>;
  IntPositive: ResolverTypeWrapper<Scalars['IntPositive']>;
  Link: ResolverTypeWrapper<Link>;
  LinkTypeEnum: LinkTypeEnum;
  MetaData: ResolverTypeWrapper<MetaData>;
  Participant: ResolverTypeWrapper<Participant>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringNonEmpty: ResolverTypeWrapper<Scalars['StringNonEmpty']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Char: Scalars['Char'];
  CharLowercase: Scalars['CharLowercase'];
  CharUppercase: Scalars['CharUppercase'];
  Date: Scalars['Date'];
  DateFuture: Scalars['DateFuture'];
  DatePast: Scalars['DatePast'];
  Email: Scalars['Email'];
  EmailCompany: Scalars['EmailCompany'];
  Event: Event;
  EventCertificate: EventCertificate;
  EventHost: EventHost;
  EventHostHead: EventHostHead;
  EventSponsor: EventSponsor;
  Float0To1: Scalars['Float0To1'];
  FloatNegative: Scalars['FloatNegative'];
  FloatNonNegative: Scalars['FloatNonNegative'];
  FloatNonPositive: Scalars['FloatNonPositive'];
  FloatNonZero: Scalars['FloatNonZero'];
  FloatPositive: Scalars['FloatPositive'];
  ID: Scalars['ID'];
  Image: Image;
  Int: Scalars['Int'];
  IntNegative: Scalars['IntNegative'];
  IntNonNegative: Scalars['IntNonNegative'];
  IntNonPositive: Scalars['IntNonPositive'];
  IntNonZero: Scalars['IntNonZero'];
  IntPositive: Scalars['IntPositive'];
  Link: Link;
  MetaData: MetaData;
  Participant: Participant;
  Query: {};
  String: Scalars['String'];
  StringNonEmpty: Scalars['StringNonEmpty'];
  URL: Scalars['URL'];
}>;

export interface CharScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Char'], any> {
  name: 'Char';
}

export interface CharLowercaseScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CharLowercase'], any> {
  name: 'CharLowercase';
}

export interface CharUppercaseScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CharUppercase'], any> {
  name: 'CharUppercase';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateFutureScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateFuture'], any> {
  name: 'DateFuture';
}

export interface DatePastScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DatePast'], any> {
  name: 'DatePast';
}

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export interface EmailCompanyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailCompany'], any> {
  name: 'EmailCompany';
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
  participant?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  signatures?: Resolver<Array<ResolversTypes['EventHostHead']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventCertificateType'], ParentType, ContextType>;
  verifyURL?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventHostResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventHost'] = ResolversParentTypes['EventHost']> = ResolversObject<{
  coverImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['Link']>, ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventHostHeadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventHostHead'] = ResolversParentTypes['EventHostHead']> = ResolversObject<{
  description?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventSponsorResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['EventSponsor'] = ResolversParentTypes['EventSponsor']> = ResolversObject<{
  coverImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['Link']>, ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringNonEmpty'], ParentType, ContextType>;
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

export type ParticipantResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = ResolversObject<{
  collegeBranch?: Resolver<Maybe<ResolversTypes['StringNonEmpty']>, ParentType, ContextType>;
  collegeDivision?: Resolver<Maybe<ResolversTypes['CharUppercase']>, ParentType, ContextType>;
  collegeName?: Resolver<Maybe<ResolversTypes['StringNonEmpty']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['StringNonEmpty']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['DatePast']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Email'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  graduationYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['Link']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['StringNonEmpty']>, ParentType, ContextType>;
  photoURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  prn?: Resolver<Maybe<ResolversTypes['StringNonEmpty']>, ParentType, ContextType>;
  rollNumber?: Resolver<Maybe<ResolversTypes['StringNonEmpty']>, ParentType, ContextType>;
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
  Char?: GraphQLScalarType;
  CharLowercase?: GraphQLScalarType;
  CharUppercase?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateFuture?: GraphQLScalarType;
  DatePast?: GraphQLScalarType;
  Email?: GraphQLScalarType;
  EmailCompany?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  EventCertificate?: EventCertificateResolvers<ContextType>;
  EventHost?: EventHostResolvers<ContextType>;
  EventHostHead?: EventHostHeadResolvers<ContextType>;
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
  Participant?: ParticipantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringNonEmpty?: GraphQLScalarType;
  URL?: GraphQLScalarType;
}>;

