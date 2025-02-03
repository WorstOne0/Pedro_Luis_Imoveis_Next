"use client";

// Next
import { useEffect } from "react";
//
import { analyticsEvent } from "@/services";

export const useLogEvent = (eventName: string, params?: Record<string, any>) => {
  useEffect(() => {
    analyticsEvent(eventName, params);
  }, []);
};
