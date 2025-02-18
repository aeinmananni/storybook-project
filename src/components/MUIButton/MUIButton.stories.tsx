import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { action } from "@storybook/addon-actions";
import "@storybook/addon-console";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});
const meta: Meta = {
  title: "MUI/Button",
  component: Button,
  decorators: (Story) => [
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>,
  ],
};
export default meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Materail UI</Button>
);

export const Contained = Template.bind({});

Contained.args = {
  variant: "contained",
  color: "primary",
  onClick: () => console.log("contained"),
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  color: "secondary",
  onClick: () => console.log("Outlined"),
};

export const Clickble = Template.bind({});
Clickble.args = {
  variant: "contained",
  color: "primary",
  children: "Clicked here",
  onClick: action("Button And Clicked !"),
  onMouseOver: action("On Mopuse Overs !"),
};
export const Log = Template.bind({});
Log.args = {
  variant: "contained",
  color: "secondary",
  children: "Log",
  onClick: () => console.log(import.meta.env.VITE_STORYBOOK_THEME),
};
