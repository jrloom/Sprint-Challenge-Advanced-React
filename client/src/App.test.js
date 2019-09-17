import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import ListPlayers from "./Components/ListPlayers";

it("App renders without crashing", () => {
  render(<App />);
});

it('Header renders as "Women\'s World Cup Players"', () => {
  expect(render(<App />).getByText(/women\'s world cup players/i));
});

it('Subheader renders as "(Ranked by Google Trends)"', () => {
  expect(render(<App />).getByText(/(ranked by google trends)/i));
});

it("Renders player name", () => {
  expect(render(<ListPlayers players={[{ name: "Alex Morgan" }]} />).getByText("Alex Morgan"));
  expect(render(<ListPlayers players={[{ name: "Daniëlle van de Donk" }]} />).getByText("Daniëlle van de Donk"));
});

it("Renders player's country", () => {
  expect(render(<ListPlayers players={[{ country: "Brazil" }]} />).getByText("Brazil"));
  expect(render(<ListPlayers players={[{ country: "Netherlands" }]} />).getByText("Netherlands"));
});

it("Renders number of times searched for", () => {
  expect(render(<ListPlayers players={[{ searches: "99" }]} />).getByText("99"));
  expect(render(<ListPlayers players={[{ searches: "4" }]} />).getByText("4"));
});
