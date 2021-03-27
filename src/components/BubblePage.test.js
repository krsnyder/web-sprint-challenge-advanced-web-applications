import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
  
test("Renders BubblePage without errors", () => {
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting",async () => {
  const rerender = render(<BubblePage />)
  rerender(<BubblePage />)
  
  waitFor(async() => {
    const softYellow = await screen.findByText(/softyellow/i) 
    expect(softYellow).toBeInTheDocument()
  })
});