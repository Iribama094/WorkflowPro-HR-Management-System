// Payroll Management JavaScript

// Nigerian employee payroll data
const payrollData = [
    {
        id: 'EMP001',
        name: 'Ifeloluwa Are',
        department: 'Engineering',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        baseSalary: 2500000,
        allowances: {
            housing: 500000,
            transport: 200000,
            medical: 150000
        },
        deductions: {
            tax: 425000,
            pension: 180000,
            nhf: 25000
        },
        status: 'Processed',
        bankAccount: '0123456789',
        paymentDate: '2024-12-28'
    },
    {
        id: 'EMP002',
        name: 'Ayodele Bolarinwa',
        department: 'Marketing',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        baseSalary: 1800000,
        allowances: {
            housing: 360000,
            transport: 150000,
            medical: 120000
        },
        deductions: {
            tax: 306000,
            pension: 129600,
            nhf: 18000
        },
        status: 'Processed',
        bankAccount: '0234567890',
        paymentDate: '2024-12-28'
    },
    {
        id: 'EMP003',
        name: 'Mieyefa Oyinke-Preye',
        department: 'Sales',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        baseSalary: 3200000,
        allowances: {
            housing: 640000,
            transport: 250000,
            medical: 200000,
            commission: 400000
        },
        deductions: {
            tax: 544000,
            pension: 230400,
            nhf: 32000
        },
        status: 'Processed',
        bankAccount: '0345678901',
        paymentDate: '2024-12-28'
    },
    {
        id: 'EMP004',
        name: 'Islamiyat Salaudeen',
        department: 'HR',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        baseSalary: 2000000,
        allowances: {
            housing: 400000,
            transport: 160000,
            medical: 130000
        },
        deductions: {
            tax: 340000,
            pension: 144000,
            nhf: 20000
        },
        status: 'Pending',
        bankAccount: '0456789012',
        paymentDate: '2024-12-30'
    },
    {
        id: 'EMP005',
        name: 'Inioluwa Omilaju',
        department: 'Engineering',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        baseSalary: 1500000,
        allowances: {
            housing: 300000,
            transport: 120000,
            medical: 100000
        },
        deductions: {
            tax: 255000,
            pension: 108000,
            nhf: 15000
        },
        status: 'Processed',
        bankAccount: '0567890123',
        paymentDate: '2024-12-28'
    },
    {
        id: 'EMP006',
        name: 'Adunni Adebayo',
        department: 'Finance',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        baseSalary: 1700000,
        allowances: {
            housing: 340000,
            transport: 140000,
            medical: 110000
        },
        deductions: {
            tax: 289000,
            pension: 122400,
            nhf: 17000
        },
        status: 'Processed',
        bankAccount: '0678901234',
        paymentDate: '2024-12-28'
    },
    {
        id: 'EMP007',
        name: 'Chukwuemeka Okafor',
        department: 'Operations',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
        baseSalary: 2200000,
        allowances: {
            housing: 440000,
            transport: 180000,
            medical: 140000
        },
        deductions: {
            tax: 374000,
            pension: 158400,
            nhf: 22000
        },
        status: 'Processed',
        bankAccount: '0789012345',
        paymentDate: '2024-12-28'
    },
    {
        id: 'EMP008',
        name: 'Folakemi Adeyemi',
        department: 'Marketing',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
        baseSalary: 1400000,
        allowances: {
            housing: 280000,
            transport: 110000,
            medical: 90000
        },
        deductions: {
            tax: 238000,
            pension: 100800,
            nhf: 14000
        },
        status: 'Pending',
        bankAccount: '0890123456',
        paymentDate: '2024-12-30'
    }
];

// Add more employees to reach 25
const additionalEmployees = [
    { id: 'EMP009', name: 'Babatunde Ogundimu', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/9.jpg', baseSalary: 2100000 },
    { id: 'EMP010', name: 'Khadijah Abdullahi', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/women/10.jpg', baseSalary: 1600000 },
    { id: 'EMP011', name: 'Olumide Fashola', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', baseSalary: 1900000 },
    { id: 'EMP012', name: 'Temitope Akinola', department: 'HR', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', baseSalary: 1300000 },
    { id: 'EMP013', name: 'Emeka Nwankwo', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/13.jpg', baseSalary: 1800000 },
    { id: 'EMP014', name: 'Aisha Mohammed', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/women/14.jpg', baseSalary: 2000000 },
    { id: 'EMP015', name: 'Segun Adebisi', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/men/15.jpg', baseSalary: 2400000 },
    { id: 'EMP016', name: 'Funmilayo Ogundipe', department: 'Marketing', avatar: 'https://randomuser.me/api/portraits/women/16.jpg', baseSalary: 1650000 },
    { id: 'EMP017', name: 'Ibrahim Yusuf', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/men/17.jpg', baseSalary: 1450000 },
    { id: 'EMP018', name: 'Chioma Okwu', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/women/18.jpg', baseSalary: 1750000 },
    { id: 'EMP019', name: 'Adebayo Olatunji', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/men/19.jpg', baseSalary: 1350000 },
    { id: 'EMP020', name: 'Zainab Aliyu', department: 'HR', avatar: 'https://randomuser.me/api/portraits/women/20.jpg', baseSalary: 1550000 },
    { id: 'EMP021', name: 'Tunde Bakare', department: 'Sales', avatar: 'https://randomuser.me/api/portraits/men/21.jpg', baseSalary: 2300000 },
    { id: 'EMP022', name: 'Ngozi Eze', department: 'Marketing', avatar: 'https://randomuser.me/api/portraits/women/22.jpg', baseSalary: 1950000 },
    { id: 'EMP023', name: 'Yemi Adeyinka', department: 'Engineering', avatar: 'https://randomuser.me/api/portraits/men/23.jpg', baseSalary: 1700000 },
    { id: 'EMP024', name: 'Hauwa Garba', department: 'Finance', avatar: 'https://randomuser.me/api/portraits/women/24.jpg', baseSalary: 1600000 },
    { id: 'EMP025', name: 'Kunle Adebayo', department: 'Operations', avatar: 'https://randomuser.me/api/portraits/men/25.jpg', baseSalary: 2100000 }
];

// Generate complete payroll data
additionalEmployees.forEach(emp => {
    const allowances = {
        housing: emp.baseSalary * 0.2,
        transport: emp.baseSalary * 0.08,
        medical: emp.baseSalary * 0.06
    };
    
    const grossSalary = emp.baseSalary + Object.values(allowances).reduce((a, b) => a + b, 0);
    
    const deductions = {
        tax: grossSalary * 0.17,
        pension: emp.baseSalary * 0.072,
        nhf: emp.baseSalary * 0.01
    };
    
    payrollData.push({
        ...emp,
        allowances,
        deductions,
        status: Math.random() > 0.2 ? 'Processed' : 'Pending',
        bankAccount: `0${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`,
        paymentDate: Math.random() > 0.2 ? '2024-12-28' : '2024-12-30'
    });
});

// Status colors
const statusColors = {
    'Processed': 'bg-green-100 text-green-700',
    'Pending': 'bg-yellow-100 text-yellow-700',
    'Failed': 'bg-red-100 text-red-700'
};

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(amount);
}

// Calculate totals
function calculateTotals(employee) {
    const totalAllowances = Object.values(employee.allowances).reduce((a, b) => a + b, 0);
    const totalDeductions = Object.values(employee.deductions).reduce((a, b) => a + b, 0);
    const grossPay = employee.baseSalary + totalAllowances;
    const netPay = grossPay - totalDeductions;
    
    return { totalAllowances, totalDeductions, grossPay, netPay };
}

// Create payroll row
function createPayrollRow(employee) {
    const { totalAllowances, totalDeductions, netPay } = calculateTotals(employee);
    const statusColor = statusColors[employee.status] || 'bg-gray-100 text-gray-700';
    
    return `
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <img src="${employee.avatar}" alt="${employee.name}" 
                         class="w-10 h-10 rounded-full object-cover mr-3"
                         onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=667eea&color=fff&size=40'"
                         loading="lazy">
                    <div>
                        <div class="text-sm font-medium text-gray-900">${employee.name}</div>
                        <div class="text-sm text-gray-500">${employee.department}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">${formatCurrency(employee.baseSalary)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatCurrency(totalAllowances)}</div>
                <div class="text-xs text-gray-500">Housing, Transport, Medical</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatCurrency(totalDeductions)}</div>
                <div class="text-xs text-gray-500">Tax, Pension, NHF</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-green-600">${formatCurrency(netPay)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="fas fa-${employee.status === 'Processed' ? 'check' : employee.status === 'Pending' ? 'clock' : 'times'} mr-1"></i>
                    ${employee.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="viewPayslip('${employee.id}')" title="View Payslip">
                        <i class="fas fa-file-alt"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="editPayroll('${employee.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-green-600 hover:text-green-900 transition" onclick="processPayment('${employee.id}')" title="Process Payment">
                        <i class="fas fa-credit-card"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Render payroll table
function renderPayrollTable() {
    const tbody = document.getElementById('payrollTableBody');
    tbody.innerHTML = payrollData.map(createPayrollRow).join('');
}

// Generate calendar
function generatePayrollCalendar() {
    const calendar = document.getElementById('payrollCalendar');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let calendarHTML = '';
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div class="p-2"></div>';
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        let dayClass = 'p-2 text-center text-sm rounded-lg cursor-pointer hover:bg-gray-100 transition';
        let content = day;
        
        // Highlight special payroll dates
        if (day === 28) {
            dayClass += ' gradient-success text-white';
            content += '<div class="text-xs mt-1">Salary</div>';
        } else if (day === 15) {
            dayClass += ' gradient-warning text-white';
            content += '<div class="text-xs mt-1">Bonus</div>';
        } else if (day === today.getDate()) {
            dayClass += ' gradient-primary text-white';
        }
        
        calendarHTML += `<div class="${dayClass}">${content}</div>`;
    }
    
    calendar.innerHTML = calendarHTML;
}

// Update payroll period
function updatePayrollPeriod() {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    document.getElementById('payrollPeriod').textContent = 
        `${monthNames[now.getMonth()]} ${now.getFullYear()} Payroll Period`;
}

// Process payroll with animation
function processPayroll() {
    const modal = document.getElementById('payrollProcessModal');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    modal.classList.add('active');
    
    const steps = [
        'Calculating base salaries...',
        'Processing allowances...',
        'Computing deductions...',
        'Applying tax calculations...',
        'Generating payslips...',
        'Preparing bank transfers...',
        'Finalizing payroll...'
    ];
    
    let currentStep = 0;
    const interval = setInterval(() => {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = steps[currentStep];
        
        currentStep++;
        
        if (currentStep >= steps.length) {
            clearInterval(interval);
            setTimeout(() => {
                modal.classList.remove('active');
                showNotification('Payroll processed successfully! 🎉', 'success');
                
                // Update status of pending employees
                payrollData.forEach(emp => {
                    if (emp.status === 'Pending') {
                        emp.status = 'Processed';
                        emp.paymentDate = new Date().toISOString().split('T')[0];
                    }
                });
                renderPayrollTable();
            }, 1000);
        }
    }, 800);
}

// Generate payslips
function generatePayslips() {
    showNotification('Generating payslips for all employees...', 'info');
    setTimeout(() => {
        showNotification('Payslips generated successfully! 📄', 'success');
    }, 2000);
}

// Action functions
function viewPayslip(id) {
    const employee = payrollData.find(emp => emp.id === id);
    if (employee) {
        showDevelopmentNotification(`View Payslip feature for ${employee.name}`);
    }
}

function editPayroll(id) {
    const employee = payrollData.find(emp => emp.id === id);
    if (employee) {
        showDevelopmentNotification(`Edit Payroll feature for ${employee.name}`);
    }
}

function processPayment(id) {
    const employee = payrollData.find(emp => emp.id === id);
    if (employee) {
        if (employee.status === 'Processed') {
            showDevelopmentNotification(`Payment already processed for ${employee.name}`);
        } else {
            employee.status = 'Processed';
            employee.paymentDate = new Date().toISOString().split('T')[0];
            renderPayrollTable();
            showNotification(`Payment processed for ${employee.name}! 💰`, 'success');
        }
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
    renderPayrollTable();
    generatePayrollCalendar();
    updatePayrollPeriod();
    
    // Close modal when clicking outside
    document.getElementById('payrollProcessModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});
