export class Tweet{
    private id: number;
    private profilePic: string;
    private cardTitle: string;
    private cardDate: string;
    private cardDescription: string;
    private cardImage: string;
    private profileLink: string;
    private isLiked: boolean;

    constructor(id:number, profilePic: string, cardTitle: string, cardDate: string, cardDescription: string, cardImage:string, profileLink: string, isLiked: boolean){
        this.id = id;
        this.profilePic = profilePic;
        this.cardTitle = cardTitle;
        this.cardDate = cardDate;
        this.cardDescription = cardDescription;
        this.cardImage = cardImage;
        this.profileLink = profileLink;
        this.isLiked = isLiked;
    }
}