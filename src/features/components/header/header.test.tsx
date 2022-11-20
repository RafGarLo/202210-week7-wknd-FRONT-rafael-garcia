import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "./header";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Header />
                </Router>
            );

            const element = screen.getByText(/Robot/i);
            expect(element).toBeInTheDocument();
        });
    });
});
