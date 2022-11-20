import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";

test("renders learn react link", () => {
    render(<RouterProvider router={Router} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
