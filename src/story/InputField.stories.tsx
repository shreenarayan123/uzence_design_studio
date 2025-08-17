import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField';
import { useState } from 'react';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with validation states, variants, sizes, and special features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant of the input field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme color scheme',
    },
    type: {
      control: 'select',
      options: ['text', 'password'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input has validation errors',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the input is in loading state',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show clear button',
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Whether to show password visibility toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for stateful stories
const InputFieldWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: (args) => <InputFieldWrapper {...args} />,
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'outlined',
    size: 'md',
    theme: 'light',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputFieldWrapper
        label="Outlined Variant"
        placeholder="Outlined input"
        variant="outlined"
      />
      <InputFieldWrapper
        label="Filled Variant"
        placeholder="Filled input"
        variant="filled"
      />
      <InputFieldWrapper
        label="Ghost Variant"
        placeholder="Ghost input"
        variant="ghost"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the input field.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputFieldWrapper
        label="Small Size"
        placeholder="Small input"
        size="sm"
        variant="outlined"
      />
      <InputFieldWrapper
        label="Medium Size"
        placeholder="Medium input"
        size="md"
        variant="outlined"
      />
      <InputFieldWrapper
        label="Large Size"
        placeholder="Large input"
        size="lg"
        variant="outlined"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the input field.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputFieldWrapper
        label="Default State"
        placeholder="Normal input"
        variant="outlined"
      />
      <InputField
        label="Disabled State"
        value="Cannot edit this"
        placeholder="Disabled input"
        variant="outlined"
        disabled={true}
      />
      <InputFieldWrapper
        label="Invalid State"
        placeholder="Enter required field"
        variant="outlined"
        invalid={true}
        errorMessage="This field is required"
      />
      <InputField
        label="Loading State"
        value="Processing..."
        placeholder="Loading input"
        variant="outlined"
        loading={true}
        disabled={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the input field including disabled, invalid, and loading.',
      },
    },
  },
};

export const WithHelperText: Story = {
  render: (args) => <InputFieldWrapper {...args} />,
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    helperText: 'Password must be at least 8 characters long',
    variant: 'outlined',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with helper text to guide users.',
      },
    },
  },
};

export const WithClearButton: Story = {
  render: (args) => <InputFieldWrapper {...args} />,
  args: {
    label: 'Search',
    placeholder: 'Type to see clear button',
    variant: 'outlined',
    clearable: true,
    value: 'Some text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with a clear button to reset the value.',
      },
    },
  },
};

export const PasswordField: Story = {
  render: (args) => <InputFieldWrapper {...args} />,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    variant: 'outlined',
    value: 'secret123',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input field with toggle visibility feature.',
      },
    },
  },
};

export const DarkTheme: Story = {
  render: (args) => (
    <div className="p-6 bg-gray-900 rounded-lg">
      <InputFieldWrapper {...args} />
    </div>
  ),
  args: {
    label: 'Dark Theme Input',
    placeholder: 'Dark theme placeholder',
    variant: 'outlined',
    theme: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with dark theme styling.',
      },
    },
  },
};

export const AllFeatures: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-lg font-semibold mb-4">Light Theme Features</h3>
        <div className="space-y-4">
          <InputFieldWrapper
            label="Clearable Input"
            placeholder="Type something..."
            variant="outlined"
            clearable={true}
            value="Clear me!"
          />
          <InputFieldWrapper
            label="Password with Toggle"
            placeholder="Enter password"
            type="password"
            showPasswordToggle={true}
            variant="filled"
            value="secret123"
          />
        </div>
      </div>
      
      <div className="p-4 bg-gray-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Dark Theme Features</h3>
        <div className="space-y-4">
          <InputFieldWrapper
            label="Dark Clearable"
            placeholder="Dark theme with clear"
            variant="outlined"
            theme="dark"
            clearable={true}
            value="Dark theme text"
          />
          <InputFieldWrapper
            label="Dark Password"
            placeholder="Dark password field"
            type="password"
            showPasswordToggle={true}
            variant="filled"
            theme="dark"
            value="darksecret"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all InputField features in both light and dark themes.',
      },
    },
  },
};
