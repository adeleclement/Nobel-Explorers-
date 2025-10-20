import React, { useMemo } from 'react';
import { Prize, Category } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataVisualizationProps {
  prizes: Prize[];
}

const CATEGORIES: Category[] = ['physics', 'chemistry', 'medicine', 'literature', 'peace', 'economics'];

const categoryHexColors: Record<Category, string> = {
    physics: '#cce7ff',
    chemistry: '#e0d8ff',
    medicine: '#d1f8f0',
    literature: '#ffe6cc',
    peace: '#cceeff',
    economics: '#dce1ff'
};

const DataVisualization: React.FC<DataVisualizationProps> = ({ prizes }) => {
  const data = useMemo(() => {
    const counts = CATEGORIES.reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {} as Record<Category, number>);

    prizes.forEach(prize => {
      if (prize.laureates && counts.hasOwnProperty(prize.category)) {
        counts[prize.category as Category] += prize.laureates.length;
      }
    });

    return CATEGORIES.map(category => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      laureates: counts[category],
      fill: categoryHexColors[category]
    }));
  }, [prizes]);
  
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const tickColor = isDarkMode ? '#94a3b8' : '#475569';


  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5, right: 20, left: -10, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "rgba(128, 128, 128, 0.2)" : "rgba(0, 0, 0, 0.1)"} />
          <XAxis dataKey="name" tick={{ fill: tickColor, fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fill: tickColor, fontSize: 12 }}/>
          <Tooltip 
            cursor={{fill: 'rgba(128, 128, 128, 0.1)'}}
            contentStyle={{ 
                backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
                border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
            labelStyle={{ color: isDarkMode ? '#cbd5e1' : '#1e293b' }}
          />
          <Bar dataKey="laureates" name="Number of Laureates" barSize={30}>
            {data.map((entry, index) => (
              <Bar key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataVisualization;