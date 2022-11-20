import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RobotRepository } from "../reducer/services/robot.repository";
import { rootState } from "../../infrastructure/components/store/store";
import * as ac from "../../infrastructure/reducer/services/action.creators";
import { ProtoRobot, Robot } from "../../models/robot";

export const useRobots = () => {
    const robots = useSelector((state: rootState) => state.robots);
    const dispatcher = useDispatch();
    const apiRobot = useMemo(() => new RobotRepository(), []);

    useEffect(() => {
        apiRobot
            .getAll()
            .then((robots) => dispatcher(ac.loadActionCreator(robots)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiRobot, dispatcher]);

    const handleAdd = (newRobot: ProtoRobot) => {
        apiRobot
            .create(newRobot)
            .then((robot: Robot) => dispatcher(ac.addActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateRobot: Partial<Robot>) => {
        apiRobot
            .update(updateRobot)
            .then((robot: Robot) => dispatcher(ac.updateActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (robot: Robot) => {
        apiRobot
            .delete(robot.id)
            .then(() => dispatcher(ac.deleteActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        robots,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
