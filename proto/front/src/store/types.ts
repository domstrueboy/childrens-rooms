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

export interface IState {
    profile: IProfile;
}

export interface IStore {
    state: IState;
}
