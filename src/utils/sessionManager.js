// Session management utility for client-side storage
export class SessionManager {
  static SESSION_KEY = 'user_session';
  static EXPIRY_DAYS = 2;

  // Create a new session
  static createSession(userData) {
    const sessionData = {
      user: userData,
      createdAt: new Date().getTime(),
      expiresAt: new Date().getTime() + (this.EXPIRY_DAYS * 24 * 60 * 60 * 1000) // 2 days in milliseconds
    };

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    return sessionData;
  }

  // Get current session
  static getSession() {
    try {
      const sessionStr = localStorage.getItem(this.SESSION_KEY);
      if (!sessionStr) return null;

      const session = JSON.parse(sessionStr);
      
      // Check if session has expired
      if (new Date().getTime() > session.expiresAt) {
        this.clearSession();
        return null;
      }

      return session;
    } catch (error) {
      console.error('Error getting session:', error);
      this.clearSession();
      return null;
    }
  }

  // Check if user is logged in
  static isLoggedIn() {
    return this.getSession() !== null;
  }

  // Get user data from session
  static getUserData() {
    const session = this.getSession();
    return session ? session.user : null;
  }

  // Clear session (logout)
  static clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
  }

  // Get time remaining until expiry
  static getTimeUntilExpiry() {
    const session = this.getSession();
    if (!session) return 0;

    const timeRemaining = session.expiresAt - new Date().getTime();
    return timeRemaining > 0 ? timeRemaining : 0;
  }

  // Extend session expiry (optional - if you want to extend on activity)
  static extendSession() {
    const session = this.getSession();
    if (session) {
      session.expiresAt = new Date().getTime() + (this.EXPIRY_DAYS * 24 * 60 * 60 * 1000);
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }
  }
}
