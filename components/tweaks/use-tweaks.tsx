"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  TWEAK_DEFAULTS,
  TWEAK_STORAGE_KEY,
  type TweakState,
} from "./types";

type SetTweak = <K extends keyof TweakState>(key: K, value: TweakState[K]) => void;

interface TweaksContextValue extends TweakState {
  setTweak: SetTweak;
  reset: () => void;
}

const TweaksContext = createContext<TweaksContextValue | null>(null);

function loadFromStorage(): TweakState {
  if (typeof window === "undefined") return TWEAK_DEFAULTS;
  try {
    const raw = window.localStorage.getItem(TWEAK_STORAGE_KEY);
    if (!raw) return TWEAK_DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<TweakState>;
    return { ...TWEAK_DEFAULTS, ...parsed };
  } catch {
    return TWEAK_DEFAULTS;
  }
}

export function TweaksProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TweakState>(TWEAK_DEFAULTS);

  useEffect(() => {
    setState(loadFromStorage());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.display = state.displayFont;
    root.dataset.title = state.titleStyle;
    try {
      window.localStorage.setItem(TWEAK_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota / privacy mode errors
    }
  }, [state]);

  const setTweak: SetTweak = useCallback((key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => setState(TWEAK_DEFAULTS), []);

  const value = useMemo<TweaksContextValue>(
    () => ({ ...state, setTweak, reset }),
    [state, setTweak, reset],
  );

  return <TweaksContext.Provider value={value}>{children}</TweaksContext.Provider>;
}

export function useTweaks(): TweaksContextValue {
  const ctx = useContext(TweaksContext);
  if (!ctx) {
    throw new Error("useTweaks must be used within <TweaksProvider>");
  }
  return ctx;
}
