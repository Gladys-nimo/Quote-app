
export class Quote {
    showQuoteDetails: boolean;
    constructor( public id: number, public name: string, public author: string, public quote: string) {
        this.showQuoteDetails = false;
    }
 }
