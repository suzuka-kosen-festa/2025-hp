// @vitest-environment jsdom

import { composeStories } from "@storybook/react";
import { expect, it } from "vitest";

import * as stories from "./StageEventCard.stories";

const { Default } = composeStories(stories);
it("should render a snapshot", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
