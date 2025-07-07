// Settings Management JavaScript

// Settings data structure
const settingsData = {
    general: {
        language: 'en-US',
        timezone: 'Africa/Lagos',
        dateFormat: 'DD/MM/YYYY',
        currency: 'NGN',
        darkMode: false,
        showTooltips: true
    },
    company: {
        name: 'WorkflowPro Technologies Ltd',
        registrationNumber: 'RC-1234567',
        address: 'Plot 123, Victoria Island, Lagos, Nigeria',
        phone: '+234 801 234 5678',
        email: 'info@workflowpro.ng',
        logo: null
    },
    security: {
        passwordPolicy: {
            minLength: true,
            requireCase: true,
            requireSpecial: false
        },
        twoFactorAuth: true,
        sessionTimeout: 30,
        maxLoginAttempts: 5
    },
    notifications: {
        email: {
            newEmployees: true,
            payrollCompleted: true,
            performanceReminders: false,
            systemMaintenance: true
        },
        push: {
            attendanceUpdates: true,
            taskAssignments: true,
            meetingReminders: false
        }
    },
    integrations: {
        slack: { connected: true, configured: true },
        googleWorkspace: { connected: false, configured: false },
        microsoft365: { connected: true, configured: true },
        bankingAPI: { connected: false, configured: false }
    },
    backup: {
        autoBackup: true,
        lastBackup: new Date().toISOString(),
        retentionPeriods: {
            employeeRecords: '7 years',
            auditLogs: '2 years'
        }
    }
};

// Track unsaved changes
let hasUnsavedChanges = false;

// Initialize settings page
function initializeSettings() {
    // Set up navigation
    setupSettingsNavigation();
    
    // Load saved settings
    loadSettings();
    
    // Set up form change tracking
    setupChangeTracking();
    
    // Show general settings by default
    showSettingsSection('general');
}

// Setup settings navigation
function setupSettingsNavigation() {
    const navItems = document.querySelectorAll('.settings-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Update active state
            navItems.forEach(nav => {
                nav.classList.remove('active', 'bg-gradient-to-r', 'from-purple-100', 'to-blue-100', 'text-purple-700', 'shadow-sm');
                nav.classList.add('hover:bg-gray-100', 'text-gray-700');
            });
            
            this.classList.remove('hover:bg-gray-100', 'text-gray-700');
            this.classList.add('active', 'bg-gradient-to-r', 'from-purple-100', 'to-blue-100', 'text-purple-700', 'shadow-sm');
            
            // Show corresponding section
            showSettingsSection(section);
        });
    });
}

// Show specific settings section
function showSettingsSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.settings-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
    }
}

// Load settings from data
function loadSettings() {
    // General settings
    const languageSelect = document.querySelector('select[data-setting="language"]');
    const timezoneSelect = document.querySelector('select[data-setting="timezone"]');
    const dateFormatSelect = document.querySelector('select[data-setting="dateFormat"]');
    const currencySelect = document.querySelector('select[data-setting="currency"]');
    
    // Company settings
    const companyNameInput = document.querySelector('input[data-setting="companyName"]');
    const registrationInput = document.querySelector('input[data-setting="registrationNumber"]');
    const addressTextarea = document.querySelector('textarea[data-setting="address"]');
    const phoneInput = document.querySelector('input[data-setting="phone"]');
    const emailInput = document.querySelector('input[data-setting="email"]');
    
    // Load values if elements exist
    if (companyNameInput) companyNameInput.value = settingsData.company.name;
    if (registrationInput) registrationInput.value = settingsData.company.registrationNumber;
    if (addressTextarea) addressTextarea.value = settingsData.company.address;
    if (phoneInput) phoneInput.value = settingsData.company.phone;
    if (emailInput) emailInput.value = settingsData.company.email;
}

// Setup change tracking
function setupChangeTracking() {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            hasUnsavedChanges = true;
            updateSaveButtonState();
        });
    });
}

// Update save button state
function updateSaveButtonState() {
    const saveButton = document.querySelector('[onclick="saveAllSettings()"]');
    if (saveButton) {
        if (hasUnsavedChanges) {
            saveButton.classList.add('bg-opacity-40');
            saveButton.innerHTML = '<i class="fas fa-save mr-2"></i>Save Changes';
        } else {
            saveButton.classList.remove('bg-opacity-40');
            saveButton.innerHTML = '<i class="fas fa-save mr-2"></i>Save All';
        }
    }
}

// Save all settings
function saveAllSettings() {
    if (!hasUnsavedChanges) {
        showNotification('No changes to save', 'info');
        return;
    }
    
    // Simulate saving process
    showNotification('Saving settings...', 'info');
    
    setTimeout(() => {
        // Collect form data and update settingsData object
        collectFormData();
        
        hasUnsavedChanges = false;
        updateSaveButtonState();
        
        showNotification('Settings saved successfully!', 'success');
    }, 1500);
}

// Collect form data
function collectFormData() {
    // Company settings
    const companyNameInput = document.querySelector('input[value*="WorkflowPro"]');
    const registrationInput = document.querySelector('input[value*="RC-"]');
    const addressTextarea = document.querySelector('textarea');
    const phoneInput = document.querySelector('input[value*="+234"]');
    const emailInput = document.querySelector('input[value*="@workflowpro"]');
    
    if (companyNameInput) settingsData.company.name = companyNameInput.value;
    if (registrationInput) settingsData.company.registrationNumber = registrationInput.value;
    if (addressTextarea) settingsData.company.address = addressTextarea.value;
    if (phoneInput) settingsData.company.phone = phoneInput.value;
    if (emailInput) settingsData.company.email = emailInput.value;
    
    // Collect other form data as needed
    console.log('Settings updated:', settingsData);
}

// Reset settings
function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default values? This action cannot be undone.')) {
        showNotification('Resetting settings...', 'info');
        
        setTimeout(() => {
            // Reset to default values
            loadDefaultSettings();
            hasUnsavedChanges = false;
            updateSaveButtonState();
            
            showNotification('Settings reset to defaults', 'success');
        }, 1000);
    }
}

// Load default settings
function loadDefaultSettings() {
    // Reset form values to defaults
    const companyNameInput = document.querySelector('input[value*="WorkflowPro"]');
    const registrationInput = document.querySelector('input[value*="RC-"]');
    
    if (companyNameInput) companyNameInput.value = 'WorkflowPro Technologies Ltd';
    if (registrationInput) registrationInput.value = 'RC-1234567';
    
    // Reset other form elements as needed
}

// Integration management
function connectIntegration(service) {
    showNotification(`Connecting to ${service}...`, 'info');
    
    setTimeout(() => {
        settingsData.integrations[service].connected = true;
        updateIntegrationStatus(service);
        showNotification(`Successfully connected to ${service}!`, 'success');
    }, 2000);
}

function disconnectIntegration(service) {
    if (confirm(`Are you sure you want to disconnect from ${service}?`)) {
        settingsData.integrations[service].connected = false;
        updateIntegrationStatus(service);
        showNotification(`Disconnected from ${service}`, 'info');
    }
}

function configureIntegration(service) {
    showDevelopmentNotification(`Configure ${service} Integration feature`);
}

// Update integration status in UI
function updateIntegrationStatus(service) {
    // This would update the UI to reflect the new connection status
    console.log(`Updated ${service} status:`, settingsData.integrations[service]);
}

// Backup management
function performBackup() {
    showNotification('Starting backup process...', 'info');
    
    setTimeout(() => {
        settingsData.backup.lastBackup = new Date().toISOString();
        showNotification('Backup completed successfully!', 'success');
        
        // Update last backup time in UI
        updateBackupStatus();
    }, 3000);
}

function updateBackupStatus() {
    const lastBackupElement = document.querySelector('.text-green-600');
    if (lastBackupElement) {
        const now = new Date();
        lastBackupElement.textContent = `Last backup: Today at ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
    }
}

// Data export functions
function exportEmployeeData() {
    showNotification('Preparing employee data export...', 'info');
    setTimeout(() => {
        showNotification('Employee data exported successfully!', 'success');
    }, 2000);
}

function exportPayrollRecords() {
    showNotification('Preparing payroll records export...', 'info');
    setTimeout(() => {
        showNotification('Payroll records exported successfully!', 'success');
    }, 2000);
}

function exportPerformanceData() {
    showNotification('Preparing performance data export...', 'info');
    setTimeout(() => {
        showNotification('Performance data exported successfully!', 'success');
    }, 2000);
}

function exportAttendanceLogs() {
    showNotification('Preparing attendance logs export...', 'info');
    setTimeout(() => {
        showNotification('Attendance logs exported successfully!', 'success');
    }, 2000);
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

// Warn about unsaved changes
window.addEventListener('beforeunload', function(e) {
    if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSettings();
    
    // Add click handlers for export buttons
    const exportButtons = document.querySelectorAll('[class*="border-gray-200 rounded-lg hover:bg-gray-50"]');
    exportButtons.forEach((button, index) => {
        if (button.querySelector('.fa-users')) {
            button.addEventListener('click', exportEmployeeData);
        } else if (button.querySelector('.fa-money-bill')) {
            button.addEventListener('click', exportPayrollRecords);
        } else if (button.querySelector('.fa-chart-bar')) {
            button.addEventListener('click', exportPerformanceData);
        } else if (button.querySelector('.fa-calendar')) {
            button.addEventListener('click', exportAttendanceLogs);
        }
    });
    
    // Add backup button handler
    const backupButton = document.querySelector('.bg-green-600');
    if (backupButton) {
        backupButton.addEventListener('click', performBackup);
    }
});
