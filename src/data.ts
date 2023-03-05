import { Organizer, OrganizerId } from "./db";

export const organizers: Record<OrganizerId, Organizer> = {
  codechefpccoe: {
    id: OrganizerId.codechefpccoe,
    shortName: "CPC",
    displayName: "CodeChef <PCCOE> Chapter",
    avatarLight: "",
    avatarNight: "",
    cover: ""
  },
  nsccpccoe: {
    id: OrganizerId.nsccpccoe,
    shortName: "NSCC PCCOE",
    displayName: "CodeChef <PCCOE> Chapter",
    avatarLight: "",
    avatarNight: "",
    cover: ""
  },
  itsa: {
    id: OrganizerId.itsa,
    shortName: "ITSA",
    displayName: "Information Technology Student Association",
    avatarLight: "",
    avatarNight: "",
    cover: ""
  },
}