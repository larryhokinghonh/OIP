# Codebase Summary

## Project Structure

The project is a Next.js application using the App Router. The main source code is located in the `src/` directory.

- **`src/app/`**: Contains the main application logic and pages.
  - **`layout.tsx`**: The root layout for the application.
  - **`page.tsx`**: The main entry point for the home page.
  - **`globals.css`**: Global styles for the application.
  - **`components/`**: Contains reusable React components.
    - **`BlurTextEffect/`**: A component for a blur text effect.
    - **`ImageZoom/`**: A component for zooming in on images.
    - **`Navbar/`**: The main navigation bar for the site.
    - **`ui/`**: UI components from ShadCN.
- **`public/`**: Contains static assets like images and fonts.
- **`cline_docs/`**: Contains project documentation.

## Data Flow

As this is a static site, there is no complex data flow. Components are rendered on the server and served as static HTML.

## Dependencies

- **`next`**: The core framework for the application.
- **`react`**: The UI library.
- **`tailwindcss`**: The CSS framework.
- **`@radix-ui/react-*`**: The underlying components for ShadCN.
