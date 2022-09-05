export interface Stick {
    id: string;
    name: string;
}

export interface Chair {
    id: string;
    name: string;
}

export interface Weight {
    id: string;
    name: string;
}

export interface Tool {
    stick: Stick;
    chair: Chair;
    weight: Weight;
}

