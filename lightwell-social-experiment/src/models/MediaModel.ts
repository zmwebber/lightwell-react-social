
export class Media {
    _id?: string | null;
    data: string | ArrayBuffer | null;
    fileName: string;
    contentType: string;
    createdAt: Date;

    constructor() {
        this._id = null
        this.data = ""
        this.fileName = ""
        this.contentType = ""
        this.createdAt = new Date()
    }
}