// Time Tracking JavaScript

// Time entries data
const timeEntries = [
    {
        id: 'TIME001',
        task: 'Website Redesign Project',
        project: 'Marketing Website',
        startTime: '09:00 AM',
        endTime: '11:30 AM',
        duration: '2h 30m',
        date: '2024-12-28',
        status: 'Completed',
        employee: 'Ifeloluwa Are',
        description: 'Working on homepage layout and responsive design'
    },
    {
        id: 'TIME002',
        task: 'Database Optimization',
        project: 'Backend Infrastructure',
        startTime: '11:45 AM',
        endTime: 'In Progress',
        duration: '2h 34m',
        date: '2024-12-28',
        status: 'Active',
        employee: 'Ifeloluwa Are',
        description: 'Optimizing database queries and indexing'
    },
    {
        id: 'TIME003',
        task: 'Client Meeting Preparation',
        project: 'Sales Presentation',
        startTime: '08:30 AM',
        endTime: '10:00 AM',
        duration: '1h 30m',
        date: '2024-12-28',
        status: 'Completed',
        employee: 'Mieyefa Oyinke-Preye',
        description: 'Preparing slides and demo for client presentation'
    },
    {
        id: 'TIME004',
        task: 'Code Review',
        project: 'Mobile App Development',
        startTime: '02:00 PM',
        endTime: '03:45 PM',
        duration: '1h 45m',
        date: '2024-12-27',
        status: 'Completed',
        employee: 'Inioluwa Omilaju',
        description: 'Reviewing pull requests and providing feedback'
    },
    {
        id: 'TIME005',
        task: 'Marketing Campaign Analysis',
        project: 'Q4 Campaign Review',
        startTime: '10:15 AM',
        endTime: '12:30 PM',
        duration: '2h 15m',
        date: '2024-12-27',
        status: 'Completed',
        employee: 'Ayodele Bolarinwa',
        description: 'Analyzing campaign performance and ROI metrics'
    },
    {
        id: 'TIME006',
        task: 'Employee Onboarding',
        project: 'HR Operations',
        startTime: '09:30 AM',
        endTime: '11:00 AM',
        duration: '1h 30m',
        date: '2024-12-27',
        status: 'Completed',
        employee: 'Islamiyat Salaudeen',
        description: 'Conducting orientation for new team members'
    },
    {
        id: 'TIME007',
        task: 'Financial Report Preparation',
        project: 'Monthly Reporting',
        startTime: '01:00 PM',
        endTime: '04:30 PM',
        duration: '3h 30m',
        date: '2024-12-26',
        status: 'Completed',
        employee: 'Adunni Adebayo',
        description: 'Preparing monthly financial statements and analysis'
    },
    {
        id: 'TIME008',
        task: 'System Maintenance',
        project: 'IT Infrastructure',
        startTime: '07:00 AM',
        endTime: '09:00 AM',
        duration: '2h 00m',
        date: '2024-12-26',
        status: 'Completed',
        employee: 'Babatunde Ogundimu',
        description: 'Server maintenance and security updates'
    }
];

// Timer state
let timerState = {
    isRunning: true,
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000 - 34 * 60 * 1000 - 15 * 1000), // 2h 34m 15s ago
    currentTask: 'Website Redesign Project',
    elapsedTime: 0
};

// Status colors
const statusColors = {
    'Active': 'bg-green-100 text-green-700',
    'Completed': 'bg-blue-100 text-blue-700',
    'Paused': 'bg-yellow-100 text-yellow-700'
};

// Format time duration
function formatDuration(milliseconds) {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Update current date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

// Update timer display
function updateTimerDisplay() {
    if (timerState.isRunning) {
        const now = new Date();
        const elapsed = now - timerState.startTime;
        document.getElementById('timerDisplay').textContent = formatDuration(elapsed);
        
        // Update today's hours
        const todayHours = (elapsed / (1000 * 60 * 60)).toFixed(1);
        document.getElementById('todayHours').textContent = `${todayHours}h`;
    }
}

// Create time entry row
function createTimeEntryRow(entry) {
    const statusColor = statusColors[entry.status] || 'bg-gray-100 text-gray-700';
    
    return `
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
                <div>
                    <div class="text-sm font-medium text-gray-900">${entry.task}</div>
                    <div class="text-sm text-gray-500">${entry.project}</div>
                    ${entry.description ? `<div class="text-xs text-gray-400 mt-1">${entry.description}</div>` : ''}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${entry.startTime}</div>
                <div class="text-xs text-gray-500">${formatDate(entry.date)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${entry.endTime}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm font-medium text-gray-900">${entry.duration}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="fas fa-${entry.status === 'Active' ? 'play' : entry.status === 'Completed' ? 'check' : 'pause'} mr-1"></i>
                    ${entry.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="viewTimeEntry('${entry.id}')" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="editTimeEntry('${entry.id}')" title="Edit Entry">
                        <i class="fas fa-edit"></i>
                    </button>
                    ${entry.status === 'Active' ? 
                        `<button class="text-red-600 hover:text-red-900 transition" onclick="stopTimeEntry('${entry.id}')" title="Stop Timer">
                            <i class="fas fa-stop"></i>
                        </button>` : 
                        `<button class="text-green-600 hover:text-green-900 transition" onclick="resumeTimeEntry('${entry.id}')" title="Resume Timer">
                            <i class="fas fa-play"></i>
                        </button>`
                    }
                </div>
            </td>
        </tr>
    `;
}

// Render time entries table
function renderTimeEntriesTable() {
    const tbody = document.getElementById('timeEntriesTableBody');
    tbody.innerHTML = timeEntries.map(createTimeEntryRow).join('');
}

// Timer control functions
function toggleTimer() {
    const btn = document.getElementById('playPauseBtn');
    
    if (timerState.isRunning) {
        // Pause timer
        timerState.isRunning = false;
        btn.innerHTML = '<i class="fas fa-play mr-2"></i>Resume';
        btn.className = btn.className.replace('gradient-success', 'gradient-primary');
        showNotification('Timer paused', 'info');
    } else {
        // Resume timer
        timerState.isRunning = true;
        timerState.startTime = new Date(Date.now() - timerState.elapsedTime);
        btn.innerHTML = '<i class="fas fa-pause mr-2"></i>Pause';
        btn.className = btn.className.replace('gradient-primary', 'gradient-success');
        showNotification('Timer resumed', 'success');
    }
}

function stopTimer() {
    if (confirm('Are you sure you want to stop the current timer?')) {
        timerState.isRunning = false;
        
        // Add completed entry
        const now = new Date();
        const elapsed = now - timerState.startTime;
        const duration = formatDuration(elapsed).replace(/:/g, 'h ').replace(/h \d{2}$/, 'm');
        
        const newEntry = {
            id: `TIME${String(timeEntries.length + 1).padStart(3, '0')}`,
            task: timerState.currentTask,
            project: 'Current Project',
            startTime: timerState.startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            endTime: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            duration: duration,
            date: now.toISOString().split('T')[0],
            status: 'Completed',
            employee: 'Current User',
            description: 'Timer session completed'
        };
        
        timeEntries.unshift(newEntry);
        renderTimeEntriesTable();
        
        // Reset timer
        document.getElementById('timerDisplay').textContent = '00:00:00';
        document.getElementById('currentTask').textContent = 'No active task';
        document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play mr-2"></i>Start';
        
        showNotification('Timer stopped and entry saved', 'success');
    }
}

function startTimer() {
    const taskName = prompt('Enter task name:');
    if (taskName) {
        timerState.isRunning = true;
        timerState.startTime = new Date();
        timerState.currentTask = taskName;
        timerState.elapsedTime = 0;
        
        document.getElementById('currentTask').textContent = `Working on: ${taskName}`;
        document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause mr-2"></i>Pause';
        
        showNotification(`Timer started for: ${taskName}`, 'success');
    }
}

function addTimeEntry() {
    showDevelopmentNotification('Add Manual Time Entry feature');
}

function generateTimesheet() {
    showDevelopmentNotification('Generate Timesheet feature');
}

// Action functions
function viewTimeEntry(id) {
    const entry = timeEntries.find(e => e.id === id);
    if (entry) {
        showDevelopmentNotification(`View Time Entry Details feature for ${entry.task}`);
    }
}

function editTimeEntry(id) {
    const entry = timeEntries.find(e => e.id === id);
    if (entry) {
        showDevelopmentNotification(`Edit Time Entry feature for ${entry.task}`);
    }
}

function stopTimeEntry(id) {
    const entry = timeEntries.find(e => e.id === id);
    if (entry && entry.status === 'Active') {
        entry.status = 'Completed';
        entry.endTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        renderTimeEntriesTable();
        showNotification(`Timer stopped for: ${entry.task}`, 'success');
    }
}

function resumeTimeEntry(id) {
    const entry = timeEntries.find(e => e.id === id);
    if (entry) {
        showDevelopmentNotification(`Resume Timer feature for ${entry.task}`);
    }
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
    renderTimeEntriesTable();
    updateDateTime();
    
    // Update timer every second
    setInterval(() => {
        updateTimerDisplay();
        updateDateTime();
    }, 1000);
    
    // Add event listeners
    document.getElementById('dateFilter').addEventListener('change', function() {
        // Filter functionality would be implemented here
        renderTimeEntriesTable();
    });
});
