
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About Project

This professional project aims to empower users to create custom shapes by inputting essential parameters such as name, height, width, x-axis, and y-axis. Upon creation, the application allows users to interact with the shapes visually by hovering over them, providing real-time feedback on the relative x and y coordinates. The bottom left corner of each shape serves as the origin point for coordinate calculations.

Key Features:

Shape Creation:
Users can input the name, height, width, x-axis, and y-axis coordinates to define custom shapes tailored to their requirements. The application supports various geometric shapes, enabling versatility in design.

Interactive Hovering:
When users hover above the created shapes, the application dynamically displays the relative x and y coordinates. This feature offers immediate feedback, making it easier for users to position and understand the exact location of the shapes.

Coordinate Reference Point:
The bottom left corner of each shape serves as the origin point for the coordinate system. This reference point streamlines the coordinate calculations, ensuring consistency and ease of use for the users.

## Stacks used

Frontend Framework: Next.js with TypeScript
Next.js is a popular React framework that enables server-side rendering, automatic code splitting, and efficient routing. Combined with TypeScript, it provides enhanced type safety and development experience.

State Management: Redux
Redux is employed to manage the application's state, providing a predictable and centralized state container. With its unidirectional data flow and immutability, Redux simplifies state updates and ensures consistent data handling across components.

Styling: Styled-components
Styled-components is utilized for styling the frontend components. It allows writing CSS-in-JS, encapsulating styles within each component, which ensures better maintainability and modularity.
