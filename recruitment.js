// Recruitment Management JavaScript

// Job postings data
const jobPostings = [
    {
        id: 'JOB001',
        title: 'Senior Software Engineer',
        department: 'Engineering',
        location: 'Lagos, Nigeria',
        type: 'Full-time',
        applications: 45,
        postedDate: '2024-12-01',
        status: 'Active',
        priority: 'High',
        salary: '₦3,500,000 - ₦5,000,000',
        description: 'Looking for an experienced software engineer to lead our development team.',
        requirements: ['5+ years experience', 'React/Node.js', 'Team leadership']
    },
    {
        id: 'JOB002',
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        location: 'Abuja, Nigeria',
        type: 'Full-time',
        applications: 32,
        postedDate: '2024-11-28',
        status: 'Active',
        priority: 'Medium',
        salary: '₦2,000,000 - ₦3,000,000',
        description: 'Drive our digital marketing initiatives and brand awareness.',
        requirements: ['3+ years experience', 'Google Ads', 'Social Media Marketing']
    },
    {
        id: 'JOB003',
        title: 'Sales Manager',
        department: 'Sales',
        location: 'Port Harcourt, Nigeria',
        type: 'Full-time',
        applications: 28,
        postedDate: '2024-11-25',
        status: 'Active',
        priority: 'High',
        salary: '₦4,000,000 - ₦6,000,000',
        description: 'Lead our sales team to achieve ambitious revenue targets.',
        requirements: ['5+ years sales experience', 'Team management', 'B2B sales']
    },
    {
        id: 'JOB004',
        title: 'HR Business Partner',
        department: 'HR',
        location: 'Lagos, Nigeria',
        type: 'Full-time',
        applications: 22,
        postedDate: '2024-11-20',
        status: 'Active',
        priority: 'Medium',
        salary: '₦2,500,000 - ₦3,500,000',
        description: 'Partner with business leaders to drive HR strategy and initiatives.',
        requirements: ['4+ years HR experience', 'SHRM certification', 'Business partnering']
    },
    {
        id: 'JOB005',
        title: 'Financial Analyst',
        department: 'Finance',
        location: 'Lagos, Nigeria',
        type: 'Full-time',
        applications: 38,
        postedDate: '2024-11-18',
        status: 'Paused',
        priority: 'Low',
        salary: '₦2,200,000 - ₦3,200,000',
        description: 'Analyze financial data and provide insights for business decisions.',
        requirements: ['3+ years finance experience', 'Excel/SQL', 'Financial modeling']
    },
    {
        id: 'JOB006',
        title: 'UX/UI Designer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        applications: 56,
        postedDate: '2024-11-15',
        status: 'Active',
        priority: 'High',
        salary: '₦2,800,000 - ₦4,200,000',
        description: 'Design intuitive and beautiful user experiences for our products.',
        requirements: ['4+ years design experience', 'Figma/Sketch', 'User research']
    },
    {
        id: 'JOB007',
        title: 'Operations Coordinator',
        department: 'Operations',
        location: 'Abuja, Nigeria',
        type: 'Full-time',
        applications: 19,
        postedDate: '2024-11-12',
        status: 'Active',
        priority: 'Medium',
        salary: '₦1,800,000 - ₦2,500,000',
        description: 'Coordinate operational activities and ensure smooth business processes.',
        requirements: ['2+ years operations experience', 'Project management', 'Process improvement']
    },
    {
        id: 'JOB008',
        title: 'Content Marketing Manager',
        department: 'Marketing',
        location: 'Lagos, Nigeria',
        type: 'Full-time',
        applications: 41,
        postedDate: '2024-11-10',
        status: 'Closed',
        priority: 'Low',
        salary: '₦2,500,000 - ₦3,500,000',
        description: 'Develop and execute content marketing strategies.',
        requirements: ['3+ years content marketing', 'SEO knowledge', 'Writing skills']
    }
];

// Pipeline stages data
const pipelineStages = [
    { name: 'Applications', count: 247, color: 'gradient-primary' },
    { name: 'Screening', count: 89, color: 'gradient-success' },
    { name: 'Interviews', count: 34, color: 'gradient-warning' },
    { name: 'Final Round', count: 12, color: 'gradient-secondary' },
    { name: 'Offers', count: 8, color: 'gradient-accent' }
];

// Status colors
const statusColors = {
    'Active': 'bg-green-100 text-green-700',
    'Paused': 'bg-yellow-100 text-yellow-700',
    'Closed': 'bg-gray-100 text-gray-700'
};

// Priority colors
const priorityColors = {
    'High': 'bg-red-100 text-red-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'Low': 'bg-blue-100 text-blue-700'
};

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Calculate days since posted
function daysSincePosted(dateString) {
    const posted = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Create job posting row
function createJobPostingRow(job) {
    const statusColor = statusColors[job.status] || 'bg-gray-100 text-gray-700';
    const priorityColor = priorityColors[job.priority] || 'bg-gray-100 text-gray-700';
    const daysPosted = daysSincePosted(job.postedDate);
    
    return `
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
                <div>
                    <div class="text-sm font-medium text-gray-900">${job.title}</div>
                    <div class="text-sm text-gray-500">${job.location} • ${job.type}</div>
                    <div class="flex items-center mt-1">
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityColor}">
                            ${job.priority} Priority
                        </span>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${job.department}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <span class="text-sm font-medium text-gray-900">${job.applications}</span>
                    <span class="ml-2 text-xs text-gray-500">applications</span>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatDate(job.postedDate)}</div>
                <div class="text-xs text-gray-500">${daysPosted} days ago</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="fas fa-${job.status === 'Active' ? 'play' : job.status === 'Paused' ? 'pause' : 'stop'} mr-1"></i>
                    ${job.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="viewJob('${job.id}')" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="editJob('${job.id}')" title="Edit Job">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-green-600 hover:text-green-900 transition" onclick="viewApplications('${job.id}')" title="View Applications">
                        <i class="fas fa-users"></i>
                    </button>
                    ${job.status === 'Active' ? 
                        `<button class="text-yellow-600 hover:text-yellow-900 transition" onclick="pauseJob('${job.id}')" title="Pause Job">
                            <i class="fas fa-pause"></i>
                        </button>` :
                        job.status === 'Paused' ?
                        `<button class="text-green-600 hover:text-green-900 transition" onclick="activateJob('${job.id}')" title="Activate Job">
                            <i class="fas fa-play"></i>
                        </button>` : ''
                    }
                </div>
            </td>
        </tr>
    `;
}

// Render job postings table
function renderJobPostingsTable() {
    const tbody = document.getElementById('jobPostingsTableBody');
    tbody.innerHTML = jobPostings.map(createJobPostingRow).join('');
}

// Render recruitment pipeline
function renderRecruitmentPipeline() {
    const container = document.getElementById('recruitmentPipeline');
    
    container.innerHTML = pipelineStages.map((stage, index) => `
        <div class="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-purple-50 hover:shadow-md transition-all duration-300">
            <div class="flex items-center">
                <div class="w-12 h-12 rounded-full ${stage.color} flex items-center justify-center mr-4 shadow-lg">
                    <span class="text-white font-bold">${index + 1}</span>
                </div>
                <div>
                    <h4 class="font-medium text-gray-900">${stage.name}</h4>
                    <p class="text-sm text-gray-500">Stage ${index + 1}</p>
                </div>
            </div>
            <div class="text-right">
                <div class="text-2xl font-bold text-gray-900">${stage.count}</div>
                <div class="text-xs text-gray-500">candidates</div>
            </div>
            ${index < pipelineStages.length - 1 ? 
                '<div class="absolute right-0 top-1/2 transform translate-x-6 -translate-y-1/2"><i class="fas fa-arrow-down text-gray-300"></i></div>' : 
                ''
            }
        </div>
    `).join('');
}

// Action functions
function viewJob(id) {
    const job = jobPostings.find(j => j.id === id);
    if (job) {
        showDevelopmentNotification(`View Job Details feature for ${job.title}`);
    }
}

function editJob(id) {
    const job = jobPostings.find(j => j.id === id);
    if (job) {
        showDevelopmentNotification(`Edit Job feature for ${job.title}`);
    }
}

function viewApplications(id) {
    const job = jobPostings.find(j => j.id === id);
    if (job) {
        showDevelopmentNotification(`View Applications feature for ${job.title}`);
    }
}

function pauseJob(id) {
    const job = jobPostings.find(j => j.id === id);
    if (job) {
        job.status = 'Paused';
        renderJobPostingsTable();
        showNotification(`Job "${job.title}" has been paused`, 'success');
    }
}

function activateJob(id) {
    const job = jobPostings.find(j => j.id === id);
    if (job) {
        job.status = 'Active';
        renderJobPostingsTable();
        showNotification(`Job "${job.title}" has been activated`, 'success');
    }
}

function postNewJob() {
    showDevelopmentNotification('Post New Job feature');
}

function bulkActions() {
    showDevelopmentNotification('Bulk Actions feature');
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
    renderJobPostingsTable();
    renderRecruitmentPipeline();
    
    // Add event listeners
    document.getElementById('statusFilter').addEventListener('change', function() {
        // Filter functionality would be implemented here
        renderJobPostingsTable();
    });
});
