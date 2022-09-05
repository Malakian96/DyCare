import { Tool } from "./tool";

export interface Signal {
    id: string;
    min: number;
    max: number;
}

export interface Exercise {
    id: string;
    name: string;
    img: string;
    joint: string;
    tools: Tool[];
    signal: Signal;
}
