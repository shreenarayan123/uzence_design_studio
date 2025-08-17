import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../components/DataTable';
import type { Column } from '../components/DataTable';
import { useState } from 'react';

// Sample data types
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

// Sample data
const userData: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@company.com', role: 'Admin', lastLogin: '2025-08-17 09:30', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@company.com', role: 'Developer', lastLogin: '2025-08-16 14:22', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@company.com', role: 'Designer', lastLogin: '2025-08-15 11:45', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana@company.com', role: 'Manager', lastLogin: '2025-08-17 08:15', status: 'Active' },
  { id: 5, name: 'Edward Norton', email: 'edward@company.com', role: 'Developer', lastLogin: '2025-08-14 16:30', status: 'Active' },
];

const productData: Product[] = [
  { id: 1, name: 'MacBook Pro', price: 2499, category: 'Electronics', stock: 12 },
  { id: 2, name: 'iPhone 15', price: 999, category: 'Electronics', stock: 25 },
  { id: 3, name: 'Coffee Mug', price: 15, category: 'Office', stock: 100 },
  { id: 4, name: 'Wireless Mouse', price: 79, category: 'Electronics', stock: 45 },
  { id: 5, name: 'Notebook', price: 5, category: 'Office', stock: 200 },
];

// Column definitions
const userColumns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
  { key: 'lastLogin', title: 'Last Login', dataIndex: 'lastLogin', sortable: true },
  { key: 'status', title: 'Status', dataIndex: 'status', sortable: true },
];

const productColumns: Column<Product>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Product Name', dataIndex: 'name', sortable: true },
  { key: 'price', title: 'Price ($)', dataIndex: 'price', sortable: true },
  { key: 'category', title: 'Category', dataIndex: 'category', sortable: true },
  { key: 'stock', title: 'Stock', dataIndex: 'stock', sortable: true },
];

const simpleColumns: Column<{ id: number; name: string; value: string }>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id' },
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'value', title: 'Value', dataIndex: 'value' },
];

// Meta configuration for generic component
const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive data table component with sorting, selection, loading, and empty states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether the table is in loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected',
    },
    data: {
      control: false,
      description: 'Array of data objects to display',
    },
    columns: {
      control: false,
      description: 'Array of column definitions',
    },
    onRowSelect: {
      action: 'rowSelected',
      description: 'Callback function when rows are selected',
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper components for different data types
const UserTableWrapper = (args: any) => {
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  
  const handleRowSelect = (rows: User[]) => {
    setSelectedRows(rows);
    args.onRowSelect?.(rows);
  };

  return (
    <div>
      <DataTable<User>
        {...args}
        onRowSelect={handleRowSelect}
      />
      {args.selectable && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Selected Rows:</strong> {selectedRows.length}
          {selectedRows.length > 0 && (
            <div className="mt-2 text-sm">
              <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ProductTableWrapper = (args: any) => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  
  const handleRowSelect = (rows: Product[]) => {
    setSelectedRows(rows);
    args.onRowSelect?.(rows);
  };

  return (
    <div>
      <DataTable<Product>
        {...args}
        onRowSelect={handleRowSelect}
      />
      {args.selectable && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Selected Rows:</strong> {selectedRows.length}
          {selectedRows.length > 0 && (
            <div className="mt-2 text-sm">
              <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SimpleTableWrapper = (args: any) => {
  const [selectedRows, setSelectedRows] = useState<{ id: number; name: string; value: string }[]>([]);
  
  const handleRowSelect = (rows: { id: number; name: string; value: string }[]) => {
    setSelectedRows(rows);
    args.onRowSelect?.(rows);
  };

  return (
    <div>
      <DataTable<{ id: number; name: string; value: string }>
        {...args}
        onRowSelect={handleRowSelect}
      />
      {args.selectable && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Selected Rows:</strong> {selectedRows.length}
          {selectedRows.length > 0 && (
            <div className="mt-2 text-sm">
              <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CustomTableWrapper = (args: any) => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  
  const handleRowSelect = (rows: any[]) => {
    setSelectedRows(rows);
    args.onRowSelect?.(rows);
  };

  return (
    <div>
      <DataTable
        {...args}
        onRowSelect={handleRowSelect}
      />
      {args.selectable && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Selected Rows:</strong> {selectedRows.length}
          {selectedRows.length > 0 && (
            <div className="mt-2 text-sm">
              <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => <UserTableWrapper {...args} />,
  args: {
    data: userData,
    columns: userColumns as Column[],
    loading: false,
    selectable: false,
  },
};

export const WithSelection: Story = {
  render: (args) => <UserTableWrapper {...args} />,
  args: {
    data: userData,
    columns: userColumns as Column[],
    loading: false,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with row selection enabled. Selected rows are displayed below the table.',
      },
    },
  },
};

export const WithSorting: Story = {
  render: (args) => <ProductTableWrapper {...args} />,
  args: {
    data: productData,
    columns: productColumns as Column[],
    loading: false,
    selectable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with sortable columns. Click on column headers with sort icons to sort the data.',
      },
    },
  },
};

export const LoadingState: Story = {
  render: (args) => <UserTableWrapper {...args} />,
  args: {
    data: userData,
    columns: userColumns as Column[],
    loading: true,
    selectable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table in loading state showing loading message.',
      },
    },
  },
};

export const EmptyState: Story = {
  render: (args) => <UserTableWrapper {...args} />,
  args: {
    data: [],
    columns: userColumns as Column[],
    loading: false,
    selectable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with no data showing empty state message.',
      },
    },
  },
};

export const SimpleTable: Story = {
  render: (args) => <SimpleTableWrapper {...args} />,
  args: {
    data: [
      { id: 1, name: 'Item A', value: 'Value 1' },
      { id: 2, name: 'Item B', value: 'Value 2' },
      { id: 3, name: 'Item C', value: 'Value 3' },
    ],
    columns: simpleColumns as Column[],
    loading: false,
    selectable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple data table without sorting or selection features.',
      },
    },
  },
};

export const AllFeatures: Story = {
  render: (args) => <UserTableWrapper {...args} />,
  args: {
    data: userData,
    columns: userColumns as Column[],
    loading: false,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with all features enabled: sorting, selection, and responsive design.',
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <h3 className="text-lg font-semibold mb-4">Mobile View (Max Width: 384px)</h3>
      <UserTableWrapper {...args} />
    </div>
  ),
  args: {
    data: userData.slice(0, 3), // Fewer rows for mobile demo
    columns: userColumns.slice(0, 3) as Column[], // Fewer columns for mobile demo
    loading: false,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of responsive behavior on smaller screens.',
      },
    },
  },
};

export const CustomData: Story = {
  render: (args) => <CustomTableWrapper {...args} />,
  args: {
    data: [
      { id: 1, task: 'Setup Project', priority: 'High', assignee: 'Alice', dueDate: '2025-08-20', completed: 'No' },
      { id: 2, task: 'Code Review', priority: 'Medium', assignee: 'Bob', dueDate: '2025-08-18', completed: 'Yes' },
      { id: 3, task: 'Write Tests', priority: 'High', assignee: 'Charlie', dueDate: '2025-08-19', completed: 'No' },
      { id: 4, task: 'Deploy App', priority: 'Low', assignee: 'Diana', dueDate: '2025-08-25', completed: 'No' },
    ],
    columns: [
      { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
      { key: 'task', title: 'Task', dataIndex: 'task', sortable: true },
      { key: 'priority', title: 'Priority', dataIndex: 'priority', sortable: true },
      { key: 'assignee', title: 'Assignee', dataIndex: 'assignee', sortable: true },
      { key: 'dueDate', title: 'Due Date', dataIndex: 'dueDate', sortable: true },
      { key: 'completed', title: 'Completed', dataIndex: 'completed', sortable: true },
    ],
    loading: false,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Data table with custom task management data to show flexibility.',
      },
    },
  },
};
