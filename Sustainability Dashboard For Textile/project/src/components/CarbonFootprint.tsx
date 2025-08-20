import React, { useState } from 'react';
import { MetricCard } from './MetricCard';
import { ChartContainer } from './ChartContainer';
import { Leaf, Car, Zap, Trash, Droplets, Plane } from 'lucide-react';

export function CarbonFootprint() {
  const [period, setPeriod] = useState('current');

  const carbonMetrics = [
    {
      title: 'Total CO₂ Emissions',
      value: '1.2 tons',
      change: -8.3,
      trend: 'down' as const,
      icon: Leaf,
      color: 'green' as const
    },
    {
      title: 'Scope 1 Emissions',
      value: '0.3 tons',
      change: -12.1,
      trend: 'down' as const,
      icon: Car,
      color: 'blue' as const
    },
    {
      title: 'Scope 2 Emissions',
      value: '0.7 tons',
      change: -6.8,
      trend: 'down' as const,
      icon: Zap,
      color: 'orange' as const
    },
    {
      title: 'Carbon Offset',
      value: '0.2 tons',
      change: 25.3,
      trend: 'up' as const,
      icon: Leaf,
      color: 'teal' as const
    }
  ];

  const emissionSources = [
    { label: 'Energy', value: 58 },
    { label: 'Transportation', value: 25 },
    { label: 'Waste', value: 12 },
    { label: 'Other', value: 5 }
  ];

  const monthlyEmissions = [
    { label: 'Jan', value: 1.8 },
    { label: 'Feb', value: 1.6 },
    { label: 'Mar', value: 1.4 },
    { label: 'Apr', value: 1.3 },
    { label: 'May', value: 1.25 },
    { label: 'Jun', value: 1.2 }
  ];

  const offsetProjects = [
    { name: 'Tree Planting Initiative', impact: '0.15 tons CO₂', status: 'Active' },
    { name: 'Solar Panel Installation', impact: '0.8 tons CO₂/year', status: 'Completed' },
    { name: 'Energy Efficiency Upgrades', impact: '0.3 tons CO₂/year', status: 'In Progress' },
    { name: 'Green Transportation', impact: '0.2 tons CO₂/year', status: 'Planned' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Carbon Footprint</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setPeriod('current')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              period === 'current'
                ? 'bg-green-100 text-green-700'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Current Year
          </button>
          <button
            onClick={() => setPeriod('target')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              period === 'target'
                ? 'bg-green-100 text-green-700'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            2025 Target
          </button>
        </div>
      </div>

      {/* Carbon Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carbonMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Monthly CO₂ Emissions Trend"
          type="line"
          data={monthlyEmissions}
          color="green"
        />
        
        <ChartContainer 
          title="Emission Sources Breakdown"
          type="doughnut"
          data={emissionSources}
          color="orange"
        />
      </div>

      {/* Carbon Offset Projects */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Carbon Offset Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offsetProjects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{project.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Active' ? 'bg-green-100 text-green-700' :
                  project.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                  project.status === 'In Progress' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">Impact: {project.impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Emission Factors */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Carbon Intensity by Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-900">Electricity Usage</span>
            </div>
            <span className="text-sm text-gray-600">0.4 kg CO₂/kWh</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Car className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-gray-900">Vehicle Transport</span>
            </div>
            <span className="text-sm text-gray-600">2.3 kg CO₂/L fuel</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Plane className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-gray-900">Air Travel</span>
            </div>
            <span className="text-sm text-gray-600">0.25 kg CO₂/km</span>
          </div>
        </div>
      </div>
    </div>
  );
}