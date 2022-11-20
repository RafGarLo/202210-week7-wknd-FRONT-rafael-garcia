import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import HomePage from "./home.page";
import { appStore } from "../../../infrastructure/components/store/store";
import { Provider } from "react-redux";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );

            const element = screen.getByText(/robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
