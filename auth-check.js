// Authentication Check Script
// This script should be included in protected pages like the dashboard

(function() {
    // Check if user is authenticated
    function checkAuthentication() {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const currentUser = localStorage.getItem('currentUser');
        
        // If not authenticated, redirect to login
        if (!isAuthenticated || isAuthenticated !== 'true') {
            window.location.href = 'login.html';
            return false;
        }
        
        return true;
    }
    
    // Update user info in the dashboard if authenticated
    function updateUserInfo() {
        const currentUser = localStorage.getItem('currentUser');
        
        if (currentUser) {
            // Update the user name in the dashboard
            const userNameElements = document.querySelectorAll('[data-user-name]');
            userNameElements.forEach(element => {
                element.textContent = currentUser;
            });
            
            // Update the avatar initials
            const avatarElements = document.querySelectorAll('[data-user-initials]');
            avatarElements.forEach(element => {
                const initials = currentUser.split(' ').map(name => name.charAt(0)).join('').toUpperCase();
                element.textContent = initials;
            });
            
            // Update welcome message
            const welcomeElements = document.querySelectorAll('[data-welcome-message]');
            welcomeElements.forEach(element => {
                element.textContent = `Welcome back, ${currentUser}!`;
            });
        }
    }
    
    // Logout function
    function logout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
    
    // Make logout function globally available
    window.logout = logout;
    
    // Run authentication check when page loads
    document.addEventListener('DOMContentLoaded', function() {
        if (checkAuthentication()) {
            updateUserInfo();
            
            // Add logout functionality to logout links
            const logoutLinks = document.querySelectorAll('[data-logout]');
            logoutLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    logout();
                });
            });
        }
    });
    
    // Check authentication immediately (before DOM loads)
    checkAuthentication();
})();
