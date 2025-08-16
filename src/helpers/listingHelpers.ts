import type { TClass, TUpcomingEntry } from '../data/classes';

export type TClassListing = {
  classId: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  type: string;
  duration: string;
  upcoming: TUpcomingEntry;
};

/**
 * Flattens all upcoming class entries into a single array
 * sorted chronologically by date.
 */
export const flattenClasses = (classes: TClass[]) => {
  const now = new Date();

  // Flatten all upcoming entries
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
    }))
  );

  // Filter out past dates
  const futureClasses = flattened.filter(
    (item) => new Date(item.upcoming.date) > now
  );

  // Sort by date ascending
  futureClasses.sort(
    (a, b) =>
      new Date(a.upcoming.date).getTime() - new Date(b.upcoming.date).getTime()
  );

  return futureClasses;
};
