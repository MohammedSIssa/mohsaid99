export function formatTimeAgo(dateString: string) {
  const utcString = dateString.endsWith("Z") ? dateString : dateString + "Z";
  const date = new Date(utcString);
  const now = new Date();
  const diffInSeconds: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  );

  if (diffInSeconds < 60) return `قبل ${diffInSeconds} ثانية`;

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes === 1) {
    return "قبل دقيقة";
  }
  if (minutes === 2) {
    return "قبل دقيقتين";
  }
  if (minutes >= 3 && minutes > 11) {
    return `قبل ${minutes} دقائق`;
  }
  if (minutes < 60) return `قبل ${minutes} دقيقة`;

  const hours = Math.floor(minutes / 60);
  if (hours === 1) {
    return "قبل ساعة";
  }
  if (hours === 2) {
    return "قبل ساعتين";
  }
  if (hours >= 3 && hours < 11) {
    return `قبل ${hours} ساعات`;
  }
  if (hours < 24) {
    return `قبل ${hours} ساعة`;
  }

  return date.toLocaleString("ar-SA", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
