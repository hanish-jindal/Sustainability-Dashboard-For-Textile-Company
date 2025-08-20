import React, { useState } from 'react';
import { MetricCard } from './MetricCard';
import { ChartContainer } from './ChartContainer';
import { Trash, Recycle, Package, TrendingUp } from 'lucide-react';

export function WasteManagement() {
  const [view, setView] = useState('overview');

  const wasteMetrics = [
    {
      title: 'Total Waste',
      value: '145 kg',
      change: -15.2,
      trend: 'down' as const,
      icon: Trash,
      color: 'orange' as const
    },
    {
      title: 'Recycled',
      value: '131 kg',
      change: 12.3,
      trend: 'up' as const,
      icon: Recycle,
      color: 'green' as const
    },
    {
      title: 'Recycling Rate',
      value: '90.3%',
      change: 8.7,
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'teal' as const
    },
    {
      title: 'Landfill Waste',
      value: '14 kg',
      change: -45.2,
      trend: 'down' as const,
      icon: Package,
      color: 'blue' as const
    }
  ];

  const wasteComposition = [
    { label: 'Paper', value: 35 },
    { label: 'Plastic', value: 25 },
    { label: 'Organic', value: 20 },
    { label: 'Glass', value: 12 },
    { label: 'Metal', value: 8 }
  ];

  const monthlyWaste = [
    { label: 'Jan', value: 180 },
    { label: 'Feb', value: 175 },
    { label: 'Mar', value: 165 },
    { label: 'Apr', value: 155 },
    { label: 'May', value: 150 },
    { label: 'Jun', value: 145 }
  ];

  const recyclingStreams = [
    { type: 'Paper & Cardboard', amount: '51 kg', rate: '95%', color: 'green' },
    { type: 'Plastic', amount: '36 kg', rate: '85%', color: 'blue' },
    { type: 'Glass', amount: '17 kg', rate: '100%', color: 'teal' },
    { type: 'Metal', amount: '12 kg', rate: '100%', color: 'orange' },
    { type: 'Electronic', amount: '8 kg', rate: '90%', color: 'purple' },
    { type: 'Organic Waste', amount: '7 kg', rate: '100%', color: 'emerald' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Waste Management</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === 'overview'
                ? 'bg-orange-100 text-orange-700'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setView('streams')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === 'streams'
                ? 'bg-orange-100 text-orange-700'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Streams
          </button>
        </div>
      </div>

      {/* Waste Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wasteMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {view === 'overview' ? (
        <>
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartContainer 
              title="Monthly Waste Generation"
              type="line"
              data={monthlyWaste}
              color="orange"
            />
            
            <ChartContainer 
              title="Waste Composition"
              type="doughnut"
              data={wasteComposition}
              color="green"
            />
          </div>

          {/* Waste Reduction Initiatives */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Reduction Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Digital Transformation</h4>
                <p className="text-sm text-gray-600 mb-2">Reduced paper usage by 40% through digital processes</p>
                <div className="text-sm font-medium text-green-600">-28 kg paper/month</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Composting Program</h4>
                <p className="text-sm text-gray-600 mb-2">Organic waste composting initiative launched</p>
                <div className="text-sm font-medium text-blue-600">100% organic diversion</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Plastic Reduction</h4>
                <p className="text-sm text-gray-600 mb-2">Single-use plastic elimination program</p>
                <div className="text-sm font-medium text-orange-600">-15 kg plastic/month</div>
              </div>
              <div className="p-4 bg-teal-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Reusable Materials</h4>
                <p className="text-sm text-gray-600 mb-2">Promoting reusable packaging and containers</p>
                <div className="text-sm font-medium text-teal-600">+12% reuse rate</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Recycling Streams */
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recycling Streams Performance</h3>
          <div className="space-y-4">
            {recyclingStreams.map((stream, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{stream.type}</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{stream.amount}</div>
                    <div className="text-sm text-gray-600">this month</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        stream.color === 'green' ? 'bg-green-500' :
                        stream.color === 'blue' ? 'bg-blue-500' :
                        stream.color === 'teal' ? 'bg-teal-500' :
                        stream.color === 'orange' ? 'bg-orange-500' :
                        stream.color === 'purple' ? 'bg-purple-500' :
                        'bg-emerald-500'
                      }`}
                      style={{ width: stream.rate }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{stream.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}