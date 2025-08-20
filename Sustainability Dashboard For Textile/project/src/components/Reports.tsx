import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, TrendingUp, Award } from 'lucide-react';

export function Reports() {
  const [reportType, setReportType] = useState('monthly');
  const [selectedMetrics, setSelectedMetrics] = useState(['energy', 'carbon', 'waste', 'water']);

  const reportTypes = [
    { id: 'monthly', label: 'Monthly Summary' },
    { id: 'quarterly', label: 'Quarterly Report' },
    { id: 'annual', label: 'Annual Review' },
    { id: 'custom', label: 'Custom Period' }
  ];

  const availableMetrics = [
    { id: 'energy', label: 'Energy Consumption', color: 'blue' },
    { id: 'carbon', label: 'Carbon Footprint', color: 'green' },
    { id: 'waste', label: 'Waste Management', color: 'orange' },
    { id: 'water', label: 'Water Usage', color: 'teal' },
    { id: 'goals', label: 'Goals Progress', color: 'purple' }
  ];

  const recentReports = [
    {
      name: 'June 2024 Sustainability Report',
      type: 'Monthly',
      date: '2024-07-01',
      size: '2.4 MB',
      status: 'Ready'
    },
    {
      name: 'Q2 2024 Environmental Impact',
      type: 'Quarterly',
      date: '2024-06-30',
      size: '5.8 MB',
      status: 'Ready'
    },
    {
      name: 'May 2024 Carbon Assessment',
      type: 'Custom',
      date: '2024-06-01',
      size: '1.9 MB',
      status: 'Ready'
    }
  ];

  const keyHighlights = [
    {
      metric: 'Energy Reduction',
      achievement: '12.5% decrease',
      target: '20% by year-end',
      status: 'on-track'
    },
    {
      metric: 'Recycling Rate',
      achievement: '90.3% recycled',
      target: '90% target',
      status: 'exceeded'
    },
    {
      metric: 'Water Conservation',
      achievement: '6.7% reduction',
      target: '15% by Sept',
      status: 'on-track'
    },
    {
      metric: 'Carbon Footprint',
      achievement: '8.3% reduction',
      target: 'Net zero by 2025',
      status: 'at-risk'
    }
  ];

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metricId) 
        ? prev.filter(m => m !== metricId)
        : [...prev, metricId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Download className="h-4 w-4" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* Report Configuration */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Configuration</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Report Type</label>
            <div className="space-y-2">
              {reportTypes.map((type) => (
                <label key={type.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="reportType"
                    value={type.id}
                    checked={reportType === type.id}
                    onChange={(e) => setReportType(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Metrics Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Include Metrics</label>
            <div className="space-y-2">
              {availableMetrics.map((metric) => (
                <label key={metric.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedMetrics.includes(metric.id)}
                    onChange={() => toggleMetric(metric.id)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{metric.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Date Range for Custom Reports */}
        {reportType === 'custom' && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Key Highlights */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyHighlights.map((highlight, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{highlight.metric}</h4>
                {highlight.status === 'exceeded' ? (
                  <Award className="h-5 w-5 text-yellow-500" />
                ) : highlight.status === 'on-track' ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <Filter className="h-5 w-5 text-orange-500" />
                )}
              </div>
              <div className="text-sm text-gray-600 mb-1">Current: {highlight.achievement}</div>
              <div className="text-sm text-gray-600">Target: {highlight.target}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
        <div className="space-y-3">
          {recentReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">{report.name}</div>
                  <div className="text-sm text-gray-600">{report.type} • {report.size} • {report.date}</div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-3 py-1 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <Download className="h-4 w-4" />
                <span className="text-sm">Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors text-center">
            <div className="text-lg font-semibold text-gray-900 mb-1">PDF Report</div>
            <div className="text-sm text-gray-600">Comprehensive formatted report</div>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors text-center">
            <div className="text-lg font-semibold text-gray-900 mb-1">Excel Export</div>
            <div className="text-sm text-gray-600">Raw data for analysis</div>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors text-center">
            <div className="text-lg font-semibold text-gray-900 mb-1">Dashboard View</div>
            <div className="text-sm text-gray-600">Interactive web report</div>
          </button>
        </div>
      </div>
    </div>
  );
}