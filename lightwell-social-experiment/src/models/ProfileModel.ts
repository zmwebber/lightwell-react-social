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
    profile_background_color: string,
    profile_background_image_url: string,
    profile_image_url: string,
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
    profile_background_color;
    profile_background_image_url;
    profile_image_url;

    constructor(email: string, password: string) {
        this._id = ""
        this.name = ""
        this.screen_name = ""
        this.email = email
        this.password = password
        this.dateOfBirth = new Date()
        this.createdAt = new Date()
        this.description = ""
        this.url = ""
        this.protected = false
        this.followers_count = 0
        this.friends_count = 0
        this.listed_count = 0
        this.favorites_count = 0
        this.verified = false
        this.statuses_count = 0
        this.profile_background_color = ""
        this.profile_background_image_url = ""
        this.profile_image_url = ""
    }
}