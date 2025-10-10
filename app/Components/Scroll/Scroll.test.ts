// @vitest-environment jsdom

import { composeStories } from "@storybook/react";
import { expect, it } from "vitest";

import * as stories from "./Scroll.stories";

const { Default } = composeStories(stories);

it("scroll snapshot", async () => {
  await Default.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
