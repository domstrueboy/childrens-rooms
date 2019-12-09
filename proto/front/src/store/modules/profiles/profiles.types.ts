import { TUid } from '../modules.types';

export interface IProfile {
  title: string;
  description?: string;
  avatar?: string;
  places: TUid[];
  masters: TUid[];
  activities: TUid[];
  events: TUid[];
}

export type TProfiles = Record<TUid, IProfile>;

export interface IState {
  profiles: TProfiles;
}
