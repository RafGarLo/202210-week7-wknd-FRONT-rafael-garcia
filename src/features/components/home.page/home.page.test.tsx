import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import { appStore } from "../../../infrastructure/components/store/store";
import { Provider } from "react-redux";
import HomePage from "./home.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
