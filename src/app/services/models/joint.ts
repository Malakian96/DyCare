export interface Knee {
    id: string;
    name: string;
}

export interface Neck {
    id: string;
    name: string;
}

export interface Shoulder {
    id: string;
    name: string;
}

export interface Hip {
    id: string;
    name: string;
}

export interface Joint {
    knee: Knee;
    neck: Neck;
    shoulder: Shoulder;
    hip: Hip;
}
