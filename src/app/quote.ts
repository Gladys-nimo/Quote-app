
export class Quote {
    showQuoteDetails: boolean;
    constructor(public author: string, public description: string, public votes: string) {
        this.showQuoteDetails = false;
    }
 }
