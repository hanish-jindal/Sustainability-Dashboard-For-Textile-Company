import React from 'react';
import { Leaf, BarChart3, Zap, Trash, Droplets, Target, Plus, FileText } from 'lucide-react';

type TabType = 'overview' | 'energy' | 'carbon' | 'waste' | 'water' | 'goals' | 'input' | 'reports';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'energy', label: 'Energy', icon: Zap },
    { id: 'carbon', label: 'Carbon', icon: Leaf },
    { id: 'waste', label: 'Waste', icon: Trash },
    { id: 'water', label: 'Water', icon: Droplets },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'input', label: 'Data Input', icon: Plus },
    { id: 'reports', label: 'Reports', icon: FileText },
  ] as const;

  return (
    <header className="bg-white shadow-lg border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>
              <p className="text-sm text-gray-600">Environmental Impact Monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Last Updated</p>
            <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        <nav className="flex space-x-1 overflow-x-auto pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-green-100 text-green-700 shadow-sm'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}