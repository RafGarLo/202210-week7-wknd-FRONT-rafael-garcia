import { RobotItem } from "../robot.item/robot.item";

import { Robot } from "../../../models/robot";

export function RobotList({ item }: { item: Robot[] }) {
    return (
        <div>
            <ul>
                {item.map((item: Robot) => (
                    <li key={item.id}>
                        <RobotItem item={item}></RobotItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
