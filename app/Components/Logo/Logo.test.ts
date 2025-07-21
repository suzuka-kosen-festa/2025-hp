// @vitest-environment jsdom

import { composeStories } from "@storybook/react";
import { expect, it } from "vitest";

import * as stories from "./Logo.stories";

const composedStories = composeStories(stories);
Object.entries(composedStories).forEach(([storyName, Story]) => {
  it(`logo snapshot: ${storyName}`, async () => {
    await Story.run();
    expect(document.body.firstChild).toMatchSnapshot();
  });
});
