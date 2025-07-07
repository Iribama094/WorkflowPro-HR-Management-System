// Reports & Analytics JavaScript

// Reports data
const reportsData = [
    {
        id: 'RPT001',
        name: 'Monthly Employee Summary',
        type: 'Employee',
        generated: '2024-12-28',
        size: '2.4 MB',
        status: 'Ready',
        format: 'PDF',
        description: 'Comprehensive employee statistics and demographics'
    },
    {
        id: 'RPT002',
        name: 'Q4 Payroll Analysis',
        type: 'Financial',
        generated: '2024-12-27',
        size: '1.8 MB',
        status: 'Ready',
        format: 'Excel',
        description: 'Quarterly payroll costs and budget analysis'
    },
    {
        id: 'RPT003',
        name: 'Performance Review Summary',
        type: 'Performance',
        generated: '2024-12-26',
        size: '3.1 MB',
        status: 'Ready',
        format: 'PDF',
        description: 'Annual performance ratings and goal achievements'
    },
    {
        id: 'RPT004',
        name: 'Attendance Trends Report',
        type: 'Operational',
        generated: '2024-12-25',
        size: '1.2 MB',
        status: 'Ready',
        format: 'PDF',
        description: 'Monthly attendance patterns and trends'
    },
    {
        id: 'RPT005',
        name: 'Training Effectiveness Analysis',
        type: 'Operational',
        generated: '2024-12-24',
        size: '2.7 MB',
        status: 'Processing',
        format: 'Excel',
        description: 'Training program ROI and completion rates'
    },
    {
        id: 'RPT006',
        name: 'Recruitment Pipeline Report',
        type: 'Operational',
        generated: '2024-12-23',
        size: '1.9 MB',
        status: 'Ready',
        format: 'PDF',
        description: 'Hiring funnel analysis and time-to-hire metrics'
    },
    {
        id: 'RPT007',
        name: 'Department Cost Analysis',
        type: 'Financial',
        generated: '2024-12-22',
        size: '2.2 MB',
        status: 'Ready',
        format: 'Excel',
        description: 'Cost breakdown by department and function'
    },
    {
        id: 'RPT008',
        name: 'Employee Satisfaction Survey',
        type: 'Employee',
        generated: '2024-12-21',
        size: '1.5 MB',
        status: 'Ready',
        format: 'PDF',
        description: 'Annual employee satisfaction and engagement metrics'
    }
];

// Chart data
const chartData = {
    departments: {
        labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'],
        data: [28, 22, 18, 12, 15, 20],
        colors: ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#EC4899']
    },
    attendance: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [94.2, 95.8, 93.1, 96.4, 94.7, 95.3]
    },
    performance: {
        labels: ['Excellent (4.5-5.0)', 'Good (3.5-4.4)', 'Average (2.5-3.4)', 'Below Average (1.5-2.4)', 'Poor (1.0-1.4)'],
        data: [32, 48, 15, 4, 1],
        colors: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#6B7280']
    },
    payroll: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [45.2, 46.8, 47.1, 48.3, 49.1, 50.2]
    }
};

// Status colors
const statusColors = {
    'Ready': 'bg-green-100 text-green-700',
    'Processing': 'bg-yellow-100 text-yellow-700',
    'Failed': 'bg-red-100 text-red-700',
    'Scheduled': 'bg-blue-100 text-blue-700'
};

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Create report row
function createReportRow(report) {
    const statusColor = statusColors[report.status] || 'bg-gray-100 text-gray-700';
    
    return `
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
                <div>
                    <div class="text-sm font-medium text-gray-900">${report.name}</div>
                    <div class="text-sm text-gray-500">${report.description}</div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                    ${report.type}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatDate(report.generated)}</div>
                <div class="text-xs text-gray-500">${report.format}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${report.size}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="fas fa-${report.status === 'Ready' ? 'check' : report.status === 'Processing' ? 'spinner fa-spin' : report.status === 'Failed' ? 'times' : 'clock'} mr-1"></i>
                    ${report.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="viewReport('${report.id}')" title="View Report">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="downloadReport('${report.id}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="text-green-600 hover:text-green-900 transition" onclick="shareReport('${report.id}')" title="Share">
                        <i class="fas fa-share"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-900 transition" onclick="deleteReport('${report.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Render reports table
function renderReportsTable() {
    const tbody = document.getElementById('reportsTableBody');
    tbody.innerHTML = reportsData.map(createReportRow).join('');
}

// Initialize charts
function initializeCharts() {
    // Department Distribution Chart
    const deptCtx = document.getElementById('departmentChart').getContext('2d');
    new Chart(deptCtx, {
        type: 'doughnut',
        data: {
            labels: chartData.departments.labels,
            datasets: [{
                data: chartData.departments.data,
                backgroundColor: chartData.departments.colors,
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });

    // Attendance Trends Chart
    const attCtx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(attCtx, {
        type: 'line',
        data: {
            labels: chartData.attendance.labels,
            datasets: [{
                label: 'Attendance Rate (%)',
                data: chartData.attendance.data,
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#10B981',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 90,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    // Performance Ratings Chart
    const perfCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(perfCtx, {
        type: 'bar',
        data: {
            labels: chartData.performance.labels,
            datasets: [{
                label: 'Number of Employees',
                data: chartData.performance.data,
                backgroundColor: chartData.performance.colors,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });

    // Payroll Costs Chart
    const payCtx = document.getElementById('payrollChart').getContext('2d');
    new Chart(payCtx, {
        type: 'line',
        data: {
            labels: chartData.payroll.labels,
            datasets: [{
                label: 'Payroll Costs (₦ Millions)',
                data: chartData.payroll.data,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#3B82F6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 40,
                    max: 55,
                    ticks: {
                        callback: function(value) {
                            return '₦' + value + 'M';
                        }
                    }
                }
            }
        }
    });
}

// Action functions
function showReportCategory(category) {
    showDevelopmentNotification(`${category} Reports category filter`);
}

function viewReport(id) {
    const report = reportsData.find(r => r.id === id);
    if (report) {
        showDevelopmentNotification(`View Report feature for ${report.name}`);
    }
}

function downloadReport(id) {
    const report = reportsData.find(r => r.id === id);
    if (report) {
        showNotification(`Downloading ${report.name}...`, 'success');
    }
}

function shareReport(id) {
    const report = reportsData.find(r => r.id === id);
    if (report) {
        showDevelopmentNotification(`Share Report feature for ${report.name}`);
    }
}

function deleteReport(id) {
    const report = reportsData.find(r => r.id === id);
    if (report && confirm(`Are you sure you want to delete "${report.name}"?`)) {
        const index = reportsData.findIndex(r => r.id === id);
        reportsData.splice(index, 1);
        renderReportsTable();
        showNotification('Report deleted successfully', 'success');
    }
}

function generateReport() {
    showDevelopmentNotification('Generate Report feature');
}

function scheduleReport() {
    showDevelopmentNotification('Schedule Report feature');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`;
    
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.remove('translate-x-full'), 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderReportsTable();
    
    // Initialize charts after a short delay to ensure DOM is ready
    setTimeout(() => {
        initializeCharts();
    }, 100);
    
    // Add event listeners
    document.getElementById('reportTypeFilter').addEventListener('change', function() {
        // Filter functionality would be implemented here
        renderReportsTable();
    });
});
