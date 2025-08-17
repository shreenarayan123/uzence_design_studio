# Uzence Design Studio

A modern React component library built with TypeScript, Tailwind CSS, and Storybook. This project features two main components: an advanced InputField component and a flexible DataTable component, both designed with accessibility, responsiveness, and user experience in mind.

## 🌟 Features

- **InputField Component**: A versatile input component with multiple variants, sizes, states, and built-in validation
- **DataTable Component**: A responsive data table with sorting, selection, loading states, and empty state handling
- **TypeScript**: Full type safety and excellent developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Storybook**: Interactive component documentation and testing
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Icon System**: Lucide React icons for consistent and scalable iconography

## 📁 Project Structure

```
uzence_design/
├── .storybook/                 # Storybook configuration
│   ├── main.ts                # Main Storybook config with PostCSS setup
│   ├── preview.ts             # Global decorators and parameters
│   └── vitest.setup.ts        # Vitest test setup
├── public/                    # Static assets
│   └── vite.svg              # Vite logo
├── src/
│   ├── components/           # React components
│   │   ├── InputField.tsx    # Advanced input component
│   │   ├── DataTable.tsx     # Flexible data table component
│   │   ├── Demo.tsx          # Demo page showcasing components
│   │   └── README.md         # Component documentation
│   ├── story/                # Storybook stories
│   │   ├── InputField.stories.tsx    # InputField component stories
│   │   └── DataTable.stories.tsx     # DataTable component stories
│   ├── assets/               # Static assets
│   │   └── react.svg        # React logo
│   ├── App.tsx               # Main application component
│   ├── App.css              # Application styles
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles with Tailwind imports
│   └── vite-env.d.ts        # Vite type definitions
├── eslint.config.js          # ESLint configuration
├── postcss.config.js         # PostCSS configuration for Tailwind
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # TypeScript config for app
├── tsconfig.node.json        # TypeScript config for Node.js
├── vite.config.ts            # Vite build tool configuration
├── vitest.shims.d.ts         # Vitest type definitions
└── package.json              # Project dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shreenarayan123/uzence_design_studio.git
   cd uzence_design_studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Launch Storybook (optional):**
   ```bash
   npm run storybook
   ```
   Storybook will be available at `http://localhost:6006`

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## 🛠️ Development Approach

### My Development Journey

I approached this project with a systematic methodology to create high-quality, reusable components:

1. **Initial Setup & Research:**
   - Created a new Vite React application with TypeScript for modern development experience
   - Set up Tailwind CSS for efficient styling and design consistency

2. **Component Development:**
   - Built InputField with multiple variants, sizes, and states focusing on accessibility
   - Developed DataTable as a generic, type-safe component supporting sorting and selection

3. **Storybook Integration:**
   - Researched Storybook documentation and YouTube tutorials to understand best practices
   - Created comprehensive stories for both components showcasing all variants and use cases

4. **Design System Integration:**
   - Replaced placeholder emojis with professional Lucide React icons
   - Converted from CSS modules to Tailwind CSS for better maintainability

5. **Testing & Documentation:**
   - Set up comprehensive Storybook stories as living documentation
   - Ensured type safety and responsive designs across different screen sizes

### Technical Decisions

- **TypeScript**: Chosen for type safety and better developer experience
- **Tailwind CSS**: Selected for rapid prototyping and consistent design system
- **Lucide React**: Preferred for its comprehensive icon set and React optimization
- **Storybook**: Implemented for component development, testing, and documentation
- **Vite**: Used for fast development and optimized builds

## 🎨 Components Overview

### InputField Component

A versatile input component featuring:
- **Variants**: Filled, Outlined, Ghost
- **Sizes**: Small, Medium, Large
- **States**: Normal, Disabled, Invalid, Loading
- **Features**: Password toggle, clear button, custom icons
- **Accessibility**: ARIA labels, keyboard navigation

### DataTable Component

A flexible data table component with:
- **Generic TypeScript**: Works with any data type
- **Sorting**: Click headers to sort columns
- **Selection**: Single or multiple row selection
- **States**: Loading, empty, error handling
- **Responsive**: Horizontal scroll on mobile devices

## 🎯 Storybook Stories

Comprehensive stories are available for both components:

### InputField Stories
- Default variants and sizes
- Different states (disabled, invalid, loading)
- Password input with toggle
- With custom icons and actions
- Dark theme examples

### DataTable Stories
- User data with all features
- Product data with sorting
- Simple tables without advanced features
- Loading and empty states
- Selection functionality
- Responsive design demonstration

## 🧪 Testing

The project includes testing setup with:
- Vitest for unit testing
- React Testing Library for component testing
- Storybook for visual testing and component isolation

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: For CSS processing and optimization
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Support for theme variations
- **Accessibility**: High contrast and screen reader support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📖 Documentation

- Component documentation is available in Storybook
- Type definitions provide inline documentation
- README files in component directories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/new-feature`
6. Submit a pull request



---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Storybook.
