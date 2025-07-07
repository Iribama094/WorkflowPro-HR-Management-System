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
    if (!document.getElementById('employeeDistributionChart')) return;

    // Employee Distribution Chart - Doughnut chart showing department breakdown
    const employeeDistCtx = document.getElementById('employeeDistributionChart').getContext('2d');
    new Chart(employeeDistCtx, {
        type: 'doughnut',
        data: {
            labels: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'],
            datasets: [{
                data: [32, 18, 15, 12, 13, 10],
                backgroundColor: [
                    '#8B5CF6', // Purple
                    '#10B981', // Green
                    '#F59E0B', // Orange
                    '#EF4444', // Red
                    '#3B82F6', // Blue
                    '#EC4899'  // Pink
                ],
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
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard charts after a short delay to ensure DOM is ready
    setTimeout(initializeDashboardCharts, 100);
});
