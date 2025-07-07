// Performance Management JavaScript

// Nigerian employee performance data
const performanceData = [
    {
        id: 'EMP001',
        name: 'Ifeloluwa Are',
        department: 'Engineering',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        overallRating: 4.8,
        goalsProgress: 95,
        keyStrengths: ['Technical Excellence', 'Leadership', 'Innovation'],
        reviewStatus: 'Completed',
        goals: [
            { title: 'Complete React Migration', progress: 100, target: 'Q4 2024' },
            { title: 'Mentor 3 Junior Developers', progress: 90, target: 'Q4 2024' },
            { title: 'Improve Code Coverage to 85%', progress: 95, target: 'Q4 2024' }
        ],
        achievements: [
            'Led successful migration of legacy system',
            'Reduced deployment time by 40%',
            'Mentored 4 junior developers'
        ],
        feedback: 'Exceptional performer with strong technical skills and leadership qualities.'
    },
    {
        id: 'EMP002',
        name: 'Ayodele Bolarinwa',
        department: 'Marketing',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        overallRating: 4.5,
        goalsProgress: 88,
        keyStrengths: ['Strategic Thinking', 'Campaign Management', 'Analytics'],
        reviewStatus: 'Completed',
        goals: [
            { title: 'Increase Brand Awareness by 25%', progress: 92, target: 'Q4 2024' },
            { title: 'Launch 3 Major Campaigns', progress: 100, target: 'Q4 2024' },
            { title: 'Improve ROI by 15%', progress: 75, target: 'Q4 2024' }
        ],
        achievements: [
            'Increased social media engagement by 45%',
            'Successfully launched product campaign',
            'Improved conversion rates by 20%'
        ],
        feedback: 'Strong marketing professional with excellent campaign execution skills.'
    },
    {
        id: 'EMP003',
        name: 'Mieyefa Oyinke-Preye',
        department: 'Sales',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        overallRating: 4.9,
        goalsProgress: 98,
        keyStrengths: ['Client Relations', 'Negotiation', 'Revenue Growth'],
        reviewStatus: 'Completed',
        goals: [
            { title: 'Achieve 120% of Sales Target', progress: 125, target: 'Q4 2024' },
            { title: 'Acquire 15 New Enterprise Clients', progress: 100, target: 'Q4 2024' },
            { title: 'Improve Client Retention to 95%', progress: 98, target: 'Q4 2024' }
        ],
        achievements: [
            'Exceeded sales target by 25%',
            'Closed largest deal in company history',
            'Maintained 98% client satisfaction'
        ],
        feedback: 'Outstanding sales performance with exceptional client relationship skills.'
    },
    {
        id: 'EMP004',
        name: 'Islamiyat Salaudeen',
        department: 'HR',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        overallRating: 4.3,
        goalsProgress: 85,
        keyStrengths: ['Employee Relations', 'Policy Development', 'Training'],
        reviewStatus: 'In Progress',
        goals: [
            { title: 'Implement New Performance System', progress: 90, target: 'Q4 2024' },
            { title: 'Reduce Turnover by 20%', progress: 85, target: 'Q4 2024' },
            { title: 'Complete HR Certification', progress: 80, target: 'Q4 2024' }
        ],
        achievements: [
            'Improved employee satisfaction by 30%',
            'Streamlined recruitment process',
            'Developed comprehensive training program'
        ],
        feedback: 'Dedicated HR professional with strong focus on employee development.'
    },
    {
        id: 'EMP005',
        name: 'Inioluwa Omilaju',
        department: 'Engineering',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        overallRating: 4.1,
        goalsProgress: 82,
        keyStrengths: ['Frontend Development', 'UI/UX Design', 'Problem Solving'],
        reviewStatus: 'Completed',
        goals: [
            { title: 'Master React Native', progress: 85, target: 'Q4 2024' },
            { title: 'Improve App Performance by 30%', progress: 90, target: 'Q4 2024' },
            { title: 'Lead Mobile Team', progress: 70, target: 'Q4 2024' }
        ],
        achievements: [
            'Developed award-winning mobile app',
            'Improved user experience significantly',
            'Contributed to open source projects'
        ],
        feedback: 'Talented developer with strong potential for leadership roles.'
    }
];

// Generate additional performance data for remaining employees
const additionalEmployees = [
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

// Generate performance data for additional employees
additionalEmployees.forEach(emp => {
    const rating = 3.5 + Math.random() * 1.5; // Rating between 3.5 and 5.0
    const progress = 70 + Math.random() * 30; // Progress between 70% and 100%
    const statuses = ['Completed', 'In Progress', 'Pending'];
    const strengthsPool = [
        'Communication', 'Leadership', 'Technical Skills', 'Problem Solving',
        'Teamwork', 'Innovation', 'Time Management', 'Adaptability',
        'Customer Focus', 'Strategic Thinking', 'Analytical Skills', 'Creativity'
    ];
    
    const randomStrengths = strengthsPool.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    performanceData.push({
        ...emp,
        overallRating: Math.round(rating * 10) / 10,
        goalsProgress: Math.round(progress),
        keyStrengths: randomStrengths,
        reviewStatus: statuses[Math.floor(Math.random() * statuses.length)],
        goals: [
            { title: 'Professional Development Goal', progress: Math.round(70 + Math.random() * 30), target: 'Q4 2024' },
            { title: 'Performance Improvement Goal', progress: Math.round(70 + Math.random() * 30), target: 'Q4 2024' },
            { title: 'Team Collaboration Goal', progress: Math.round(70 + Math.random() * 30), target: 'Q4 2024' }
        ],
        achievements: [
            'Completed assigned projects on time',
            'Contributed to team success',
            'Showed continuous improvement'
        ],
        feedback: 'Solid performer with good potential for growth.'
    });
});

// Rating colors and labels
const ratingColors = {
    5: { color: 'text-green-600', bg: 'bg-green-100', label: 'Excellent' },
    4: { color: 'text-blue-600', bg: 'bg-blue-100', label: 'Good' },
    3: { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Average' },
    2: { color: 'text-orange-600', bg: 'bg-orange-100', label: 'Below Average' },
    1: { color: 'text-red-600', bg: 'bg-red-100', label: 'Poor' }
};

// Status colors
const statusColors = {
    'Completed': 'bg-green-100 text-green-700',
    'In Progress': 'bg-blue-100 text-blue-700',
    'Pending': 'bg-yellow-100 text-yellow-700'
};

// Get rating info
function getRatingInfo(rating) {
    const roundedRating = Math.round(rating);
    return ratingColors[roundedRating] || ratingColors[3];
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-yellow-400"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-gray-300"></i>';
    }
    
    return stars;
}

// Create performance row
function createPerformanceRow(employee) {
    const ratingInfo = getRatingInfo(employee.overallRating);
    const statusColor = statusColors[employee.reviewStatus] || 'bg-gray-100 text-gray-700';
    
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
                <div class="flex items-center">
                    <div class="flex items-center space-x-1">
                        ${generateStars(employee.overallRating)}
                    </div>
                    <span class="ml-2 text-sm font-medium ${ratingInfo.color}">${employee.overallRating}/5</span>
                </div>
                <div class="text-xs ${ratingInfo.color}">${ratingInfo.label}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div class="gradient-primary h-2 rounded-full transition-all duration-500" style="width: ${employee.goalsProgress}%"></div>
                    </div>
                    <span class="text-sm font-medium">${employee.goalsProgress}%</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex flex-wrap gap-1">
                    ${employee.keyStrengths.map(strength => 
                        `<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">${strength}</span>`
                    ).join('')}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="fas fa-${employee.reviewStatus === 'Completed' ? 'check' : employee.reviewStatus === 'In Progress' ? 'clock' : 'calendar'} mr-1"></i>
                    ${employee.reviewStatus}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="viewPerformance('${employee.id}')" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="editReview('${employee.id}')" title="Edit Review">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-green-600 hover:text-green-900 transition" onclick="setGoalsForEmployee('${employee.id}')" title="Set Goals">
                        <i class="fas fa-bullseye"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Render performance table
function renderPerformanceTable() {
    const tbody = document.getElementById('performanceTableBody');
    tbody.innerHTML = performanceData.map(createPerformanceRow).join('');
}

// Render top performers
function renderTopPerformers() {
    const topPerformers = performanceData
        .sort((a, b) => b.overallRating - a.overallRating)
        .slice(0, 5);
    
    const container = document.getElementById('topPerformers');
    container.innerHTML = topPerformers.map((employee, index) => `
        <div class="flex items-center justify-between p-3 rounded-lg ${index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 'bg-gray-50'} hover:shadow-md transition-all duration-300">
            <div class="flex items-center">
                <div class="relative">
                    <img src="${employee.avatar}" alt="${employee.name}" 
                         class="w-10 h-10 rounded-full object-cover"
                         onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=667eea&color=fff&size=40'"
                         loading="lazy">
                    ${index === 0 ? '<div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"><i class="fas fa-crown text-white text-xs"></i></div>' : ''}
                </div>
                <div class="ml-3">
                    <div class="text-sm font-medium">${employee.name}</div>
                    <div class="text-xs text-gray-500">${employee.department}</div>
                </div>
            </div>
            <div class="text-right">
                <div class="text-sm font-bold ${getRatingInfo(employee.overallRating).color}">${employee.overallRating}</div>
                <div class="flex items-center">
                    ${generateStars(employee.overallRating)}
                </div>
            </div>
        </div>
    `).join('');
}

// Action functions
function viewPerformance(id) {
    const employee = performanceData.find(emp => emp.id === id);
    if (employee) {
        // Populate modal with employee data
        document.getElementById('reviewEmployeeInfo').innerHTML = `
            <div class="flex items-center space-x-3 mb-4">
                <img src="${employee.avatar}" alt="${employee.name}" class="w-16 h-16 rounded-full object-cover">
                <div>
                    <h4 class="font-semibold">${employee.name}</h4>
                    <p class="text-gray-500">${employee.department}</p>
                </div>
            </div>
            <div class="space-y-2">
                <div><span class="font-medium">Employee ID:</span> ${employee.id}</div>
                <div><span class="font-medium">Review Period:</span> Q4 2024</div>
                <div><span class="font-medium">Review Status:</span> <span class="px-2 py-1 rounded-full text-xs ${statusColors[employee.reviewStatus]}">${employee.reviewStatus}</span></div>
            </div>
        `;
        
        document.getElementById('reviewMetrics').innerHTML = `
            <div class="space-y-4">
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-sm font-medium">Overall Rating</span>
                        <span class="text-sm font-bold ${getRatingInfo(employee.overallRating).color}">${employee.overallRating}/5</span>
                    </div>
                    <div class="flex items-center">
                        ${generateStars(employee.overallRating)}
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-sm font-medium">Goals Progress</span>
                        <span class="text-sm font-bold">${employee.goalsProgress}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="gradient-primary h-2 rounded-full" style="width: ${employee.goalsProgress}%"></div>
                    </div>
                </div>
                <div>
                    <span class="text-sm font-medium">Key Strengths</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                        ${employee.keyStrengths.map(strength => 
                            `<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">${strength}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('reviewGoals').innerHTML = `
            <div class="space-y-3">
                ${employee.goals.map(goal => `
                    <div class="border rounded-lg p-3">
                        <div class="flex justify-between items-center mb-2">
                            <h5 class="font-medium">${goal.title}</h5>
                            <span class="text-sm text-gray-500">${goal.target}</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-full bg-gray-200 rounded-full h-2 mr-2">
                                <div class="gradient-success h-2 rounded-full" style="width: ${goal.progress}%"></div>
                            </div>
                            <span class="text-sm font-medium">${goal.progress}%</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-4">
                <h5 class="font-medium mb-2">Key Achievements</h5>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                    ${employee.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            <div class="mt-4">
                <h5 class="font-medium mb-2">Manager Feedback</h5>
                <p class="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">${employee.feedback}</p>
            </div>
        `;
        
        document.getElementById('reviewModal').classList.add('active');
    }
}

function editReview(id) {
    const employee = performanceData.find(emp => emp.id === id);
    if (employee) {
        showDevelopmentNotification(`Edit Review feature for ${employee.name}`);
    }
}

function setGoalsForEmployee(id) {
    const employee = performanceData.find(emp => emp.id === id);
    if (employee) {
        showDevelopmentNotification(`Set Goals feature for ${employee.name}`);
    }
}

function startReview() {
    showDevelopmentNotification('Start Performance Review feature');
}

function setGoals() {
    showDevelopmentNotification('Set Company Goals feature');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderPerformanceTable();
    renderTopPerformers();
    
    // Close modal when clicking outside
    document.getElementById('reviewModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeReviewModal();
        }
    });
});
