export type TUid = string;

export interface IProfile {
    id: string;
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

export interface IStore {
    state: IState;
}
