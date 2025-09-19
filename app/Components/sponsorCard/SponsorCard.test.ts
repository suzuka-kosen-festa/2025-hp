// @vitest-environment jsdom

import { composeStories } from "@storybook/react";
import { expect, it } from "vitest";
import * as stories from "./SponsorCard.stories";


const { Default } = composeStories(stories);

it("sponsor card snapshot", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
