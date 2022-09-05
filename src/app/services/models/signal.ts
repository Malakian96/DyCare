export interface Pitch {
    id: string;
    name: string;
}

export interface Roll {
    id: string;
    name: string;
}

export interface Yaw {
    id: string;
    name: string;
}

export interface Signal {
    pitch: Pitch;
    roll: Roll;
    yaw: Yaw;
}
