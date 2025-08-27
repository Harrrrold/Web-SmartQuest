import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ModuleCreatorDashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="dashboard">
          <div className="dashboard-header">
            <div className="screen-title">Dashboard</div>
          </div>

          {/* Key Metrics Section */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon sales">
                <TrendingUpIcon />
              </div>
              <div className="metric-content">
                <div className="metric-title">Total Module Sales</div>
                <div className="metric-value">$89,000</div>
                <div className="metric-indicator">This Month</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon pupils">
                <PeopleIcon />
              </div>
              <div className="metric-content">
                <div className="metric-title">Active Pupils</div>
                <div className="metric-value">21</div>
                <div className="metric-indicator">8.5% Up from yesterday</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon modules">
                <InventoryIcon />
              </div>
              <div className="metric-content">
                <div className="metric-title">Total Modules</div>
                <div className="metric-value">4</div>
                <div className="metric-indicator">1.3% Up from past week</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon pending">
                <ScheduleIcon />
              </div>
              <div className="metric-content">
                <div className="metric-title">Total Pending</div>
                <div className="metric-value">2040</div>
                <div className="metric-indicator">1.8% Up from yesterday</div>
              </div>
            </div>
          </div>

          {/* Sales Statistics Section */}
          <div className="chart-section">
            <div className="chart-header">
              <h2>Sales Statistics</h2>
              <div className="month-dropdown">
                October
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-placeholder">
                <div className="chart-line"></div>
                <div className="chart-peak">64.3664.77</div>
                <div className="chart-labels">
                  <div className="y-axis">
                    <span>100%</span>
                    <span>80%</span>
                    <span>60%</span>
                    <span>40%</span>
                    <span>20%</span>
                  </div>
                  <div className="x-axis">
                    <span>5k</span>
                    <span>10k</span>
                    <span>15k</span>
                    <span>20k</span>
                    <span>25k</span>
                    <span>30k</span>
                    <span>35k</span>
                    <span>40k</span>
                    <span>45k</span>
                    <span>50k</span>
                    <span>55k</span>
                    <span>60k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Modules Section */}
          <div className="modules-section">
            <div className="modules-header">
              <h2>My Modules</h2>
              <div className="month-dropdown">
                October
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div className="modules-table">
              <table>
                <thead>
                  <tr>
                    <th>Module Name</th>
                    <th>Module Description</th>
                    <th>Date - Time Created</th>
                    <th>Sales</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="module-name">
                        <MenuBookIcon className="module-icon" />
                        Math Basics
                      </div>
                    </td>
                    <td>Math Basics for Pupils</td>
                    <td>12.09.2019 - 12.53 PM</td>
                    <td>14</td>
                    <td>$100.00</td>
                    <td>
                      <span className="status-badge active">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorDashboard;
