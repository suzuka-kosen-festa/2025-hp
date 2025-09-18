// @vitest-environment jsdom

import { composeStories } from "@storybook/react";
import { expect, it } from "vitest";

import * as stories from "./GoogleMap.stories";

const composed = composeStories(stories);

Object.entries(composed).forEach(([storyName, Story]) => {
  it(`googlemap snapshot: ${storyName}`, async () => {
    await Story.run();
    expect(document.body.firstChild).toMatchSnapshot();
  });
});
