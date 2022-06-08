export enum RandomAvatarEnum {
  movie,
  game,
  album,
  book,
  face,
  fashion,
  shoes,
  watch,
  furniture
}

interface ContactAddress {
  zipcode: string | undefined
}

export interface ContactTypes {
  id: number,
  name: string | undefined,
  email: string | undefined,
  username: string | undefined,
  address: ContactAddress
}