export class TodoItem {
    content: string;
    complete: boolean = false;

    constructor(values:Object = {}){
        Object.assign(this, values)
    }
}
