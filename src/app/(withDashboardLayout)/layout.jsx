import Sidebar from '@/components/Dashboard/Sidebar';
import AuthGuard from '@/components/Dashboard/AuthGuard';

export default function DashboardLayout({ children }) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background text-foreground flex relative selection:bg-primary/30">
        {/* Background elements */}
        <div className="fixed top-0 left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto relative z-10 w-full h-screen">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
