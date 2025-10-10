// @vitest-environment jsdom

import { composeStories } from "@storybook/react";
import { expect, it } from "vitest";
import * as stories from "./EventSummary.stories";

const { Default } = composeStories(stories);

it("should render the event summary correctly", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
