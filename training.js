// Training Management JavaScript

// Training courses data
const trainingCourses = [
    {
        id: 'COURSE001',
        title: 'Advanced JavaScript Development',
        category: 'Technical Skills',
        instructor: 'Adebayo Ogundimu',
        duration: '40 hours',
        level: 'Advanced',
        enrolled: 18,
        capacity: 25,
        rating: 4.8,
        price: '₦150,000',
        description: 'Master advanced JavaScript concepts including ES6+, async programming, and modern frameworks.',
        modules: ['ES6+ Features', 'Async Programming', 'Module Systems', 'Testing', 'Performance Optimization'],
        status: 'Active'
    },
    {
        id: 'COURSE002',
        title: 'Leadership Excellence Program',
        category: 'Leadership',
        instructor: 'Funmilayo Adebayo',
        duration: '32 hours',
        level: 'Intermediate',
        enrolled: 22,
        capacity: 30,
        rating: 4.9,
        price: '₦200,000',
        description: 'Develop essential leadership skills for managing teams and driving organizational success.',
        modules: ['Leadership Styles', 'Team Management', 'Communication', 'Decision Making', 'Conflict Resolution'],
        status: 'Active'
    },
    {
        id: 'COURSE003',
        title: 'Data Privacy & GDPR Compliance',
        category: 'Compliance',
        instructor: 'Kemi Olatunji',
        duration: '16 hours',
        level: 'Beginner',
        enrolled: 45,
        capacity: 50,
        rating: 4.6,
        price: '₦75,000',
        description: 'Understanding data protection laws and implementing GDPR compliance in your organization.',
        modules: ['GDPR Overview', 'Data Protection', 'Privacy Policies', 'Breach Response', 'Compliance Audits'],
        status: 'Active'
    },
    {
        id: 'COURSE004',
        title: 'Digital Marketing Mastery',
        category: 'Technical Skills',
        instructor: 'Chioma Nwankwo',
        duration: '28 hours',
        level: 'Intermediate',
        enrolled: 31,
        capacity: 35,
        rating: 4.7,
        price: '₦120,000',
        description: 'Comprehensive digital marketing strategies including SEO, social media, and analytics.',
        modules: ['SEO Fundamentals', 'Social Media Marketing', 'Content Strategy', 'Analytics', 'Paid Advertising'],
        status: 'Active'
    },
    {
        id: 'COURSE005',
        title: 'Effective Communication Skills',
        category: 'Soft Skills',
        instructor: 'Tunde Bakare',
        duration: '20 hours',
        level: 'Beginner',
        enrolled: 38,
        capacity: 40,
        rating: 4.5,
        price: '₦80,000',
        description: 'Enhance your communication skills for better workplace interactions and presentations.',
        modules: ['Verbal Communication', 'Non-verbal Cues', 'Presentation Skills', 'Active Listening', 'Written Communication'],
        status: 'Active'
    },
    {
        id: 'COURSE006',
        title: 'Project Management Fundamentals',
        category: 'Leadership',
        instructor: 'Ngozi Eze',
        duration: '36 hours',
        level: 'Intermediate',
        enrolled: 26,
        capacity: 30,
        rating: 4.8,
        price: '₦180,000',
        description: 'Learn project management methodologies and tools for successful project delivery.',
        modules: ['Project Planning', 'Risk Management', 'Agile Methodology', 'Team Coordination', 'Quality Control'],
        status: 'Active'
    }
];

// Training sessions data
const trainingSessions = [
    {
        id: 'SESSION001',
        title: 'JavaScript Bootcamp - Week 1',
        instructor: 'Adebayo Ogundimu',
        date: '2024-12-30',
        time: '09:00 AM',
        duration: '4 hours',
        participants: 18,
        maxParticipants: 25,
        location: 'Conference Room A',
        status: 'Scheduled'
    },
    {
        id: 'SESSION002',
        title: 'Leadership Workshop',
        instructor: 'Funmilayo Adebayo',
        date: '2025-01-02',
        time: '02:00 PM',
        duration: '3 hours',
        participants: 22,
        maxParticipants: 30,
        location: 'Training Hall',
        status: 'Scheduled'
    },
    {
        id: 'SESSION003',
        title: 'GDPR Compliance Training',
        instructor: 'Kemi Olatunji',
        date: '2025-01-05',
        time: '10:00 AM',
        duration: '2 hours',
        participants: 45,
        maxParticipants: 50,
        location: 'Virtual Meeting',
        status: 'Scheduled'
    },
    {
        id: 'SESSION004',
        title: 'Digital Marketing Strategy',
        instructor: 'Chioma Nwankwo',
        date: '2025-01-08',
        time: '11:00 AM',
        duration: '3.5 hours',
        participants: 31,
        maxParticipants: 35,
        location: 'Conference Room B',
        status: 'Scheduled'
    }
];

// Training categories
const trainingCategories = [
    { name: 'Technical Skills', count: 12, color: 'gradient-primary' },
    { name: 'Leadership', count: 8, color: 'gradient-success' },
    { name: 'Compliance', count: 6, color: 'gradient-warning' },
    { name: 'Soft Skills', count: 10, color: 'gradient-secondary' }
];

// Learning progress data
const learningProgress = [
    { department: 'Engineering', completed: 85, inProgress: 12, total: 97 },
    { department: 'Marketing', completed: 72, inProgress: 8, total: 80 },
    { department: 'Sales', completed: 68, inProgress: 15, total: 83 },
    { department: 'HR', completed: 91, inProgress: 6, total: 97 },
    { department: 'Finance', completed: 76, inProgress: 9, total: 85 },
    { department: 'Operations', completed: 82, inProgress: 11, total: 93 }
];

// Status colors
const statusColors = {
    'Active': 'bg-green-100 text-green-700',
    'Scheduled': 'bg-blue-100 text-blue-700',
    'Completed': 'bg-gray-100 text-gray-700',
    'Cancelled': 'bg-red-100 text-red-700'
};

// Level colors
const levelColors = {
    'Beginner': 'bg-green-100 text-green-700',
    'Intermediate': 'bg-yellow-100 text-yellow-700',
    'Advanced': 'bg-red-100 text-red-700'
};

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-yellow-400"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-gray-300"></i>';
    }
    
    return stars;
}

// Create course card
function createCourseCard(course) {
    const levelColor = levelColors[course.level] || 'bg-gray-100 text-gray-700';
    const enrollmentPercentage = (course.enrolled / course.capacity) * 100;
    
    return `
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover transition-all duration-300 transform hover:scale-105">
            <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                    <h4 class="font-semibold text-lg mb-2">${course.title}</h4>
                    <p class="text-sm text-gray-600 mb-3">${course.description}</p>
                </div>
            </div>
            
            <div class="flex items-center justify-between mb-3">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${levelColor}">
                    ${course.level}
                </span>
                <div class="flex items-center">
                    ${generateStars(course.rating)}
                    <span class="ml-1 text-sm text-gray-600">(${course.rating})</span>
                </div>
            </div>
            
            <div class="space-y-2 mb-4">
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Instructor:</span>
                    <span class="font-medium">${course.instructor}</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Duration:</span>
                    <span class="font-medium">${course.duration}</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Price:</span>
                    <span class="font-medium text-green-600">${course.price}</span>
                </div>
            </div>
            
            <div class="mb-4">
                <div class="flex justify-between text-sm mb-1">
                    <span class="text-gray-500">Enrollment</span>
                    <span class="font-medium">${course.enrolled}/${course.capacity}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="gradient-primary h-2 rounded-full transition-all duration-500" style="width: ${enrollmentPercentage}%"></div>
                </div>
            </div>
            
            <div class="flex space-x-2">
                <button class="flex-1 px-3 py-2 text-sm gradient-primary text-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105" onclick="viewCourse('${course.id}')">
                    <i class="fas fa-eye mr-1"></i>View Details
                </button>
                <button class="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition" onclick="enrollEmployees('${course.id}')">
                    <i class="fas fa-user-plus mr-1"></i>Enroll
                </button>
            </div>
        </div>
    `;
}

// Create training session row
function createTrainingSessionRow(session) {
    const statusColor = statusColors[session.status] || 'bg-gray-100 text-gray-700';
    
    return `
        <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
                <div>
                    <div class="text-sm font-medium text-gray-900">${session.title}</div>
                    <div class="text-sm text-gray-500">${session.location} • ${session.duration}</div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900">${session.instructor}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatDate(session.date)}</div>
                <div class="text-sm text-gray-500">${session.time}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <span class="text-sm font-medium text-gray-900">${session.participants}/${session.maxParticipants}</span>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}">
                    <i class="fas fa-${session.status === 'Scheduled' ? 'calendar' : session.status === 'Completed' ? 'check' : 'times'} mr-1"></i>
                    ${session.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button class="text-purple-600 hover:text-purple-900 transition" onclick="viewSession('${session.id}')" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-blue-600 hover:text-blue-900 transition" onclick="editSession('${session.id}')" title="Edit Session">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-green-600 hover:text-green-900 transition" onclick="manageParticipants('${session.id}')" title="Manage Participants">
                        <i class="fas fa-users"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

// Render course catalog
function renderCourseCatalog() {
    const container = document.getElementById('courseCatalog');
    container.innerHTML = trainingCourses.map(createCourseCard).join('');
}

// Render training sessions table
function renderTrainingSessionsTable() {
    const tbody = document.getElementById('trainingSessionsTableBody');
    tbody.innerHTML = trainingSessions.map(createTrainingSessionRow).join('');
}

// Render training categories
function renderTrainingCategories() {
    const container = document.getElementById('trainingCategories');
    container.innerHTML = trainingCategories.map(category => `
        <div class="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-purple-50 hover:shadow-md transition-all duration-300">
            <div class="flex items-center">
                <div class="w-10 h-10 rounded-full ${category.color} flex items-center justify-center mr-3 shadow-lg">
                    <i class="fas fa-book text-white"></i>
                </div>
                <div>
                    <div class="font-medium text-gray-900">${category.name}</div>
                    <div class="text-sm text-gray-500">${category.count} courses</div>
                </div>
            </div>
            <i class="fas fa-chevron-right text-gray-400"></i>
        </div>
    `).join('');
}

// Render learning progress
function renderLearningProgress() {
    const container = document.getElementById('learningProgress');
    container.innerHTML = learningProgress.map(dept => {
        const completionRate = (dept.completed / dept.total) * 100;
        return `
            <div class="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:shadow-md transition-all duration-300">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="font-medium text-gray-900">${dept.department}</h4>
                    <span class="text-sm font-bold text-blue-600">${Math.round(completionRate)}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div class="gradient-primary h-2 rounded-full transition-all duration-500" style="width: ${completionRate}%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500">
                    <span>${dept.completed} completed</span>
                    <span>${dept.inProgress} in progress</span>
                </div>
            </div>
        `;
    }).join('');
}

// Action functions
function viewCourse(id) {
    const course = trainingCourses.find(c => c.id === id);
    if (course) {
        document.getElementById('courseDetails').innerHTML = `
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-lg">${course.title}</h4>
                    <p class="text-gray-600 mt-1">${course.description}</p>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <span class="text-sm font-medium text-gray-500">Instructor:</span>
                        <p class="font-medium">${course.instructor}</p>
                    </div>
                    <div>
                        <span class="text-sm font-medium text-gray-500">Duration:</span>
                        <p class="font-medium">${course.duration}</p>
                    </div>
                    <div>
                        <span class="text-sm font-medium text-gray-500">Level:</span>
                        <p class="font-medium">${course.level}</p>
                    </div>
                    <div>
                        <span class="text-sm font-medium text-gray-500">Price:</span>
                        <p class="font-medium text-green-600">${course.price}</p>
                    </div>
                </div>
                
                <div>
                    <span class="text-sm font-medium text-gray-500">Course Modules:</span>
                    <ul class="list-disc list-inside mt-1 space-y-1">
                        ${course.modules.map(module => `<li class="text-sm text-gray-600">${module}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                        <span class="text-sm font-medium text-gray-500">Enrollment:</span>
                        <p class="font-medium">${course.enrolled}/${course.capacity} students</p>
                    </div>
                    <div class="flex items-center">
                        ${generateStars(course.rating)}
                        <span class="ml-1 text-sm text-gray-600">(${course.rating})</span>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('courseModal').classList.add('active');
    }
}

function enrollEmployees(id) {
    const course = trainingCourses.find(c => c.id === id);
    if (course) {
        showDevelopmentNotification(`Enroll Employees feature for ${course.title}`);
    }
}

function viewSession(id) {
    const session = trainingSessions.find(s => s.id === id);
    if (session) {
        showDevelopmentNotification(`View Session Details feature for ${session.title}`);
    }
}

function editSession(id) {
    const session = trainingSessions.find(s => s.id === id);
    if (session) {
        showDevelopmentNotification(`Edit Session feature for ${session.title}`);
    }
}

function manageParticipants(id) {
    const session = trainingSessions.find(s => s.id === id);
    if (session) {
        showDevelopmentNotification(`Manage Participants feature for ${session.title}`);
    }
}

function createCourse() {
    showDevelopmentNotification('Create Course feature');
}

function scheduleTraining() {
    showDevelopmentNotification('Schedule Training feature');
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderCourseCatalog();
    renderTrainingSessionsTable();
    renderTrainingCategories();
    renderLearningProgress();
    
    // Close modal when clicking outside
    document.getElementById('courseModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCourseModal();
        }
    });
});
