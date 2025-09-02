import {
  classesWithShowcases,
  type TClass,
  type TClassListing,
  type TShowListing,
} from "../data/classes";

export const getFormattedDate = (dateString: string): string[] => {
  // Format date
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return [formattedDate, formattedTime];
};

/**
 * Flattens all upcoming class entries into a single array
 * sorted chronologically by date.
 */
export const flattenClasses = (classes: TClass[]): TClassListing[] => {
  const now = new Date();

  // Flatten all upcoming classes
  const flattened: TClassListing[] = classes.flatMap((classItem) =>
    classItem.upcoming.map((upcoming) => ({
      classId: classItem.classId,
      title: classItem.title,
      slug: classItem.slug,
      description: classItem.description,
      image: classItem.image,
      price: upcoming.price ?? classItem.price,
      type: classItem.type,
      duration: classItem.duration,
      upcoming,
    })),
  );

  // Filter out past dates
  const futureClasses = flattened.filter(
    (item) => new Date(item.upcoming.date) > now,
  );

  // Sort by date ascending
  futureClasses.sort(
    (a, b) =>
      new Date(a.upcoming.date).getTime() - new Date(b.upcoming.date).getTime(),
  );

  return futureClasses;
};

export const flattenShows = (classes: TClass[]): TShowListing[] => {
  const now = new Date();

  // Flatten all upcoming shows
  const flattened: TShowListing[] = classes
    .filter(({ classId }) => classesWithShowcases.includes(classId))
    .flatMap((classItem) =>
      classItem.show!.upcoming.map((show) => ({
        title: classItem.show!.title,
        image: classItem.show!.image,
        description: classItem.show!.description,
        upcoming: show,
      })),
    );

  // Filter out past dates
  const futureShows = flattened.filter(
    (item) => new Date(item.upcoming.date) > now,
  );

  // Sort by date ascending
  futureShows.sort(
    (a, b) =>
      new Date(a.upcoming.date).getTime() - new Date(b.upcoming.date).getTime(),
  );

  return futureShows;
};
