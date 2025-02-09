import type { Preview } from "@storybook/react";
import "../src/index.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // options: {

    //   storySort: (a, b) =>
    //     a.id === b.id
    //       ? 0
    //       : a.id.localeCompare(b.id, undefined, { numeric: true }),
    // },
  },
  // decorators: [
  //   (story) => <div className="flex justify-center w-full">{story()}</div>,
  // ],
};

export default preview;
