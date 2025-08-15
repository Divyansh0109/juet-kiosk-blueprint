import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, GraduationCap, Smartphone, School } from "lucide-react";
import juetLogo from "@/assets/juet-logo.png";

interface LoginPageProps {
  onLogin: (enrollmentNo: string, role: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"student" | "parent" | "faculty">("student");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin(enrollmentNo, selectedRole);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="shadow-strong border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img src={juetLogo} alt="JUET Logo" className="h-16 w-16 rounded-full shadow-soft" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-primary">JUET WebKiosk</CardTitle>
              <CardDescription className="text-muted-foreground">
                Access your academic portal
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Role Selection */}
            <div className="flex gap-2">
              {[
                { role: "student", icon: GraduationCap, label: "Student" },
                { role: "parent", icon: Smartphone, label: "Parent" },
                { role: "faculty", icon: GraduationCap, label: "Faculty" }
              ].map(({ role, icon: Icon, label }) => (
                <Button
                  key={role}
                  type="button"
                  variant={selectedRole === role ? "default" : "outline"}
                  size="sm"
                  className="flex-1 h-10"
                  onClick={() => setSelectedRole(role as any)}
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {label}
                </Button>
              ))}
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="enrollment">Enrollment Number</Label>
                <Input
                  id="enrollment"
                  type="text"
                  placeholder="Enter your enrollment number"
                  value={enrollmentNo}
                  onChange={(e) => setEnrollmentNo(e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password / DOB</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password or DOB"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-11 w-10 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm">
                  Remember Me
                </Label>
              </div>

              <div className="space-y-3">
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-primary hover:bg-primary-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Login"}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-11"
                  disabled={isLoading}
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Login via OTP
                </Button>
              </div>

              <div className="text-center">
                <Button variant="link" className="text-primary hover:text-primary-dark">
                  Forgot Password?
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}