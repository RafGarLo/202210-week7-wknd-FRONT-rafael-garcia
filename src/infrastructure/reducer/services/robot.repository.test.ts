import { RobotRepository } from "./robot.repository";
import "@testing-library/jest-dom";
const mockRobot = {
    id: "5",
    name: "Atlas",
    speed: 5,
    endurance: 3,
    dateOfCreation: "15",
};

describe("Given robot api service", () => {
    describe("When we instatiate it", () => {
        let service: RobotRepository;
        beforeEach(() => {
            service = new RobotRepository();
        });
        test("Then if I use service.error(), it should return an error", () => {
            const error = service.createError(
                new Response("Error", {
                    status: 400,
                    statusText: "error",
                })
            );
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(error).toEqual(result);
        });
        test(`Then if I use service.getRobot() 
        it should return a Promise of an Array of Task`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
            // expect(result).toEqual([]);
        });
        test("Then if I use getAll() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.getAll();
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
        test("Then if I use service.createProduct, it should return a Promise of the created product", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockRobot),
            });
            const result = await service.create(mockRobot);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockRobot);
        });
        test("Then if I use create() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.create(mockRobot);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
        test("Then if I use service delete, it should return an empty array of product", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.delete(mockRobot.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test("then if I use service update it should return promise of array of robots", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockRobot]),
            });
            const result = await service.update(mockRobot);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockRobot]);
        });
        test("Then if I use update() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.update(mockRobot);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });
});
