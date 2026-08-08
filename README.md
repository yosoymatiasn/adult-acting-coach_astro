# Sara Rogers Acting

The public website for Sara Rogers Acting: adult acting classes, workshops,
showcases, private coaching, and public speaking support in South Florida.

Built with Astro, Tailwind CSS, and the Netlify adapter.

## Local development

```sh
npm install
npm run dev
```

Use `npm run preview` to inspect the most recently built site locally.

## Before deployment

```sh
npm run build
```

`npm run build` is the project health gate. It runs formatting, content
validation, Astro type checks, and then creates the production build. The same
steps are available individually:

```sh
npm run format:check
npm run validate:content
npm run check
```

## Updating classes and showcases

The schedule is intentionally maintained in local, editable data files:

- Class definitions: `src/data/classes/classes.ts`
- Class sessions, Meetup URLs, and price tiers: `src/data/classes/sessions.ts`
- Showcase definitions: `src/data/showcases/showcases.ts`
- Showcase dates and RSVP URLs: `src/data/showcases/sessions.ts`

Each scheduled class session can include standard, early-reservation, and
at-door pricing. `npm run validate:content` catches unknown slugs, duplicate
event URLs, invalid dates, and inconsistent pricing before publishing.

Past sessions automatically drop from public listings when their start time has
passed. Keep the next dates, URLs, and prices accurate as events are scheduled
or changed.

## Forms and deployment

Netlify handles deployment and forms. The contact and registration forms are
defined in `src/components/ContactForm.astro` and
`src/components/RegistrationForm.astro`.

Submitting a registration sends the student’s details to Netlify Forms and then
gives payment instructions. A registration is not a confirmed spot until Sara
has received payment.
