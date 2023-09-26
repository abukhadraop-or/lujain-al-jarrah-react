/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "components/Footer/Footer";

const { getByText, getByAltText } = screen;

describe("Footer", () => {
  test("renders with correct content and items", () => {
    render(<Footer />);
    expect(getByAltText("footer-img")).toBeInTheDocument();
    expect(getByText("JOIN THE COMMUNITY")).toBeInTheDocument();

    const sectionTitles = [
      {
        title: "GET INVOLVED",
        items: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
      },
      {
        title: "COMMUNITY",
        items: ["Guidelines", "Discussions", "Leaderboard", "Twitter"],
      },
    ];
    sectionTitles.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument();
    });
  });
});
