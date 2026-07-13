import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      green: string;
      red: string;
      yellow: string;
    };
    fonts: {
      title: string;
      body: string;
      highlight: string;
    };
  }
}
