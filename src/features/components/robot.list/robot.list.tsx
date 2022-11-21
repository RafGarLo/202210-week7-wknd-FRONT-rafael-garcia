import { RobotItem } from "../robot.item/robot.item";

import { Robot } from "../../../models/robot";
import { useRobots } from "../../../infrastructure/hooks/use.robots";

export function RobotList({ item }: { item: Robot[] }) {
    const { handleAdd } = useRobots();
    return (
        <div>
            <ul>
                {item.map((item: Robot) => (
                    <li key={item.id}>
                        <RobotItem item={item}></RobotItem>
                        <button
                            onClick={() => {
                                handleAdd(item);
                            }}
                        >
                            Add Robot
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
