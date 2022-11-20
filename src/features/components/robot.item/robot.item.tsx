import { Robot } from "../../../models/robot";

export function RobotItem({ item }: { item: Robot }) {
    return (
        <>
            <p>{item.name}</p>
            <p>Speed: {item.speed}</p>
            <p>Endurance: {item.endurance}</p>
            <p>Date of Creation: {item.dateOfCreation}</p>
        </>
    );
}
