export type Profile = {
    name: String,
    screen_name: String,
    email: String,
    password: String,
    dateOfBirth:Date,
    createdAt: Date,
    description: String,
    url: String,
    protected: Boolean,
    followers_count: Number,
    friends_count: Number,
    listed_count: Number,
    favorites_count: Number,
    verified: Boolean,
    statuses_count: Number,
    profile_background_color: String,
    profile_background_image_url: String,
    profile_image_url: String,
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