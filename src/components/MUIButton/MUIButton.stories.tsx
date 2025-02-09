import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
