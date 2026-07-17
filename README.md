# Syed Maaz Bukhari — Portfolio

A modern developer portfolio presenting my professional experience, selected full-stack work, technical stack, and project case studies.

The site uses an editorial dark interface, responsive layouts, motion-driven interactions, project slug routes, hero galleries, fullscreen project previews, and a contact form powered by EmailJS.

## Live content

- Professional experience from Khan Technologies and Qutham Technologies
- Selected project case studies at `/projects/:slug`
- Angular E-Commerce Platform as the primary featured project
- Technology stack and development focus
- EmailJS contact form
- Downloadable resume action

## Featured project

### Angular E-Commerce Platform

A three-application commerce system consisting of:

- Angular 21 server-rendered customer storefront
- Protected Angular administration dashboard
- Node.js, Express, MongoDB, and Cloudinary REST API

The platform includes catalog browsing, product details, guest cart and checkout, public order tracking, product and category management, inventory controls, order processing, user administration, image uploads, JWT authentication, rotating refresh tokens, and role-protected API operations.

- Repository: https://github.com/Maaz-Bukhari/angular-ecommerce-platform
- Live storefront: https://xtore-eight.vercel.app/

## Technology

- React 18
- React Router
- Framer Motion
- Three.js and React Three Fiber
- Tailwind CSS
- EmailJS
- Vite

## Local development

Requirements:

- Node.js 18 or later
- npm

Install and start:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## EmailJS configuration

Copy `.env.example` to `.env`:

```bash
Copy-Item .env.example .env
```

Complete these values using the EmailJS dashboard:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
VITE_APP_EMAILJS_RECEIVER_EMAIL=your-email@example.com
```

The EmailJS template should accept:

- `from_name`
- `from_email`
- `to_name`
- `to_email`
- `message`

The form validates that all configuration values exist before attempting to send. `.env` is excluded from Git and must also be configured in the deployment provider.

## Project data

Portfolio experience, project descriptions, links, case-study narratives, and technology metadata are maintained in:

```text
src/constants/index.js
```

Project detail routes are rendered by:

```text
src/pages/ProjectPage.jsx
```

## Resume

The contact section downloads the published resume from:

```text
public/Syed-Maaz-Bukhari-Resume.pdf
```

## Deployment

Vercel or Netlify is recommended because the portfolio uses client-side routes such as:

```text
/projects/angular-ecommerce-platform
```

When deploying, add all EmailJS values as environment variables and configure SPA fallback routing to `index.html`.

## Author

**Syed Maaz Bukhari**  
Full-Stack Software Engineer

- GitHub: https://github.com/Maaz-Bukhari
- LinkedIn: https://www.linkedin.com/in/syed-maaz-0a5b08231/

I build enterprise applications, SaaS products, commerce platforms, operational dashboards, and API-driven products using Angular, React, Next.js, Node.js, and TypeScript.
