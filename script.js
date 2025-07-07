// Toggle sidebar on mobile
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('ml-0');
});

// Toggle modal
function toggleModal() {
    document.querySelector('.modal').classList.toggle('active');
}

// Tab functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

if (tabs.length) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// Simulate chart animation
setTimeout(() => {
    const progressCircles = document.querySelectorAll('.progress-ring__circle');
    progressCircles.forEach(circle => {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        const offset = circumference - (75 / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
}, 500);

// Card hover effects
const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

// Show development notification for features under development
function showDevelopmentNotification(featureName) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full max-w-sm';

    notification.innerHTML = `
        <div class="flex items-start">
            <div class="flex-shrink-0">
                <i class="fas fa-code text-blue-200 text-lg"></i>
            </div>
            <div class="ml-3">
                <h4 class="text-sm font-medium">Feature Under Development</h4>
                <p class="text-xs text-blue-100 mt-1">${featureName} is currently being developed and will be available in a future update.</p>
            </div>
            <button class="ml-4 flex-shrink-0 text-blue-200 hover:text-white" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.remove('translate-x-full'), 100);

    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Initialize dashboard charts
function initializeDashboardCharts() {
    // Only initialize charts if we're on the dashboard page
    if (!document.getElementById('employeesChart')) return;

    // Employees Chart - Line chart showing growth
    const employeesCtx = document.getElementById('employeesChart').getContext('2d');
    new Chart(employeesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                data: [120, 125, 130, 135, 138, 142],
                borderColor: '#8B5CF6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: { point: { radius: 0 } }
        }
    });

    // Leave Requests Chart - Bar chart
    const leaveCtx = document.getElementById('leaveChart').getContext('2d');
    new Chart(leaveCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                data: [2, 1, 3, 1, 1],
                backgroundColor: ['#EC4899', '#F97316', '#EF4444', '#F59E0B', '#10B981'],
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });

    // Recruitment Chart - Doughnut chart
    const recruitmentCtx = document.getElementById('recruitmentChart').getContext('2d');
    new Chart(recruitmentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'Interviews', 'Offers'],
            datasets: [{
                data: [5, 4, 3],
                backgroundColor: ['#10B981', '#F59E0B', '#3B82F6'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            cutout: '60%'
        }
    });

    // Payroll Chart - Area chart
    const payrollCtx = document.getElementById('payrollChart').getContext('2d');
    new Chart(payrollCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                data: [110, 115, 118, 120, 122, 125],
                borderColor: '#F59E0B',
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: { point: { radius: 0 } }
        }
    });
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard charts after a short delay to ensure DOM is ready
    setTimeout(initializeDashboardCharts, 100);
});
