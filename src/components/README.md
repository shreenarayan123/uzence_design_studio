# Components Documentation

## InputField
A flexible input component with validation, variants, sizes, and optional features.

### Props
```
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'password';
  clearable?: boolean;
  showPasswordToggle?: boolean;
  theme?: 'light' | 'dark';
}
```

### Features
- Label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle
- Light & dark theme support

---

## DataTable
A responsive, accessible data table with sorting, selection, loading, and empty states.

### Props
```
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}
```

### Features
- Display tabular data
- Column sorting
- Row selection (single/multiple)
- Loading and empty states
- Responsive and accessible

---

## Demo Usage
See `Demo.tsx` for example usage of both components.
