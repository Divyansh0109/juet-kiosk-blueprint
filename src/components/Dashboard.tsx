import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  CreditCard, 
  GraduationCap, 
  Bell, 
  BarChart3,
  Clock,
  FileText,
  LogOut,
  User
} from "lucide-react";

interface DashboardProps {
  enrollmentNo: string;
  role: string;
  onLogout: () => void;
}

export default function Dashboard({ enrollmentNo, role, onLogout }: DashboardProps) {
  const studentData = {
    name: "Divyansh Kumar",
    enrollment: enrollmentNo,
    attendance: 85,
    cgpa: 7.9,
    nextExam: "18 Aug 2024",
    feesDue: "₹12,000",
    profilePic: ""
  };

  const notices = [
    { id: 1, title: "Mid-term Exam Schedule Released", date: "2 days ago", priority: "high" },
    { id: 2, title: "Library Timing Update", date: "3 days ago", priority: "medium" },
    { id: 3, title: "Sports Week Registration Open", date: "5 days ago", priority: "low" }
  ];

  const todaySchedule = [
    { time: "09:00 AM", subject: "Data Structures", room: "CS-101" },
    { time: "11:00 AM", subject: "Mathematics", room: "MA-201" },
    { time: "02:00 PM", subject: "Database Systems", room: "CS-102" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <AvatarImage src={studentData.profilePic} alt={studentData.name} />
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {studentData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Hi, {studentData.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {studentData.enrollment} • {role.charAt(0).toUpperCase() + role.slice(1)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-soft animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.attendance}%</p>
                </div>
                <div className="h-10 w-10 bg-success/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-success" />
                </div>
              </div>
              <Progress value={studentData.attendance} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current CGPA</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.cgpa}</p>
                </div>
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Next Exam</p>
                  <p className="text-lg font-semibold text-foreground">{studentData.nextExam}</p>
                </div>
                <div className="h-10 w-10 bg-warning/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Fees Due</p>
                  <p className="text-lg font-semibold text-destructive">{studentData.feesDue}</p>
                </div>
                <div className="h-10 w-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Features */}
          <div className="lg:col-span-2 space-y-6">
            {/* Module Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer animate-scale-in">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Attendance Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    View subject-wise attendance breakdown
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Grade Sheet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Access your semester results
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Grades
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    Fee Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pay fees and view payment history
                  </p>
                  <Button className="w-full" size="sm">
                    Pay Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Timetable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    View your class schedule
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <Card className="shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{item.subject}</p>
                        <p className="text-sm text-muted-foreground">{item.room}</p>
                      </div>
                      <Badge variant="outline">{item.time}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Notices */}
          <div className="space-y-6">
            <Card className="shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-primary" />
                  Notices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notices.map((notice) => (
                    <div key={notice.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm text-foreground">{notice.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
                        </div>
                        <Badge 
                          variant={notice.priority === 'high' ? 'destructive' : notice.priority === 'medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {notice.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Notices
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}