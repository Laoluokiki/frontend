# Colonees Documentation

Welcome to the documentation for the **Colonees**. This repo helps anyone to be able to get a tour of what components and pages do. It has the naming conventions, styles, break-points and available components for use in the building of these application. In the event of this documentation folder growing too large, it might be removed from this directory and self hosted.

## Content

- [Colonees Documentation](#colonees-documentation)
  - [Content](#content)
  - [Naming Conventions](#naming-conventions)
  - [Global CSS](#global-css)
  - [Other Docs](#other-docs)
  
## Naming Conventions
In order to ensure that consistency is maintained within this application, kindly follow these naming conventions:

- **Folders**: Use snake case for folder names. (e.g. `auth`, `redux-store`)
- **Files in pages folder**: Use snake case for folder names. (e.g. `sign-in`, `login`)
- **File Names not in pages folder**: Use pascal case for file names. (e.g. `data.ts`, `NewAboutComponent.tsx`)
- **Custom Component Prefixes**: When creating custom components whose names may clash with global elements' names, consider using prefixes like `App`. (e.g. `Button` is named `AppButton`)
- **Styled Components**: For styled components, use the format `ComponentNameStyle` (e.g., `TalentDashboardStyle`).

## Global CSS

Do not touch the global css unless you have to. This ensures consistency in all look and feel app wide.

## Other Docs
  - [Global Components](./AUTH.md#colonees-app-wide-components)
  - [Pages](./PAGES.md#pages)
  - [Authentication](./AUTH.md#authentication-documentation)

