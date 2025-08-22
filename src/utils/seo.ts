
export interface Metadata {
    /** Page title for <title> and social previews */
    title: string;

    /** Short description for meta tags and link previews */
    description: string;

    /** Canonical URL of the page */
    url?: string;

    /** Open Graph image URL (absolute path recommended) */
    image?: string;

    /** Alt text for the OG image (optional, rarely used) */
    imageAlt?: string;

}

export const defaultMeta: Metadata = {
    title: "Sara Rogers",
    description: "Sara Rogers is an acting coach specializing in helping actors of all levels develop their craft.",
    url: "https://adultactingcoach.com",
    image: "https://adultactingcoach.com/opengraph-image.jpeg",
    imageAlt: "Sara Rogers"
};