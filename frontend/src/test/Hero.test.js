import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {

    test("renders hero image", () => {

        render(<Hero />);

        const heroImage = screen.getByAltText(
            "Zerodha Hero Section"
        );

        expect(heroImage).toBeInTheDocument();

        // Notice the leading space below
        expect(heroImage).toHaveAttribute(
            "src",
            "images/homeHero.png"
        );
    });

    test("renders heading", () => {
        render(<Hero />);

        expect(
            screen.getByText("Invest in everything")
        ).toBeInTheDocument();
    });

    test("renders description", () => {
        render(<Hero />);

        expect(
            screen.getByText(
                "Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
            )
        ).toBeInTheDocument();
    });

    test("renders signup button", () => {
        render(<Hero />);

        expect(
            screen.getByRole("button", {
                name: "Signup"
            })
        ).toBeInTheDocument();
    });

});