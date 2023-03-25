export enum Collections {
  accounts = "accounts",
  events = "events",
  festivals = "festivals",
  registrations = "registrations",
  submissions = "submissions",
  likes = "likes",
}

export enum LinkTypeEnum {
  _self = "_self",
  _blank = "_blank",
  _parent = "_parent",
  _top = "_top",
}

export enum EventCertificateType {
  Achievement = "Achievement",
  Participation = "Participation",
  Appreciation = "Appreciation",
  Completion = "Completion",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface Image {
  light: string // image url for light mode
  dark: string  // image url for dark mode
}

export interface Link {
  displayText: string
  href: string
  target: LinkTypeEnum
}

export interface User {
  id: string
  email: string
  displayName: string
  phoneNumber: string
  gender: Gender
  dob: Date
  photoURL: URL
  graduationYear: number
  collegeName: string
  collegeBranch: string
  collegeDivision: string
  prn: string
  rollNumber: string
  link: Link[]
}

export interface EventHost {
  id: string
  displayName: string
  shortName: string
  logo: Image
  coverImage: Image
  links: Link[]
}

export interface EventSponsor {
  id: string
  displayName: string
  shortName: string
  logo: Image
  coverImage: Image
  links: Link[]
}

export interface Dignitaries {
  id: string
  displayName: string
  shortName: string
  photoURL: string
  links: Link[]
  signature: Image
}

export interface Event {
  id: string
  title: string
  subtitle: string
  description: string
  startAt: Date
  endAt: Date
  featured: boolean
  coverImage: Image           
  hosts: EventHost["id"][]   // array of organizers ids
  sponsors: EventSponsor["id"][]   // array of organizers ids
  landingPage: Link
  registration: Link
  community: Link
}

export interface EventCertificate {
  id: string
  type: EventCertificateType
  event: Event["id"]
  participant: User["id"]
  signatures: Dignitaries["id"][]
}