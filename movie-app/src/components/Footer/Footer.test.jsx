/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Footer from "components/Footer/Footer";

describe("Footer", () => {
  test("renders with correct content and items", () => {
    const { getByText, getByAltText } = render(<Footer />);
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
