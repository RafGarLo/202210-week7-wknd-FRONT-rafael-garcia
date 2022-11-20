import { useRobots } from "../../../infrastructure/hooks/use.robots";
import { RobotList } from "../robot.list/robot.list";

function HomePage() {
    const { robots } = useRobots();
    return (
        <main>
            <h2>List of Robots</h2>
            <RobotList item={robots}></RobotList>
        </main>
    );
}
export default HomePage;
