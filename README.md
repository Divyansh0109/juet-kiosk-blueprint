# JUET WebKiosk 🎓

A modern, responsive academic portal for **Jaypee University of Engineering & Technology (JUET)** built with React and TypeScript. This application provides students, parents, and faculty with easy access to academic information through a clean, intuitive interface.

![JUET WebKiosk Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-cyan)

## ✨ Features

### 🔐 **Secure Authentication**
- Multi-role login system (Student/Parent/Faculty)
- Enrollment number and password/DOB authentication
- Optional OTP-based login
- Remember me functionality
- Secure session management

### 📊 **Student Dashboard**
- **Real-time Stats**: Attendance percentage, current CGPA, upcoming exams
- **Academic Overview**: Quick access to grades, attendance details
- **Financial Information**: Fee status and payment due dates
- **Schedule Management**: Today's timetable at a glance
- **Communication**: Latest notices and announcements

### 🎨 **Modern UI/UX**
- JUET-branded design with university colors (#004e92)
- Fully responsive design for mobile and desktop
- Dark/light mode support
- Smooth animations and transitions
- Intuitive navigation and user experience

### 🛡️ **Security & Performance**
- Secure password handling
- Session timeout protection
- Offline data caching
- Fast loading with optimized assets

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd juet-webkiosk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Backend**: Supabase (Database, Authentication, Storage)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── LoginPage.tsx    # Authentication interface
│   └── Dashboard.tsx    # Main dashboard component
├── pages/               # Route-level components
│   ├── Index.tsx        # Landing page
│   └── NotFound.tsx     # 404 error page
├── assets/              # Static assets (images, icons)
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── index.css            # Global styles and design tokens
```

## 🎯 User Roles & Features

### 👨‍🎓 **Student Portal**
- View attendance records and percentage
- Access grade sheets and CGPA calculation
- Check fee payment status and due dates
- View daily/weekly timetable
- Read official notices and announcements

### 👨‍👩‍👧‍👦 **Parent Portal**
- Monitor child's academic progress
- View attendance and grade reports
- Track fee payment status
- Receive important notifications

### 👩‍🏫 **Faculty Portal**
- Manage class schedules
- Post announcements and notices
- Access administrative tools

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Setup

The project uses Supabase for backend services. No additional environment configuration is required as Supabase is pre-configured.

## 🚀 Deployment

### Via Lovable (Recommended)
1. Open your [Lovable Project](https://lovable.dev/projects/20449fad-e46a-44de-908b-45d07ba29695)
2. Click **"Publish"** in the top right
3. Your app will be live instantly

### Manual Deployment
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🎨 Design System

The application uses a comprehensive design system with:
- **Primary Color**: JUET Blue (#004e92)
- **Accent Colors**: Gold/Yellow for highlights
- **Typography**: Inter font family
- **Components**: Consistent spacing, shadows, and animations
- **Responsive**: Mobile-first design approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is developed for **Jaypee University of Engineering & Technology** and follows the university's guidelines for academic software.

## 📞 Support

For technical support or feature requests:
- Create an issue in this repository
- Contact the development team
- Check the [Lovable Documentation](https://docs.lovable.dev/)

---

**Built with ❤️ for JUET students and faculty**
