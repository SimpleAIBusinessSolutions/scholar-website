import { supabase } from "./supabase";
import type { ContentData, ContentRow } from "@/types/content";

// This is the site_key used throughout Scholar Dashboard (websites table,
// content table) to identify this website. Matches the pattern used for
// other client sites (e.g. "tfn" for True Fitness Naas).
export const SITE_KEY = "scholar";

/**
 * Fetches every content row for a given page of this site, keyed by
 * section name. Cached per-request (Next.js fetch caching doesn't apply
 * to Supabase JS calls directly, so this is a plain no-store fetch —
 * content edited in the dashboard shows up on next page load/rebuild).
 */
export async function getPageContent(
  page: string
): Promise<Record<string, ContentData>> {
  try {
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .eq("site_key", SITE_KEY)
      .eq("page", page)
      .order("section_order", { ascending: true });

    if (error || !data) {
      return {};
    }

    const bySection: Record<string, ContentData> = {};
    (data as ContentRow[]).forEach((row) => {
      bySection[row.section] = row.published || {};
    });

    return bySection;
  } catch {
    // If Supabase env vars aren't configured yet, or the network call
    // fails, fall back silently to defaults rather than crashing the
    // page — the site should always render something.
    return {};
  }
}

/**
 * Merges a section's CMS content (if any) over a set of fallback
 * defaults, so every field always has a value even before the section
 * has been edited in the dashboard.
 */
export function withDefaults<T extends ContentData>(
  content: Record<string, ContentData>,
  section: string,
  defaults: T
): T {
  const published = content[section];
  if (!published) return defaults;
  return { ...defaults, ...published } as T;
}
