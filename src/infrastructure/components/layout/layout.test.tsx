import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./layout";
import "@testing-library/jest-dom";

describe("Given Layout component", () => {
    describe("When we render the component", () => {
        test('Then it should display "testing layout"', () => {
            render(
                <Router>
                    <Layout>
                        <p>Testing layout</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Testing layout/i);
            expect(element).toBeInTheDocument();
        });
    });
});
