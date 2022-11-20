import { renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { ProtoRobot, Robot } from "../../models/robot";
import { appStore } from "../components/store/store";
import { RobotRepository } from "../reducer/services/robot.repository";
import { Provider } from "react-redux";
import { useRobots } from "./use.robots";

jest.mock("../reducer/services/robot.repository");

const mock1 = {
    endurance: 5,
};
const mock2 = {
    id: "string",
    name: "string",
    img: "string",
    speed: 9,
    endurance: 9,
    dateOfCreation: "string",
};

describe("Given the hook", () => {
    let result: {
        current: {
            robots: Array<Robot>;
            handleAdd: (newRobot: ProtoRobot) => void;
            handleDelete: (robot: Robot) => void;
            handleUpdate: (updateRobot: Partial<Robot>) => void;
        };
    };

    beforeEach(() => {
        RobotRepository.prototype.getAll = jest.fn().mockResolvedValue([mock2]);
        RobotRepository.prototype.create = jest.fn().mockResolvedValue(mock2);
        RobotRepository.prototype.delete = jest.fn().mockResolvedValue(mock2);
        RobotRepository.prototype.update = jest.fn().mockResolvedValue(mock1);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useRobots(), { wrapper }));
    });

    test("if we use HandleAdd should add a new item to the array of robots", async () => {
        await waitFor(() => {
            result.current.handleAdd(mock2);
            expect(result.current.robots.at(-1)).toEqual(mock2);
        });
        await waitFor(() => {
            expect(RobotRepository.prototype.create).toHaveBeenCalled();
        });
    });
    test("if we use HandleUpdate should change an item from the array of robots", async () => {
        await waitFor(() => {
            result.current.handleUpdate(mock1);
            expect(result.current.robots).toContain(mock2);
        });
        await waitFor(() => {
            expect(RobotRepository.prototype.update).toHaveBeenCalled();
        });
    });
    test("if we use HandleDelete should delete an item from the array of robots", async () => {
        await waitFor(() => {
            result.current.handleDelete(mock2);
            expect(result.current.robots).toEqual([]);
        });
        await waitFor(() => {
            expect(RobotRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
