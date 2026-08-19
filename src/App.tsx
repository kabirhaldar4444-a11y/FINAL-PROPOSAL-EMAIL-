import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, CheckCircle2, AlertCircle, X,
  Users, History, Settings, Mail
} from 'lucide-react';
import { User, UserRole } from './types';
import UnifiedMailer from './components/UnifiedMailer';
import EmailTemplates from './components/EmailTemplates';
import CustomerManagement from './components/CustomerManagement';
import EmailHistory from './components/EmailHistory';
import BrandingSettings from './components/BrandingSettings';
import { api } from './lib/api';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export default function App() {
  // Authentication status & session loading state
  const [user, setUser] = useState<User | null>({
    id: 'usr_admin',
    name: 'Yatindra Singh',
    email: 'support@isuccessnode.com',
    role: UserRole.ADMIN,
    createdAt: new Date().toISOString()
  });

  // Tab State
  const [activeTab, setActiveTab] = useState<'proposal' | 'templates' | 'customers' | 'logs' | 'settings'>('proposal');
  const [emailLogs, setEmailLogs] = useState<any[]>([]);

  const fetchEmailLogs = async () => {
    try {
      const logs = await api.emailLogs.list();
      setEmailLogs(logs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (activeTab === 'logs') {
      fetchEmailLogs();
    }
  }, [activeTab]);

  const tabs = [
    { id: 'proposal', label: 'Proposal Builder', icon: Sparkles },
    { id: 'templates', label: 'Templates', icon: Mail },
    { id: 'customers', label: 'Clients Ledger', icon: Users },
    { id: 'logs', label: 'Sent Logs', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Toast notifications hub state
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Trigger notification messaging
  const notify = (message: string, type: 'success' | 'error' = 'success') => {
    const id = `toast_${Date.now()}`;
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Automatically dismiss toast after 4000ms
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleRemoveToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleLogout = () => {
    notify('Sign Out is disabled on this build.', 'error');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative overflow-x-hidden font-sans antialiased">
      
      {/* Background subtle glowing radial ambient lights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-violet-100/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[450px] rounded-full bg-indigo-100/40 blur-[140px] pointer-events-none" />

      {/* COMPACT MAIN HEADER LAYER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/90 px-4 lg:px-6 py-3 flex items-center justify-between no-print shadow-xs transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-500/20">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight text-slate-900 leading-none uppercase">Proposal Email</h1>
            <p className="text-[10px] text-slate-500 font-semibold tracking-wide mt-0.5">Enterprise Proposal & Billing Studio</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{user?.name || 'Administrator'}</span>
          </div>
        </div>
      </header>

      {/* NAVIGATION TABS BAR */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 lg:px-6 py-2 no-print flex items-center justify-start overflow-x-auto gap-1.5 scrollbar-none shadow-2xs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all duration-150 ${
                isActive 
                  ? 'text-violet-700 bg-violet-50 border border-violet-200 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-violet-600' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* COCKPIT CORE MAIN WORKSPACE */}
      <main className="w-full max-w-full px-4 lg:px-6 py-5 pb-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.12 }}
          >
            {activeTab === 'proposal' && (
              <UnifiedMailer 
                theme="light"
                onNotify={notify} 
                user={user} 
                onLogout={handleLogout} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            )}
            {activeTab === 'templates' && (
              <EmailTemplates 
                onNotify={notify}
                onRefreshData={() => {}}
              />
            )}
            {activeTab === 'customers' && (
              <CustomerManagement 
                onNotify={notify}
                onRefreshData={() => {}}
              />
            )}
            {activeTab === 'logs' && (
              <EmailHistory 
                emails={emailLogs}
                onNotify={notify}
              />
            )}
            {activeTab === 'settings' && (
              <BrandingSettings 
                onNotify={notify}
                onRefreshData={() => {}}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* GLOBAL TOAST NOTIFICATION CORNER */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none no-print">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className={`p-3.5 rounded-xl border pointer-events-auto flex items-start gap-3 shadow-xl backdrop-blur-md ${
                t.type === 'success' 
                  ? 'bg-emerald-50/95 border-emerald-200 text-emerald-900' 
                  : 'bg-rose-50/95 border-rose-200 text-rose-900'
              }`}
            >
              {t.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
              )}
              <p className="text-xs font-semibold select-none pr-3 leading-relaxed text-slate-800">{t.message}</p>
              <button 
                onClick={() => handleRemoveToast(t.id)} 
                className="text-slate-400 hover:text-slate-700 text-xs block cursor-pointer select-none ml-auto"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}

