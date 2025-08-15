// Animation durations
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Color schemes
export const COLORS = {
  PRIMARY: "#ff6b35",
  SECONDARY: "#10b981",
  ACCENT: "#8b5cf6",
  SUCCESS: "#10b981",
  WARNING: "#f59e0b",
  ERROR: "#ef4444",
} as const;

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// Common spacing values
export const SPACING = {
  XS: "0.25rem",
  SM: "0.5rem",
  MD: "1rem",
  LG: "1.5rem",
  XL: "2rem",
  "2XL": "3rem",
} as const;

// API endpoints
export const API_ENDPOINTS = {
  ANALYSIS: "/api/analysis",
  VIDEOS: "/api/videos",
  UPLOAD: "/api/upload",
  AUTH: "/api/auth",
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: "watchwise-theme",
  USER_PREFERENCES: "watchwise-user-preferences",
  AUTH_TOKEN: "watchwise-auth-token",
} as const;
