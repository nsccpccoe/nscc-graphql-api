// database schema

export enum Collections {
  accounts = "accounts",
  events = "events",
  festivals = "festivals",
  registrations = "registrations",
  submissions = "submissions",
  likes = "likes",
}

export enum OrganizerId {
  nsccpccoe = "nsccpccoe",
  codechefpccoe = "codechefpccoe",
  itsa = "itsa"
}

export interface Organizer {
  id: OrganizerId,        // Organizer Id
  shortName: string,      // Short Name of Organizer
  displayName: string,    // Full Name of Organizer
  avatarLight: string,    // Logo for Day Mode
  avatarNight: string,    // Logo for Night Mode
  cover: string           // cover image url
}

export type LinkType = "offsite" | "onsite"

export interface Event {
  displayName: string
  subtitle: string
  description: string
  startAt: Date
  endAt: Date
  featured: boolean
  cover: string               // cover image url
  organizers: OrganizerId[]   // array of organizers ids
  eventPage: {
    displayText: string
    link: string
    type: LinkType
  }
  registration: {
    displayText: string
    link: string
    type: LinkType
  }
  community: {
    displayText: string
    link: string
    type: LinkType
  }
}