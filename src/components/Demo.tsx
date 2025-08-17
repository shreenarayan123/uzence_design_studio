import React, { useState } from 'react';
import { InputField } from './InputField';
import { DataTable } from './DataTable';
import type { Column } from './DataTable';

type UserData = {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
};

const userColumns: Column<UserData>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
  { key: 'lastLogin', title: 'Last Login', dataIndex: 'lastLogin', sortable: true },
  { key: 'status', title: 'Status', dataIndex: 'status', sortable: true },
];

const userData: UserData[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@company.com', role: 'Admin', lastLogin: '2025-08-17 09:30', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@company.com', role: 'Developer', lastLogin: '2025-08-16 14:22', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@company.com', role: 'Designer', lastLogin: '2025-08-15 11:45', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana@company.com', role: 'Manager', lastLogin: '2025-08-17 08:15', status: 'Active' },
  { id: 5, name: 'Edward Norton', email: 'edward@company.com', role: 'Developer', lastLogin: '2025-08-14 16:30', status: 'Active' },
  { id: 6, name: 'Fiona Apple', email: 'fiona@company.com', role: 'Analyst', lastLogin: '2025-08-13 10:20', status: 'Inactive' },
];

export const Demo: React.FC = () => {
  const [basicInput, setBasicInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('secret123');
  const [filledInput, setFilledInput] = useState('');
  const [ghostInput, setGhostInput] = useState('');
  const [smallInput, setSmallInput] = useState('');
  const [largeInput, setLargeInput] = useState('');
  const [invalidInput, setInvalidInput] = useState('');
  const [helperInput, setHelperInput] = useState('');
  const [darkInput, setDarkInput] = useState('');
  const [selectedRows, setSelectedRows] = useState<UserData[]>([]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-50">
      <div className="w-full max-w-[70vw] mx-auto">
        {/* Main Title */}
        <h1 className="text-center text-6xl font-bold mb-12 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
          Components
        </h1>
        
        {/* Input Field Container */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center border-b-2 border-slate-200 pb-2">
            Input Field
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Variants and States */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center p-3 bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg border border-slate-200">
                Variants and States
              </h3>
              <div className="flex flex-col gap-6">
                <InputField
                  label="Outlined Variant (Default)"
                  value={basicInput}
                  onChange={e => setBasicInput(e.target.value)}
                  placeholder="Enter text..."
                  variant="outlined"
                  size="md"
                />
                
                <InputField
                  label="Filled Variant"
                  value={filledInput}
                  onChange={e => setFilledInput(e.target.value)}
                  placeholder="Filled input field"
                  variant="filled"
                  size="md"
                />
                
                <InputField
                  label="Ghost Variant"
                  value={ghostInput}
                  onChange={e => setGhostInput(e.target.value)}
                  placeholder="Ghost input field"
                  variant="ghost"
                  size="md"
                />
                
                <InputField
                  label="Small Size"
                  value={smallInput}
                  onChange={e => setSmallInput(e.target.value)}
                  placeholder="Small input"
                  variant="outlined"
                  size="sm"
                />
                
                <InputField
                  label="Large Size"
                  value={largeInput}
                  onChange={e => setLargeInput(e.target.value)}
                  placeholder="Large input"
                  variant="outlined"
                  size="lg"
                />
                
                <InputField
                  label="Invalid State"
                  value={invalidInput}
                  onChange={e => setInvalidInput(e.target.value)}
                  placeholder="Enter required field"
                  variant="outlined"
                  invalid={invalidInput === ''}
                  errorMessage={invalidInput === '' ? "This field is required" : ''}
                />
              </div>
            </div>
            
            {/* Right Column: Special Features */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center p-3 bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg border border-slate-200">
                Special Features
              </h3>
              <div className="flex flex-col gap-6">
                <InputField
                  label="Loading State"
                  value="Processing..."
                  variant="outlined"
                  loading={true}
                  disabled={true}
                />
                
                <InputField
                  label="Password Field with Toggle"
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  placeholder="Enter password"
                  variant="outlined"
                  type="password"
                  showPasswordToggle={true}
                />
                
                <InputField
                  label="Clearable Input"
                  value={basicInput}
                  onChange={e => setBasicInput(e.target.value)}
                  placeholder="Type to see clear button"
                  variant="outlined"
                  clearable={true}
                />
                
                <InputField
                  label="Disabled State"
                  value="Cannot edit this"
                  placeholder="Disabled input"
                  variant="outlined"
                  disabled={true}
                />
                
                <InputField
                  label="With Helper Text"
                  value={helperInput}
                  onChange={e => setHelperInput(e.target.value)}
                  placeholder="Enter username"
                  variant="outlined"
                  helperText="Username must be at least 3 characters long"
                />
                
                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <InputField
                    label="Dark Theme"
                    value={darkInput}
                    onChange={e => setDarkInput(e.target.value)}
                    placeholder="Dark theme input"
                    variant="outlined"
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Table Container */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center border-b-2 border-slate-200 pb-2">
            Data Table
          </h2>
          <DataTable
            data={userData}
            columns={userColumns}
            loading={false}
            selectable
            onRowSelect={setSelectedRows}
          />
          
          {/* Selected Users Display */}
          <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Selected Users ({selectedRows.length})
            </h4>
            {selectedRows.length === 0 ? (
              <p className="text-center text-gray-500 italic">No users selected</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedRows.map(user => (
                  <div key={user.id} className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <span className="font-semibold text-gray-700">{user.name}</span>
                    <span className="text-gray-500 text-sm">({user.role})</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
