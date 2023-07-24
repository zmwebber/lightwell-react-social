import { Theme } from '../App';
import { Media } from './MediaModel'

export type Profile = {
    name: string,
    screen_name: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    createdAt: Date,
    description: string,
    url: string,
    protected: boolean,
    followers_count: number,
    friends_count: number,
    listed_count: number,
    favorites_count: number,
    verified: boolean,
    statuses_count: number,
    profile_banner_id: string,
    profile_banner: Media | null,
    profile_image_id: string,
    profile_image: Media | null,
    theme: String
}

export class User implements Profile {
    _id;
    name;
    screen_name;
    email;
    password;
    dateOfBirth;
    createdAt;
    description;
    url;
    protected;
    followers_count;
    friends_count;
    listed_count;
    favorites_count;
    verified;
    statuses_count;
    profile_banner_id;
    profile_banner;
    profile_image_id;
    profile_image;
    theme;


    constructor();
    constructor(profile?: Profile, id?: string) {
        this._id = id ?? null
        this.name = profile?.name ?? ""
        this.screen_name = profile?.screen_name ?? ""
        this.email = profile?.email ?? ""
        this.password = profile?.password ?? ""
        this.dateOfBirth = profile?.dateOfBirth ?? new Date()
        this.createdAt = profile?.createdAt ?? new Date()
        this.description = profile?.description ?? ""
        this.url = profile?.url ?? ""
        this.protected = profile?.protected ?? false
        this.followers_count = profile?.followers_count ?? 0
        this.friends_count = profile?.friends_count ?? 0
        this.listed_count = profile?.listed_count ?? 0
        this.favorites_count = profile?.favorites_count ?? 0
        this.verified = profile?.verified ?? false
        this.statuses_count = profile?.statuses_count ?? 0
        this.profile_banner_id = profile?.profile_banner_id ?? ""
        this.profile_banner = profile?.profile_banner ?? null
        this.profile_image_id = profile?.profile_image_id ?? ""
        this.profile_image = profile?.profile_image ?? null
        this.theme = profile?.theme ?? "light"
    }
}