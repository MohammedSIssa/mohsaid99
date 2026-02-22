export function formatTimeAgo(dateString: string) {
  const utcString = dateString.endsWith("Z") ? dateString : dateString + "Z";
  const date = new Date(utcString);
  const now = new Date();
  const diffInSeconds: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  );

  if (diffInSeconds < 60) return `قبل ${diffInSeconds} ثانية`;

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) return `قبل ${minutes} دقيقة`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `قبل ${hours} ساعة`;

  return date.toLocaleString("ar-SA", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
