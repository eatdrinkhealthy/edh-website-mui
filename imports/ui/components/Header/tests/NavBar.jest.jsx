/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../NavBar";

describe("<NavBar />", () => {
  it("should match render snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
