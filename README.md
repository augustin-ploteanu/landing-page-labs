# SSG & CMS Integration

## Demo

The site can be accessed [here](https://augustin-ploteanu.github.io/landing-page-labs).

---

## Features Added

* **Eleventy (11ty) static site generator** — HTML is now built from templates rather than served as raw files
* **Decap CMS** — web-based admin UI at `/admin/` for editing content without touching code
* **Local CMS proxy** — content can be edited locally without GitHub authentication using `npx decap-server`

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

The site will be available at `http://localhost:8080`.

### Build for production

```bash
npm run build
```

Output is generated in `_site/` (not committed to git).

---

## Content Management (Decap CMS)

All site content (headings, cards, coach stats) is stored in `src/_data/site.yaml` and surfaced through Decap CMS at the `/admin/` route.

### Local editing

Run both commands in separate terminals:

```bash
npx decap-server  
npm start          
```

Then open `http://localhost:8080/admin/` to edit content without any authentication.