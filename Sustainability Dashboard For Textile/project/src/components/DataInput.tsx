import React, { useState } from 'react';
import { Plus, Upload, Calendar, Save } from 'lucide-react';

export function DataInput() {
  const [activeForm, setActiveForm] = useState('energy');
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    energy: '',
    water: '',
    waste: '',
    wasteRecycled: '',
    transport: '',
    notes: ''
  });

  const forms = [
    { id: 'energy', label: 'Energy', color: 'blue' },
    { id: 'water', label: 'Water', color: 'teal' },
    { id: 'waste', label: 'Waste', color: 'orange' },
    { id: 'carbon', label: 'Carbon', color: 'green' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Data saved successfully!');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Data Input</h2>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Upload className="h-4 w-4" />
            <span>Import CSV</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Bulk Entry</span>
          </button>
        </div>
      </div>

      {/* Form Type Selector */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex space-x-1 mb-6">
          {forms.map((form) => (
            <button
              key={form.id}
              onClick={() => setActiveForm(form.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeForm === form.id
                  ? `bg-${form.color}-100 text-${form.color}-700`
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {form.label}
            </button>
          ))}
        </div>

        {/* Data Entry Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Dynamic Form Fields Based on Active Form */}
          {activeForm === 'energy' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Energy Consumption (kWh)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.energy}
                  onChange={(e) => handleInputChange('energy', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter kWh consumed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Energy Source</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Grid (Mixed)</option>
                  <option>Solar</option>
                  <option>Wind</option>
                  <option>Renewable Grid</option>
                </select>
              </div>
            </div>
          )}

          {activeForm === 'water' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Water Usage (Liters)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.water}
                  onChange={(e) => handleInputChange('water', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter liters consumed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Usage Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>General Use</option>
                  <option>Restrooms</option>
                  <option>Kitchen</option>
                  <option>Cleaning</option>
                  <option>Landscaping</option>
                </select>
              </div>
            </div>
          )}

          {activeForm === 'waste' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Waste (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.waste}
                  onChange={(e) => handleInputChange('waste', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter total waste in kg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recycled Amount (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.wasteRecycled}
                  onChange={(e) => handleInputChange('wasteRecycled', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter recycled amount"
                />
              </div>
            </div>
          )}

          {activeForm === 'carbon' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transportation (km)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.transport}
                  onChange={(e) => handleInputChange('transport', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter distance traveled"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transport Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Car (Gasoline)</option>
                  <option>Car (Electric)</option>
                  <option>Public Transport</option>
                  <option>Walking/Cycling</option>
                  <option>Air Travel</option>
                </select>
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Add any additional notes or context..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save Data</span>
            </button>
          </div>
        </form>
      </div>

      {/* Quick Entry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-medium text-gray-900 mb-2">Today's Energy</h4>
          <div className="text-2xl font-bold text-blue-600">95.2 kWh</div>
          <div className="text-sm text-gray-600">Meter reading</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-medium text-gray-900 mb-2">Today's Water</h4>
          <div className="text-2xl font-bold text-teal-600">114 L</div>
          <div className="text-sm text-gray-600">Meter reading</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-medium text-gray-900 mb-2">Today's Waste</h4>
          <div className="text-2xl font-bold text-orange-600">4.8 kg</div>
          <div className="text-sm text-gray-600">Collected</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-medium text-gray-900 mb-2">Carbon Today</h4>
          <div className="text-2xl font-bold text-green-600">0.04 tons</div>
          <div className="text-sm text-gray-600">CO₂ equivalent</div>
        </div>
      </div>
    </div>
  );
}