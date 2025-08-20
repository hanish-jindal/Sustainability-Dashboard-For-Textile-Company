import React, { useState } from 'react';
import { MetricCard } from './MetricCard';
import { ChartContainer } from './ChartContainer';
import { Droplets, Home, Building, Sprout, Gauge } from 'lucide-react';

export function WaterUsage() {
  const [timeframe, setTimeframe] = useState('monthly');

  const waterMetrics = [
    {
      title: 'Total Usage',
      value: '3,420 L',
      change: -6.7,
      trend: 'down' as const,
      icon: Droplets,
      color: 'teal' as const
    },
    {
      title: 'Recycled Water',
      value: '685 L',
      change: 15.2,
      trend: 'up' as const,
      icon: Sprout,
      color: 'green' as const
    },
    {
      title: 'Efficiency Rating',
      value: '87.5%',
      change: 3.2,
      trend: 'up' as const,
      icon: Gauge,
      color: 'blue' as const
    },
    {
      title: 'Cost Savings',
      value: '$156',
      change: 8.9,
      trend: 'up' as const,
      icon: Building,
      color: 'orange' as const
    }
  ];

  const usageData = {
    monthly: [
      { label: 'Jan', value: 4200 },
      { label: 'Feb', value: 3950 },
      { label: 'Mar', value: 3800 },
      { label: 'Apr', value: 3650 },
      { label: 'May', value: 3500 },
      { label: 'Jun', value: 3420 }
    ],
    daily: [
      { label: 'Mon', value: 520 },
      { label: 'Tue', value: 485 },
      { label: 'Wed', value: 510 },
      { label: 'Thu', value: 495 },
      { label: 'Fri', value: 475 },
      { label: 'Sat', value: 380 },
      { label: 'Sun', value: 360 }
    ]
  };

  const usageBreakdown = [
    { label: 'Restrooms', value: 45 },
    { label: 'Kitchen', value: 25 },
    { label: 'Cleaning', value: 15 },
    { label: 'Landscaping', value: 15 }
  ];

  const conservationMeasures = [
    { measure: 'Low-flow fixtures installed', impact: '15% reduction', status: 'Completed' },
    { measure: 'Rainwater harvesting system', impact: '200L/day collected', status: 'Active' },
    { measure: 'Smart irrigation controls', impact: '25% irrigation savings', status: 'In Progress' },
    { measure: 'Leak detection system', impact: 'Real-time monitoring', status: 'Planned' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Water Usage Monitoring</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeframe('daily')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeframe === 'daily'
                ? 'bg-teal-100 text-teal-700'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeframe === 'monthly'
                ? 'bg-teal-100 text-teal-700'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Water Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {waterMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title={`${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} Water Usage`}
          type="line"
          data={usageData[timeframe as keyof typeof usageData]}
          color="teal"
        />
        
        <ChartContainer 
          title="Water Usage by Category"
          type="doughnut"
          data={usageBreakdown}
          color="blue"
        />
      </div>

      {/* Conservation Measures */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Conservation Measures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conservationMeasures.map((measure, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{measure.measure}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  measure.status === 'Active' ? 'bg-green-100 text-green-700' :
                  measure.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                  measure.status === 'In Progress' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {measure.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">Impact: {measure.impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Water Quality Metrics */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Quality & Efficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-teal-50 rounded-lg">
            <div className="text-2xl font-bold text-teal-600 mb-1">98.5%</div>
            <div className="text-sm text-gray-600">Water Quality Score</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">20%</div>
            <div className="text-sm text-gray-600">Water Recycled</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">Zero</div>
            <div className="text-sm text-gray-600">Leaks Detected</div>
          </div>
        </div>
      </div>
    </div>
  );
}