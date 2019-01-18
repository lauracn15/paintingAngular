export interface Painting {
    PaintingEntityId: number;
    Artist: string;
    Title: string;
    Size: string;
    Color: string;
    Price: number;
    IsSold: boolean;
    ImageUrl: string;
    DateAdded?: Date;
}
