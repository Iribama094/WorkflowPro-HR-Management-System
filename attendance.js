// Attendance Management JavaScript

// Import employee data (in a real app, this would come from an API)
const employeeNames = [
    { id: 'EMP001', name: 'Ifeloluwa Are', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 'EMP002', name: 'Ayodele Bolarinwa', department: 'Marketing', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 'EMP003', name: 'Mieyefa Oyinke-Preye', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 'EMP004', name: 'Islamiyat Salaudeen', department: 'HR', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 'EMP005', name: 'Inioluwa Omilaju', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 'EMP006', name: 'Adunni Adebayo', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 'EMP007', name: 'Chukwuemeka Okafor', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 'EMP008', name: 'Folakemi Adeyemi', department: 'Marketing', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 'EMP009', name: 'Babatunde Ogundimu', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 'EMP010', name: 'Khadijah Abdullahi', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { id: 'EMP011', name: 'Olumide Fashola', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { id: 'EMP012', name: 'Temitope Akinola', department: 'HR', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { id: 'EMP013', name: 'Emeka Nwankwo', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { id: 'EMP014', name: 'Aisha Mohammed', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { id: 'EMP015', name: 'Segun Adebisi', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { id: 'EMP016', name: 'Funmilayo Ogundipe', department: 'Marketing', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
    { id: 'EMP017', name: 'Ibrahim Yusuf', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' },
    { id: 'EMP018', name: 'Chioma Okwu', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/women/18.jpg' },
    { id: 'EMP019', name: 'Adebayo Olatunji', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { id: 'EMP020', name: 'Zainab Aliyu', department: 'HR', avatar: 'https://randomuser.me/api/portraits/women/20.jpg' },
    { id: 'EMP021', name: 'Tunde Bakare', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },
    { id: 'EMP022', name: 'Ngozi Eze', department: 'Marketing', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { id: 'EMP023', name: 'Yemi Adeyinka', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },
    { id: 'EMP024', name: 'Hauwa Garba', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' },
    { id: 'EMP025', name: 'Kunle Adebayo', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' }
];

// Generate sample attendance data for today
function generateTodayAttendance() {
    const today = new Date();
    const attendanceData = [];
    
    employeeNames.forEach((employee, index) => {
        const statuses = ['Present', 'Present', 'Present', 'Present', 'Late', 'Remote', 'Absent'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        let checkIn = null;
        let checkOut = null;
        let hours = 0;
        
        if (randomStatus !== 'Absent') {
            // Generate random check-in time between 7:30 AM and 10:00 AM
            const checkInHour = 7 + Math.random() * 2.5;
            const checkInMinutes = Math.floor((checkInHour % 1) * 60);
            checkIn = `${Math.floor(checkInHour).toString().padStart(2, '0')}:${checkInMinutes.toString().padStart(2, '0')}`;
            
            // Generate check-out time (if it's past 5 PM or if it's a completed day)
            if (today.getHours() >= 17 || Math.random() > 0.3) {
                const checkOutHour = 17 + Math.random() * 2;
                const checkOutMinutes = Math.floor((checkOutHour % 1) * 60);
                checkOut = `${Math.floor(checkOutHour).toString().padStart(2, '0')}:${checkOutMinutes.toString().padStart(2, '0')}`;
                
                // Calculate hours worked
                const checkInTime = new Date(`2024-01-01 ${checkIn}`);
                const checkOutTime = new Date(`2024-01-01 ${checkOut}`);
                hours = ((checkOutTime - checkInTime) / (1000 * 60 * 60)).toFixed(1);
            }
        }
        
        attendanceData.push({
            id: employee.id,
            name: employee.name,
            department: employee.department,
            avatar: employee.avatar,
            checkIn: checkIn,
            checkOut: checkOut,
            hours: hours,
            status: randomStatus,
            date: today.toISOString().split('T')[0]
        });
    });
    
    return attendanceData;
}

// Sample attendance data
let attendanceRecords = generateTodayAttendance();

// Status colors
const statusColors = {
    'Present': 'bg-green-100 text-green-700',
    'Absent': 'bg-red-100 text-red-700',
    'Late': 'bg-yellow-100 text-yellow-700',
    'Remote': 'bg-blue-100 text-blue-700'
};

// Status icons
const statusIcons = {
    'Present': 'fas fa-check-circle',
    'Absent': 'fas fa-times-circle',
    'Late': 'fas fa-clock',
    'Remote': 'fas fa-home'
};

// Format time
function formatTime(timeString) {
    if (!timeString) return '-';
    return timeString;
}

// Calculate total hours
function calculateHours(checkIn, checkOut) {
    if (!checkIn || !checkOut) return '-';
    
    const checkInTime = new Date(`2024-01-01 ${checkIn}`);
    const checkOutTime = new Date(`2024-01-01 ${checkOut}`);
    const hours = ((checkOutTime - checkInTime) / (1000 * 60 * 60)).toFixed(1);
    
    return `${hours}h`;
}

// Create attendance row
function createAttendanceRow(record) {
    const statusColor = statusColors[record.status] || 'bg-gray-100 text-gray-700';
    const statusIcon = statusIcons[record.status] || 'fas fa-question-circle';
    
    return `
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-gray-300 attendance-checkbox" data-id="${record.id}">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <img src="${record.avatar}" alt="${record.name}" 
                         class="w-10 h-10 rounded-full object-cover mr-3"
                         onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(record.name)}&background=667eea&color=fff&size=40'"
                         loading="lazy">
                    <div>
                        <div class="text-sm font-medium text-gray-900">${record.name}</div>
                        <div class="text-sm text-gray-500">${record.id}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${record.department}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${formatTime(record.checkIn)}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${formatTime(record.checkOut)}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${calculateHours(record.checkIn, record.checkOut)}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="${statusIcon} mr-1"></i>
                    ${record.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="editAttendance('${record.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="viewDetails('${record.id}')" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-900 transition" onclick="deleteAttendance('${record.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Render attendance table
function renderAttendanceTable(records = attendanceRecords) {
    const tbody = document.getElementById('attendanceTableBody');
    
    if (records.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="px-6 py-12 text-center">
                    <i class="fas fa-calendar-times text-4xl text-gray-300 mb-4"></i>
                    <h3 class="text-lg font-medium text-gray-500 mb-2">No attendance records found</h3>
                    <p class="text-gray-400">Try adjusting your filters or select a different date</p>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = records.map(createAttendanceRow).join('');
}

// Filter attendance records
function filterAttendance() {
    const departmentFilter = document.getElementById('departmentFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    
    const filtered = attendanceRecords.filter(record => {
        const matchesDepartment = !departmentFilter || record.department === departmentFilter;
        const matchesStatus = !statusFilter || record.status === statusFilter;
        
        return matchesDepartment && matchesStatus;
    });
    
    renderAttendanceTable(filtered);
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

// Modal functions
function markAttendance() {
    document.getElementById('markAttendanceModal').classList.add('active');
    populateEmployeeSelect();
    
    // Set current time as default
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    document.getElementById('checkInTime').value = currentTime;
}

function closeMarkAttendanceModal() {
    document.getElementById('markAttendanceModal').classList.remove('active');
}

function populateEmployeeSelect() {
    const select = document.getElementById('employeeSelect');
    select.innerHTML = '<option>Select Employee</option>';
    
    employeeNames.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.id;
        option.textContent = `${employee.name} (${employee.id})`;
        select.appendChild(option);
    });
}

function submitAttendance() {
    const employeeId = document.getElementById('employeeSelect').value;
    const status = document.getElementById('statusSelect').value;
    const checkInTime = document.getElementById('checkInTime').value;
    
    if (!employeeId || employeeId === 'Select Employee') {
        alert('Please select an employee');
        return;
    }
    
    // Find and update the attendance record
    const recordIndex = attendanceRecords.findIndex(record => record.id === employeeId);
    if (recordIndex !== -1) {
        attendanceRecords[recordIndex].status = status;
        attendanceRecords[recordIndex].checkIn = checkInTime;
        
        // Re-render the table
        renderAttendanceTable();
        closeMarkAttendanceModal();
        
        // Show success message
        showNotification('Attendance marked successfully!', 'success');
    }
}

// Action functions
function editAttendance(id) {
    const record = attendanceRecords.find(r => r.id === id);
    if (record) {
        showDevelopmentNotification(`Edit Attendance feature for ${record.name}`);
    }
}

function viewDetails(id) {
    const record = attendanceRecords.find(r => r.id === id);
    if (record) {
        showDevelopmentNotification(`View Attendance Details feature for ${record.name}`);
    }
}

function deleteAttendance(id) {
    if (confirm('Are you sure you want to delete this attendance record?')) {
        attendanceRecords = attendanceRecords.filter(record => record.id !== id);
        renderAttendanceTable();
        showNotification('Attendance record deleted', 'success');
    }
}

function exportAttendance() {
    showDevelopmentNotification('Export Attendance feature');
}

function generateReport() {
    showDevelopmentNotification('Generate Attendance Report feature');
}

function bulkActions() {
    const checkedBoxes = document.querySelectorAll('.attendance-checkbox:checked');
    if (checkedBoxes.length === 0) {
        alert('Please select at least one employee');
        return;
    }
    
    alert(`Bulk actions for ${checkedBoxes.length} selected employees`);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
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
            <i class="fas fa-check-circle mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateFilter').value = today;
    
    // Render initial data
    renderAttendanceTable();
    updateDateTime();
    
    // Update time every minute
    setInterval(updateDateTime, 60000);
    
    // Add event listeners
    document.getElementById('departmentFilter').addEventListener('change', filterAttendance);
    document.getElementById('statusFilter').addEventListener('change', filterAttendance);
    document.getElementById('dateFilter').addEventListener('change', function() {
        // In a real app, this would fetch data for the selected date
        renderAttendanceTable();
    });
    
    // Select all checkbox functionality
    document.getElementById('selectAll').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.attendance-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });
    
    // Close modal when clicking outside
    document.getElementById('markAttendanceModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeMarkAttendanceModal();
        }
    });
});
