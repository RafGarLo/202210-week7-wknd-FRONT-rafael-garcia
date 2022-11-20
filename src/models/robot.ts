export type ProtoRobot = {
    name: string;
    speed?: number;
    endurance?: number;
};

export type Robot = {
    id: string;
    name: string;
    speed: number;
    endurance: number;
    dateOfCreation: string;
};

export class RobotModel {
    constructor(
        public name: string,
        public img: string,
        public speed: number,
        public endurance: number,
        public dateOfCreation: string
    ) {}
}
