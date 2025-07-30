// @vitest-environment jsdom

import { composeStories } from "@storybook/react";

import { expect, it } from "vitest";

import * as stories from "./Footer.stories";

const { Extensive } = composeStories(stories);
it("footer snapshot", async () => {
  await Extensive.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
