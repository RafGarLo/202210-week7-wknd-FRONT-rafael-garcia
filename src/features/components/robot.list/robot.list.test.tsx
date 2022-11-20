import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { RobotList } from "./robot.list";

describe("Given the RobotList component", () => {
    describe("When we render the component", () => {
        test("then it should display the Robot's list", () => {
            const mockRobot = [
                {
                    id: "223344",
                    name: "Juanito",
                    speed: 5,
                    endurance: 4,
                    dateOfCreation: "05/85",
                },
            ];
            render(
                <>
                    <Router>
                        <RobotList item={mockRobot}></RobotList>
                    </Router>
                </>
            );

            const element = screen.getByText(/Juanito/i);
            expect(element).toBeInTheDocument();
        });
    });
});
