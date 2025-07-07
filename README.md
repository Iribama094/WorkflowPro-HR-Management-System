# WorkflowPro - HR Management System

A comprehensive, modern HR management system built with HTML, CSS, JavaScript, and Chart.js. WorkflowPro provides a complete solution for managing employees, attendance, payroll, performance, recruitment, training, and more.

##  Features

### Core Modules
- ** Dashboard** - Overview with interactive charts and quick actions
- ** Employee Management** - Complete employee lifecycle management
- ** Attendance Tracking** - Time tracking and attendance monitoring
- ** Payroll Processing** - Nigerian Naira-based payroll management
- ** Performance Management** - Reviews, goals, and KPI tracking
- ** Recruitment** - Job posting and hiring pipeline management
- ** Training & Development** - Course management and learning tracking
- ** Time Tracking** - Real-time timer and productivity monitoring
- ** Reports & Analytics** - Data visualization and insights
- ** Settings** - System configuration and integrations

### Key Highlights
- ** Beautiful UI** - Modern gradient design with consistent theming
- ** Responsive Design** - Works perfectly on all devices
- ** Interactive Charts** - Powered by Chart.js for data visualization
- ** Authentication System** - Secure login with session management
- ** Development Notifications** - Professional "under development" alerts
- ** Smooth Animations** - Engaging hover effects and transitions

##  Live Demo

Visit the live application: [WorkflowPro HR System](https://iribama094.github.io/workflowpro-hr)

##  Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/800x400?text=Dashboard+Screenshot)

### Employee Management
![Employees](https://via.placeholder.com/800x400?text=Employee+Management+Screenshot)

### Reports & Analytics
![Reports](https://via.placeholder.com/800x400?text=Reports+Analytics+Screenshot)

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS with CSS Variables
- **Charts**: Chart.js for data visualization
- **Icons**: Font Awesome 6
- **Authentication**: Custom JavaScript-based auth system
- **Responsive**: Mobile-first responsive design

## Project Structure

```
workflowpro-hr/
├── index.html              # Dashboard page
├── login.html              # Login page
├── employees.html          # Employee management
├── attendance.html         # Attendance tracking
├── payroll.html           # Payroll processing
├── performance.html       # Performance management
├── recruitment.html       # Recruitment management
├── training.html          # Training & development
├── timetracking.html      # Time tracking
├── reports.html           # Reports & analytics
├── settings.html          # System settings
├── styles.css             # Main stylesheet
├── login-styles.css       # Login page styles
├── script.js              # Main JavaScript
├── auth-check.js          # Authentication logic
├── employees.js           # Employee management logic
├── attendance.js          # Attendance logic
├── payroll.js             # Payroll logic
├── performance.js         # Performance logic
├── recruitment.js         # Recruitment logic
├── training.js            # Training logic
├── timetracking.js        # Time tracking logic
├── reports.js             # Reports logic
├── settings.js            # Settings logic
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/workflowpro-hr.git
   cd workflowpro-hr
   ```

2. **Open in browser**
   - Simply open `login.html` in your web browser
   - Or use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Login Credentials**
   - Username: `Iribama`
   - Password: `iribama123`

##  Usage

### For End Users
1. **Login** - Use the provided credentials to access the system
2. **Navigate** - Use the sidebar to access different modules
3. **Dashboard** - View key metrics and quick actions
4. **Manage Data** - Add, edit, and view employee information
5. **Track Time** - Use the time tracking features
6. **Generate Reports** - Create and download reports

### For Developers
1. **Customize Styling** - Modify `styles.css` and component-specific CSS
2. **Add Features** - Extend JavaScript files for new functionality
3. **Integrate APIs** - Replace mock data with real API calls
4. **Deploy** - Host on any static hosting service

##  Customization

### Theming
The application uses CSS variables for easy theming. Modify the root variables in `styles.css`:

```css
:root {
    --primary-color: #8B5CF6;
    --secondary-color: #EC4899;
    --success-color: #10B981;
    --warning-color: #F59E0B;
    --danger-color: #EF4444;
}
```

### Adding New Features
1. Create new HTML pages following the existing structure
2. Add corresponding JavaScript files for functionality
3. Update navigation in all pages
4. Add development notifications for incomplete features

## Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://iribama094.github.io/workflowpro-hr`

### Other Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **Firebase Hosting**: Google's hosting solution
- **Surge.sh**: Simple static hosting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Chart.js** - For beautiful data visualizations
- **Tailwind CSS** - For rapid UI development
- **Font Awesome** - For comprehensive icon library
- **Nigerian HR Community** - For context and requirements

## Support

For support, email support@workflowpro.ng or create an issue in this repository.

## Roadmap

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Mobile app development
- [ ] Advanced reporting features
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Email integration
- [ ] Calendar synchronization

---

