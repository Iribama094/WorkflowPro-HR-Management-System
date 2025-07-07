// Login Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');
    const successAnimation = document.getElementById('successAnimation');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    // Handle login process
    function handleLogin() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!email || !password) {
            showError('Please fill in all fields');
            return;
        }

        // Show loading state
        showLoading();

        // Authentication logic with specific credentials
        setTimeout(() => {
            // Check for specific username and password
            if (email.toLowerCase() === 'iribama' || email.toLowerCase() === 'iribama@workflowpro.com') {
                if (password === 'iribama123') {
                    // Store authentication state
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('currentUser', 'Iribama');

                    showSuccess();
                    setTimeout(() => {
                        // Redirect to dashboard
                        window.location.href = 'index.html';
                    }, 2000);
                } else {
                    hideLoading();
                    showError('Invalid password. Please try again.');
                }
            } else {
                hideLoading();
                showError('Invalid username. Please use "Iribama" or "iribama@workflowpro.com"');
            }
        }, 1500);
    }

    // Show loading state
    function showLoading() {
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;
    }

    // Hide loading state
    function hideLoading() {
        loginBtn.classList.remove('loading');
        loginBtn.disabled = false;
    }

    // Show success animation
    function showSuccess() {
        hideLoading();
        successAnimation.classList.add('show');
    }

    // Show error message
    function showError(message) {
        // Create error element if it doesn't exist
        let errorElement = document.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            loginForm.insertBefore(errorElement, loginForm.firstChild);
        }

        errorElement.textContent = message;
        errorElement.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 0.9rem;
            text-align: center;
            animation: slideDown 0.3s ease;
        `;

        // Remove error after 5 seconds
        setTimeout(() => {
            if (errorElement) {
                errorElement.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => {
                    if (errorElement.parentNode) {
                        errorElement.parentNode.removeChild(errorElement);
                    }
                }, 300);
            }
        }, 5000);
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Social login handlers
    document.querySelector('.google-btn').addEventListener('click', function() {
        handleSocialLogin('google');
    });

    document.querySelector('.microsoft-btn').addEventListener('click', function() {
        handleSocialLogin('microsoft');
    });

    function handleSocialLogin(provider) {
        showLoading();
        
        // Simulate social login
        setTimeout(() => {
            showSuccess();
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }, 1000);
    }

    // Input focus effects
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.classList.remove('focused');
            }
        });

        // Check if input has value on page load
        if (input.value) {
            input.parentNode.classList.add('focused');
        }
    });

    // Floating label effect
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value) {
                this.parentNode.classList.add('has-value');
            } else {
                this.parentNode.classList.remove('has-value');
            }
        });
    });

    // Add ripple effect to buttons
    function addRippleEffect(button) {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Add ripple to buttons
    addRippleEffect(loginBtn);
    document.querySelectorAll('.social-btn').forEach(btn => {
        addRippleEffect(btn);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Enter key to submit form
        if (e.key === 'Enter' && (emailInput.matches(':focus') || passwordInput.matches(':focus'))) {
            e.preventDefault();
            handleLogin();
        }
    });

    // Auto-fill demo credentials (for demo purposes)
    const demoBtn = document.createElement('button');
    demoBtn.type = 'button';
    demoBtn.textContent = 'Use Demo Credentials';
    demoBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 8px 16px;
        background: rgba(103, 126, 234, 0.1);
        border: 1px solid rgba(103, 126, 234, 0.2);
        border-radius: 8px;
        color: #667eea;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s ease;
        z-index: 1000;
    `;
    
    demoBtn.addEventListener('click', function() {
        emailInput.value = 'Iribama';
        passwordInput.value = 'iribama123';
        emailInput.parentNode.classList.add('has-value');
        passwordInput.parentNode.classList.add('has-value');
    });
    
    demoBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(103, 126, 234, 0.2)';
        this.style.transform = 'translateY(-1px)';
    });
    
    demoBtn.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(103, 126, 234, 0.1)';
        this.style.transform = 'translateY(0)';
    });
    
    document.body.appendChild(demoBtn);
});

// Password toggle functionality
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('passwordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleIcon.className = 'fas fa-eye';
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .form-group.focused .form-label {
        color: #667eea;
    }
    
    .form-group.has-value .form-input {
        border-color: rgba(103, 126, 234, 0.3);
    }
`;
document.head.appendChild(style);
