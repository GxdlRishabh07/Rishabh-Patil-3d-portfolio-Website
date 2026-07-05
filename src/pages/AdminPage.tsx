import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInCard } from "@/components/ui/sign-in-card-2";
import type { Session } from "@supabase/supabase-js";

interface AdminMessage {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApprovedAdmin {
  email: string;
  status: string;
}

export function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);

  // Auth form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Dashboard state
  const [messages, setMessages] = useState<AdminMessage[]>([]);
  const [approvedAdmins, setApprovedAdmins] = useState<ApprovedAdmin[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [hiddenMessageIds, setHiddenMessageIds] = useState<number[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      const stored = localStorage.getItem(`hidden_messages_${session.user.email}`);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHiddenMessageIds(JSON.parse(stored));
      } else {
        setHiddenMessageIds([]);
      }
    }
  }, [session]);

  const fetchDashboardData = useCallback(async (superAdmin: boolean) => {
    // Fetch messages
    const { data: msgs } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (msgs) setMessages(msgs);

    if (superAdmin) {
      // Fetch admins
      const { data: admins } = await supabase.from('approved_admins').select('*');
      if (admins) setApprovedAdmins(admins);
    }
  }, []);

  const checkUserStatus = useCallback(async (currentSession: Session | null) => {
    if (!currentSession) {
      setLoading(false);
      return;
    }

    const userEmail = currentSession.user.email;
    if (userEmail === "patilrishabh50@gmail.com") {
      setIsSuperAdmin(true);
      setIsApproved(true);
      setIsPaused(false);
      fetchDashboardData(true);
    } else {
      setIsSuperAdmin(false);
      // Check if approved
      const { data } = await supabase
        .from('approved_admins')
        .select('*')
        .eq('email', userEmail)
        .single();
        
      if (data) {
        if (data.status === 'paused') {
          setIsApproved(false);
          setIsPaused(true);
        } else {
          setIsApproved(true);
          setIsPaused(false);
          fetchDashboardData(false);
        }
      } else {
        setIsApproved(false);
        setIsPaused(false);
      }
    }
    setLoading(false);
  }, [fetchDashboardData]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      checkUserStatus(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      checkUserStatus(currentSession);
    });

    return () => subscription.unsubscribe();
  }, [checkUserStatus]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthMessage("");
    setAuthSubmitting(true);
    
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setAuthError(error.message);
      else setAuthMessage("Sign up successful! You are now logged in. If you are not the Super Admin, your account is pending approval.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAuthError(error.message);
    }
    setAuthSubmitting(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleAddAdmin = async () => {
    if (!newAdminEmail) return;
    const { error } = await supabase.from('approved_admins').insert([{ email: newAdminEmail, status: 'active' }]);
    if (error) {
      alert("Error adding admin: " + error.message);
    } else {
      setNewAdminEmail("");
      fetchDashboardData(true);
    }
  };

  const handleTogglePause = async (emailToToggle: string, currentStatus: string) => {
    const newStatus = currentStatus === 'paused' ? 'active' : 'paused';
    const { error } = await supabase.from('approved_admins').update({ status: newStatus }).eq('email', emailToToggle);
    if (!error) {
      fetchDashboardData(true);
    }
  };

  const handleRemoveAdmin = async (emailToRemove: string) => {
    const { error } = await supabase.from('approved_admins').delete().eq('email', emailToRemove);
    if (!error) {
      fetchDashboardData(true);
    }
  };

  const handleDeleteMessage = async (id: number) => {
    const confirmDelete = window.confirm(
      isSuperAdmin 
        ? "Are you sure you want to permanently delete this contact submission from the database?" 
        : "Are you sure you want to remove this contact submission from your panel?"
    );
    if (!confirmDelete) return;

    if (isSuperAdmin) {
      const { error } = await supabase.from('contacts').delete().eq('id', id);
      if (error) {
        alert("Error deleting message: " + error.message);
      } else {
        fetchDashboardData(true);
      }
    } else {
      const updatedHidden = [...hiddenMessageIds, id];
      setHiddenMessageIds(updatedHidden);
      if (session?.user?.email) {
        localStorage.setItem(`hidden_messages_${session.user.email}`, JSON.stringify(updatedHidden));
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;
  }

  if (!session) {
    return (
      <SignInCard
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        isLoading={authSubmitting}
        authError={authError}
        authMessage={authMessage}
        onSubmit={handleAuth}
      />
    );
  }

  if (!isApproved) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 text-center">
        <div className="w-full max-w-md bg-surface/50 p-8 rounded-3xl border border-stroke backdrop-blur-md">
          <h2 className="text-2xl text-text-primary font-bold mb-4">
            {isPaused ? "Account Paused" : "Account Pending"}
          </h2>
          <p className="text-muted mb-6">
            {isPaused 
              ? `Your account (${session.user.email}) has been temporarily paused by the Super Admin.`
              : `Your account (${session.user.email}) is currently pending approval. Please contact the Super Admin to grant you access.`}
          </p>
          <Button onClick={handleSignOut} className="bg-text-primary text-bg hover:bg-accent rounded-xl">Sign Out</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-text-primary p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted">Logged in as {session.user.email} {isSuperAdmin ? "(Super Admin)" : ""}</p>
          </div>
          <div className="flex gap-4">
            <a href="/" className="px-6 py-2 rounded-xl border border-stroke hover:bg-surface transition-colors">Back to Site</a>
            <Button onClick={handleSignOut} className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 rounded-xl">Sign Out</Button>
          </div>
        </div>

        {isSuperAdmin && (
          <div className="mb-12 bg-surface/30 p-8 rounded-3xl border border-stroke">
            <h2 className="text-2xl font-semibold mb-6">Manage Admins</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input 
                placeholder="New admin email to approve..." 
                value={newAdminEmail} 
                onChange={e => setNewAdminEmail(e.target.value)}
                className="bg-bg border-stroke focus:border-accent rounded-xl max-w-sm"
              />
              <Button onClick={handleAddAdmin} className="bg-accent text-bg rounded-xl font-bold">Approve Admin</Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stroke">
                    <th className="py-4 px-4 font-semibold text-muted">Email</th>
                    <th className="py-4 px-4 font-semibold text-muted">Status</th>
                    <th className="py-4 px-4 font-semibold text-muted text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stroke/50 bg-bg/50">
                    <td className="py-4 px-4">patilrishabh50@gmail.com (You)</td>
                    <td className="py-4 px-4">
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Active</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-xs text-muted">Super Admin</span>
                    </td>
                  </tr>
                  {approvedAdmins.map((admin) => (
                    <tr key={admin.email} className="border-b border-stroke/50 hover:bg-surface/50 transition-colors">
                      <td className="py-4 px-4">{admin.email}</td>
                      <td className="py-4 px-4">
                        <span className={`text-xs px-3 py-1 rounded-full ${admin.status === 'paused' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`}>
                          {admin.status === 'paused' ? 'Paused' : 'Active'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right flex justify-end gap-2">
                        <Button 
                          onClick={() => handleTogglePause(admin.email, admin.status)}
                          variant="ghost" 
                          className="text-orange-400 hover:text-orange-300 hover:bg-orange-400/10 rounded-lg text-sm h-8"
                        >
                          {admin.status === 'paused' ? 'Unpause' : 'Pause'}
                        </Button>
                        <Button 
                          onClick={() => handleRemoveAdmin(admin.email)}
                          variant="ghost" 
                          className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg text-sm h-8"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {approvedAdmins.length === 0 && (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-muted">No other approved admins yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="bg-surface/30 p-8 rounded-3xl border border-stroke">
          <h2 className="text-2xl font-semibold mb-6">Contact Submissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stroke">
                  <th className="py-4 px-4 font-semibold text-muted">Date</th>
                  <th className="py-4 px-4 font-semibold text-muted">Name</th>
                  <th className="py-4 px-4 font-semibold text-muted">Email</th>
                  <th className="py-4 px-4 font-semibold text-muted">Subject</th>
                  <th className="py-4 px-4 font-semibold text-muted">Message</th>
                  <th className="py-4 px-4 font-semibold text-muted text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.filter(msg => !hiddenMessageIds.includes(msg.id)).map((msg) => (
                  <tr key={msg.id} className="border-b border-stroke/50 hover:bg-surface/50 transition-colors">
                    <td className="py-4 px-4 whitespace-nowrap text-sm">{new Date(msg.created_at).toLocaleDateString()}</td>
                    <td className="py-4 px-4 font-medium">{msg.first_name} {msg.last_name}</td>
                    <td className="py-4 px-4 text-accent">{msg.email}</td>
                    <td className="py-4 px-4">{msg.subject || "-"}</td>
                    <td className="py-4 px-4 max-w-xs truncate" title={msg.message}>{msg.message}</td>
                    <td className="py-4 px-4 text-right">
                      <Button 
                        onClick={() => handleDeleteMessage(msg.id)}
                        variant="ghost" 
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg text-sm h-8"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {messages.filter(msg => !hiddenMessageIds.includes(msg.id)).length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted">No messages received yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
