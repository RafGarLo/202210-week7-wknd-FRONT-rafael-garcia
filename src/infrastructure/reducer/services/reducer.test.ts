import { Robot } from "../../../models/robot";
import { loadActionCreator } from "./action.creators";
import { actionTypes } from "./action.types";
import { robotReducer } from "./reducer";

const mockRobot = {
    id: "5",
    name: "Conan",
    img: "",
    speed: 9,
    endurance: 9,
    dateOfCreation: "15",
};
let action: { type: string; payload: unknown };
let state: Array<Robot>;

describe("Given a state and an action", () => {
    describe("When ActionTypes is load", () => {
        test("Then it should return payload as a new state", () => {
            const newState = robotReducer([], loadActionCreator([mockRobot]));
            expect(newState).toEqual([mockRobot]);
        });
    });
    describe("When the action is not load", () => {
        test("Then it should return a new instance of state", () => {
            const newState = robotReducer([mockRobot], {
                type: "",
                payload: [],
            });
            expect(newState).toEqual([mockRobot]);
        });
    });
    describe("When the action is add", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: mockRobot,
            };
            state = [];
        });
        test("Then the mockItem should be added", () => {
            const result = robotReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockRobot, title: "Update robot" },
            };
            state = [mockRobot];
        });
        test("Then the returned state should include the action payload", () => {
            const result = robotReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockRobot, id: 2, title: "Update product" },
            };
            state = [mockRobot];
        });
        test("Then the returned state should not change the original state", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(state);
        });
    });
    describe("When the action is delete", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...mockRobot, id: 3 },
            };
            state = [mockRobot];
        });
        test("Then the returned state should be deleted item", () => {
            const result = robotReducer(state, action);
        });
    });
    describe("When the action is any other", () => {
        beforeEach(() => {
            action = {
                type: "",
                payload: null,
            };
            state = [mockRobot];
        });
        test("Then the returned state should not change", () => {
            const result = robotReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
