const UNITS = ["bytes", "KB", "MB", "GB", "TB"] as const;
const BYTES_PER_UNIT = 1024;

export function getFileSizeWithUnits(fileSize = 0): string {
  if (fileSize < 0) return "0 bytes";

  let size = fileSize;
  let unitIndex = 0;

  while (size >= BYTES_PER_UNIT && unitIndex < UNITS.length - 1) {
    size /= BYTES_PER_UNIT;
    unitIndex++;
  }

  // Format to 2 decimal places if not bytes
  const formattedSize = unitIndex === 0 ? size.toString() : size.toFixed(2);

  return `${formattedSize} ${UNITS[unitIndex]}`;
}

/**
 * Format a date string with enhanced options
 * @param dateString ISO date string to format
 * @param options Format options (default: date and time with medium style)
 * @returns Formatted date string or fallback text for invalid dates
 */
export function formatDate(
  dateString: string,
  options?: {
    useRelative?: boolean;
    dateStyle?: "full" | "long" | "medium" | "short";
    timeStyle?: "full" | "long" | "medium" | "short";
  }
): string {
  // Default options
  const {
    useRelative = false,
    dateStyle = "medium",
    timeStyle = "short",
  } = options || {};

  // Validate the date
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // Use relative time if requested and within reasonable range
  if (useRelative) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) return "Just now";
    if (diffMinutes < 60)
      return `${diffMinutes} ${diffMinutes === 1 ? "minute" : "minutes"} ago`;
    if (diffHours < 24)
      return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
    if (diffDays < 30)
      return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
  }

  // Use Intl.DateTimeFormat for proper localization
  try {
    const formatter = new Intl.DateTimeFormat(navigator.language, {
      dateStyle,
      timeStyle,
    });
    return formatter.format(date);
  } catch {
    // Fallback to basic formatting if Intl API fails
    return date.toLocaleString();
  }
}
