import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import "@testing-library/jest-dom";
describe("Given Footer component", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Footer />);
    });
    test("Then it should display Robot", () => {
        const element = screen.getByText(/Robot/i);
        expect(element).toBeInTheDocument();
    });
});
