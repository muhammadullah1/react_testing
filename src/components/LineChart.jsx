import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardContent, 
  Select, 
  MenuItem, 
  FormControl, 
  Typography, 
  Box 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area 
} from 'recharts';
import './heart-rate.css';

// Sample data for the heart rate chart
const data = [
  { day: "Mon", value: 75 },
  { day: "Tue", value: 82 },
  { day: "Wed", value: 87 },
  { day: "Thu", value: 82 },
  { day: "Fri", value: 86 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 88 },
];

// Custom tooltip component for the chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-date">6 Sep, 2024</p>
        <p className="tooltip-value">{`${payload[0].value} bpm`}</p>
      </div>
    );
  }
  return null;
};

export default function HeartRateMonitor() {
  const [period, setPeriod] = useState('last-week');
  
  // Calculate statistics
  const avgHeartRate = Math.round(data.reduce((sum, item) => sum + item.value, 0) / data.length);
  const highestHeartRate = 120; // Hardcoded from the image
  const lowestHeartRate = 55; // Hardcoded from the image

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div className="heart-rate-container">
      <div className="header-section">
        <Typography variant="h4" component="h1" className="title">
          Heart Rate
        </Typography>
        
        <div className="controls-container">
          <div className="filter-controls">
            <Button 
              variant="outlined" 
              className="compare-button"
            >
              Compare
            </Button>
            
            <FormControl className="period-select">
              <Select
                value={period}
                onChange={handlePeriodChange}
                displayEmpty
                className="select-input"
              >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="yesterday">Yesterday</MenuItem>
                <MenuItem value="last-week">Last week</MenuItem>
                <MenuItem value="last-month">Last month</MenuItem>
              </Select>
            </FormControl>
          </div>
          
          <Button 
            variant="contained" 
            className="add-button"
            startIcon={<AddIcon />}
          >
            Add manually
          </Button>
        </div>
      </div>
      
      <Card className="stats-card">
        <CardContent className="stats-content">
          <div className="stat-item">
            <Typography color="textSecondary" className="stat-label">
              Avg
            </Typography>
            <Typography variant="h5" component="p" className="stat-value">
              {avgHeartRate} bpm
            </Typography>
          </div>
          <div className="stat-item">
            <Typography color="textSecondary" className="stat-label">
              Highest
            </Typography>
            <Typography variant="h6" component="p" className="stat-value">
              {highestHeartRate} bpm <span className="stat-date">(01/01/24)</span>
            </Typography>
          </div>
          <div className="stat-item">
            <Typography color="textSecondary" className="stat-label">
              Lowest
            </Typography>
            <Typography variant="h6" component="p" className="stat-value">
              {lowestHeartRate} bpm <span className="stat-date">(02/08/24)</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(59, 155, 143, 0.2)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgba(59, 155, 143, 0.1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#888' }}
            />
            <YAxis 
              domain={[0, 140]} 
              ticks={[0, 20, 50, 80, 110, 140]} 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#888' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b9b8f"
              fillOpacity={1}
              fill="url(#colorGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b9b8f" 
              strokeWidth={3}
              dot={{ r: 4, fill: "#3b9b8f", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#3b9b8f", stroke: "#fff", strokeWidth: 2 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color"></div>
            <span className="legend-text">Current period</span>
          </div>
        </div>
      </div>
    </div>
  );
}
