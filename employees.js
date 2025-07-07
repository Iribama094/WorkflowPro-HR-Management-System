// Employee Management JavaScript

// Sample Nigerian employee data with diverse profile images
const employees = [
    {
        id: 'EMP001',
        name: 'Ifeloluwa Are',
        email: 'ifeloluwa.are@workflowpro.com',
        phone: '+234 803 123 4567',
        department: 'Engineering',
        position: 'Senior Software Engineer',
        startDate: '2022-03-15',
        salary: 2500000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        location: 'Lagos, Nigeria'
    },
    {
        id: 'EMP002',
        name: 'Ayodele Bolarinwa',
        email: 'ayodele.bolarinwa@workflowpro.com',
        phone: '+234 805 234 5678',
        department: 'Marketing',
        position: 'Marketing Manager',
        startDate: '2021-08-20',
        salary: 1800000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        location: 'Abuja, Nigeria'
    },
    {
        id: 'EMP003',
        name: 'Mieyefa Oyinke-Preye',
        email: 'mieyefa.oyinke@workflowpro.com',
        phone: '+234 807 345 6789',
        department: 'Sales',
        position: 'Sales Director',
        startDate: '2020-11-10',
        salary: 3200000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        location: 'Port Harcourt, Nigeria'
    },
    {
        id: 'EMP004',
        name: 'Islamiyat Salaudeen',
        email: 'islamiyat.salaudeen@workflowpro.com',
        phone: '+234 809 456 7890',
        department: 'HR',
        position: 'HR Business Partner',
        startDate: '2022-01-05',
        salary: 2000000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        location: 'Kano, Nigeria'
    },
    {
        id: 'EMP005',
        name: 'Inioluwa Omilaju',
        email: 'inioluwa.omilaju@workflowpro.com',
        phone: '+234 811 567 8901',
        department: 'Engineering',
        position: 'Frontend Developer',
        startDate: '2023-02-14',
        salary: 1500000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        location: 'Ibadan, Nigeria'
    },
    {
        id: 'EMP006',
        name: 'Adunni Adebayo',
        email: 'adunni.adebayo@workflowpro.com',
        phone: '+234 813 678 9012',
        department: 'Finance',
        position: 'Financial Analyst',
        startDate: '2022-06-01',
        salary: 1700000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        location: 'Lagos, Nigeria'
    },
    {
        id: 'EMP007',
        name: 'Chukwuemeka Okafor',
        email: 'chukwuemeka.okafor@workflowpro.com',
        phone: '+234 815 789 0123',
        department: 'Operations',
        position: 'Operations Manager',
        startDate: '2021-04-18',
        salary: 2200000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
        location: 'Enugu, Nigeria'
    },
    {
        id: 'EMP008',
        name: 'Folakemi Adeyemi',
        email: 'folakemi.adeyemi@workflowpro.com',
        phone: '+234 817 890 1234',
        department: 'Marketing',
        position: 'Digital Marketing Specialist',
        startDate: '2023-01-10',
        salary: 1400000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
        location: 'Lagos, Nigeria'
    },
    {
        id: 'EMP009',
        name: 'Babatunde Ogundimu',
        email: 'babatunde.ogundimu@workflowpro.com',
        phone: '+234 819 901 2345',
        department: 'Engineering',
        position: 'DevOps Engineer',
        startDate: '2022-09-05',
        salary: 2100000,
        status: 'Remote',
        avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
        location: 'Abeokuta, Nigeria'
    },
    {
        id: 'EMP010',
        name: 'Khadijah Abdullahi',
        email: 'khadijah.abdullahi@workflowpro.com',
        phone: '+234 821 012 3456',
        department: 'Sales',
        position: 'Account Executive',
        startDate: '2022-12-01',
        salary: 1600000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
        location: 'Kaduna, Nigeria'
    },
    {
        id: 'EMP011',
        name: 'Olumide Fashola',
        email: 'olumide.fashola@workflowpro.com',
        phone: '+234 823 123 4567',
        department: 'Finance',
        position: 'Senior Accountant',
        startDate: '2021-07-12',
        salary: 1900000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        location: 'Lagos, Nigeria'
    },
    {
        id: 'EMP012',
        name: 'Temitope Akinola',
        email: 'temitope.akinola@workflowpro.com',
        phone: '+234 825 234 5678',
        department: 'HR',
        position: 'Talent Acquisition Specialist',
        startDate: '2023-03-20',
        salary: 1300000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        location: 'Ibadan, Nigeria'
    },
    {
        id: 'EMP013',
        name: 'Emeka Nwankwo',
        email: 'emeka.nwankwo@workflowpro.com',
        phone: '+234 827 345 6789',
        department: 'Engineering',
        position: 'Backend Developer',
        startDate: '2022-05-08',
        salary: 1800000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
        location: 'Owerri, Nigeria'
    },
    {
        id: 'EMP014',
        name: 'Aisha Mohammed',
        email: 'aisha.mohammed@workflowpro.com',
        phone: '+234 829 456 7890',
        department: 'Operations',
        position: 'Quality Assurance Lead',
        startDate: '2021-10-15',
        salary: 2000000,
        status: 'On Leave',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
        location: 'Maiduguri, Nigeria'
    },
    {
        id: 'EMP015',
        name: 'Segun Adebisi',
        email: 'segun.adebisi@workflowpro.com',
        phone: '+234 831 567 8901',
        department: 'Sales',
        position: 'Business Development Manager',
        startDate: '2020-12-03',
        salary: 2400000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
        location: 'Lagos, Nigeria'
    },
    {
        id: 'EMP016',
        name: 'Funmilayo Ogundipe',
        email: 'funmilayo.ogundipe@workflowpro.com',
        phone: '+234 833 678 9012',
        department: 'Marketing',
        position: 'Content Marketing Manager',
        startDate: '2022-08-22',
        salary: 1650000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
        location: 'Osogbo, Nigeria'
    },
    {
        id: 'EMP017',
        name: 'Ibrahim Yusuf',
        email: 'ibrahim.yusuf@workflowpro.com',
        phone: '+234 835 789 0123',
        department: 'Finance',
        position: 'Budget Analyst',
        startDate: '2023-01-30',
        salary: 1450000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
        location: 'Sokoto, Nigeria'
    },
    {
        id: 'EMP018',
        name: 'Chioma Okwu',
        email: 'chioma.okwu@workflowpro.com',
        phone: '+234 837 890 1234',
        department: 'Engineering',
        position: 'UI/UX Designer',
        startDate: '2022-11-14',
        salary: 1750000,
        status: 'Remote',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        location: 'Calabar, Nigeria'
    },
    {
        id: 'EMP019',
        name: 'Adebayo Olatunji',
        email: 'adebayo.olatunji@workflowpro.com',
        phone: '+234 839 901 2345',
        department: 'Operations',
        position: 'Project Coordinator',
        startDate: '2023-04-05',
        salary: 1350000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
        location: 'Ilorin, Nigeria'
    },
    {
        id: 'EMP020',
        name: 'Zainab Aliyu',
        email: 'zainab.aliyu@workflowpro.com',
        phone: '+234 841 012 3456',
        department: 'HR',
        position: 'Learning & Development Specialist',
        startDate: '2022-02-28',
        salary: 1550000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
        location: 'Zaria, Nigeria'
    },
    {
        id: 'EMP021',
        name: 'Tunde Bakare',
        email: 'tunde.bakare@workflowpro.com',
        phone: '+234 843 123 4567',
        department: 'Sales',
        position: 'Regional Sales Manager',
        startDate: '2021-06-16',
        salary: 2300000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        location: 'Benin City, Nigeria'
    },
    {
        id: 'EMP022',
        name: 'Ngozi Eze',
        email: 'ngozi.eze@workflowpro.com',
        phone: '+234 845 234 5678',
        department: 'Marketing',
        position: 'Brand Manager',
        startDate: '2021-09-07',
        salary: 1950000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        location: 'Awka, Nigeria'
    },
    {
        id: 'EMP023',
        name: 'Yemi Adeyinka',
        email: 'yemi.adeyinka@workflowpro.com',
        phone: '+234 847 345 6789',
        department: 'Engineering',
        position: 'Mobile App Developer',
        startDate: '2023-05-12',
        salary: 1700000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
        location: 'Akure, Nigeria'
    },
    {
        id: 'EMP024',
        name: 'Hauwa Garba',
        email: 'hauwa.garba@workflowpro.com',
        phone: '+234 849 456 7890',
        department: 'Finance',
        position: 'Treasury Analyst',
        startDate: '2022-10-25',
        salary: 1600000,
        status: 'On Leave',
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
        location: 'Gombe, Nigeria'
    },
    {
        id: 'EMP025',
        name: 'Kunle Adebayo',
        email: 'kunle.adebayo@workflowpro.com',
        phone: '+234 851 567 8901',
        department: 'Operations',
        position: 'Supply Chain Manager',
        startDate: '2021-03-08',
        salary: 2100000,
        status: 'Active',
        avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
        location: 'Oyo, Nigeria'
    }
];

// Department colors for visual distinction
const departmentColors = {
    'Engineering': 'gradient-primary',
    'Marketing': 'gradient-secondary',
    'Sales': 'gradient-success',
    'Operations': 'gradient-warning',
    'HR': 'gradient-accent',
    'Finance': 'bg-gradient-to-r from-indigo-500 to-purple-500'
};

// Status colors
const statusColors = {
    'Active': 'bg-green-100 text-green-700',
    'On Leave': 'bg-yellow-100 text-yellow-700',
    'Remote': 'bg-blue-100 text-blue-700'
};

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Create employee card
function createEmployeeCard(employee) {
    const departmentColor = departmentColors[employee.department] || 'bg-gray-500';
    const statusColor = statusColors[employee.status] || 'bg-gray-100 text-gray-700';
    
    return `
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover transition-all duration-300 employee-card" 
             data-department="${employee.department}" 
             data-status="${employee.status}"
             data-name="${employee.name.toLowerCase()}">
            <div class="flex items-center space-x-4 mb-4">
                <div class="relative">
                    <img src="${employee.avatar}" alt="${employee.name}" 
                         class="w-16 h-16 rounded-full object-cover shadow-lg"
                         onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=667eea&color=fff&size=64'"
                         loading="lazy">
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 ${departmentColor} rounded-full flex items-center justify-center shadow-lg">
                        <i class="fas fa-briefcase text-white text-xs"></i>
                    </div>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-lg text-gray-800">${employee.name}</h3>
                    <p class="text-sm text-gray-500">${employee.position}</p>
                    <span class="inline-block px-2 py-1 text-xs rounded-full ${statusColor} mt-1">${employee.status}</span>
                </div>
            </div>
            
            <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-building w-4 mr-2"></i>
                    <span>${employee.department}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-envelope w-4 mr-2"></i>
                    <span class="truncate">${employee.email}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-phone w-4 mr-2"></i>
                    <span>${employee.phone}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-map-marker-alt w-4 mr-2"></i>
                    <span>${employee.location}</span>
                </div>
            </div>
            
            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs text-gray-500">Employee ID</span>
                    <span class="text-xs font-medium">${employee.id}</span>
                </div>
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs text-gray-500">Start Date</span>
                    <span class="text-xs font-medium">${formatDate(employee.startDate)}</span>
                </div>
                <div class="flex space-x-2">
                    <button class="flex-1 px-3 py-2 text-xs gradient-primary text-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105" onclick="viewEmployee('${employee.id}')">
                        <i class="fas fa-eye mr-1"></i>View
                    </button>
                    <button class="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition" onclick="editEmployee('${employee.id}')">
                        <i class="fas fa-edit mr-1"></i>Edit
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render employees
function renderEmployees(employeesToRender = employees) {
    const grid = document.getElementById('employeeGrid');
    if (employeesToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-users text-4xl text-gray-300 mb-4"></i>
                <h3 class="text-lg font-medium text-gray-500 mb-2">No employees found</h3>
                <p class="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = employeesToRender.map(createEmployeeCard).join('');
}

// Filter employees
function filterEmployees() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const departmentFilter = document.getElementById('departmentFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    
    const filtered = employees.filter(employee => {
        const matchesSearch = employee.name.toLowerCase().includes(searchTerm) ||
                            employee.email.toLowerCase().includes(searchTerm) ||
                            employee.position.toLowerCase().includes(searchTerm);
        const matchesDepartment = !departmentFilter || employee.department === departmentFilter;
        const matchesStatus = !statusFilter || employee.status === statusFilter;
        
        return matchesSearch && matchesDepartment && matchesStatus;
    });
    
    renderEmployees(filtered);
}

// Modal functions (for future development)
function openAddEmployeeModal() {
    showDevelopmentNotification('Add Employee modal');
}

function closeAddEmployeeModal() {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Employee actions
function viewEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        alert(`Viewing ${employee.name}\nDepartment: ${employee.department}\nPosition: ${employee.position}\nSalary: ${formatCurrency(employee.salary)}`);
    }
}

function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        showDevelopmentNotification(`Edit Employee feature for ${employee.name}`);
    }
}

// Development notification function is now available globally from script.js

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderEmployees();
    
    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', filterEmployees);
    document.getElementById('departmentFilter').addEventListener('change', filterEmployees);
    document.getElementById('statusFilter').addEventListener('change', filterEmployees);
    
    // Close modal when clicking outside
    document.getElementById('addEmployeeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAddEmployeeModal();
        }
    });
});
