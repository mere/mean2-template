export class Guid {
    private guid: string;

    constructor(public g: string) {
        this.guid = g;
    }

    static create(includeSeparator: boolean = true) : Guid {
        var result: string;
        var i: string;
        var j: number;
        var separator = (includeSeparator) ? '-' : '';

        result = '';
        for (j = 0; j < 32; j++) {
            if (j == 8 || j == 12 || j == 16 || j == 20)
                result = result + separator;
            i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
            result = result + i;
        }
        return new Guid(result);
    }

    public toString() : string {
        return this.guid;
    }
}