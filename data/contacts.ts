export interface ContactChannel {
  id: 'email' | 'github' | 'whatsapp';
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  description: string;
  external: boolean;
}

export const CONTACT_HEADER = {
  mainHeadline: "LET'S CREATE SOMETHING.",
  secondaryHeadline: 'GOT AN IDEA?',
  tertiaryHeadline: "LET'S TURN IT INTO SOMETHING REAL.",
  finalSignatureBrand: 'LEOVAN.',
  finalSignatureIdentity: 'ALSO KNOWN AS MOHAMMAD SOFANDI.',
  finalSignatureSlogan: 'CREATING BEYOND THE SCREEN.',
} as const;

export const CONTACT_DETAILS = {
  email: 'vannn626@gmail.com',
  github: 'https://github.com/vannn626-afk',
  whatsappChannel: 'https://whatsapp.com/channel/0029VbEFmPM6buMLQgdlie1J',
} as const;

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'vannn626@gmail.com',
    href: 'mailto:vannn626@gmail.com',
    actionLabel: 'SEND EMAIL',
    description: 'Direct electronic mail for project inquiries, ideas, and digital collaboration.',
    external: false,
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/vannn626-afk',
    href: 'https://github.com/vannn626-afk',
    actionLabel: 'OPEN GITHUB PROFILE',
    description: 'Code repositories, open experiments, and ongoing web & app development work.',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WHATSAPP CHANNEL',
    value: 'Official LEOVAN Broadcast Channel',
    href: 'https://whatsapp.com/channel/0029VbEFmPM6buMLQgdlie1J',
    actionLabel: 'JOIN WHATSAPP CHANNEL',
    description: 'Public broadcast channel for project updates, tool releases, and announcements.',
    external: true,
  },
] as const;
