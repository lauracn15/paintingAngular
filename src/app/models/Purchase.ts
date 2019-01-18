export interface Purchase {
    Title: string;
    Price: number;
    BuyerName: string;
    BuyerEmail: string;
    StreetAddress: string;
    AptNumber?: string;
    City: string;
    State: string;
    Zip: number;
    PurchaseId: number;
    PurchaseDate: Date;
    
}