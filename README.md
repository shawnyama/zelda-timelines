# Zelda Timelines

An interactive collection of official and fan-made Zelda Timelines. This will provide an easy way to visualize, absorb and compare the timelines all in one place. Perhaps new conclusions can be found?

## Timelines that will be added
- [The official one](https://www.zelda.com/about/)
    - Since fans are more familiar with this one I want to put a spin on this. I want every state of the official timeline to be in here. Imagine if there was a year meter that you can adjust and the timeline would show all the games in the timeline that were released by that year. It would be interesting to see how it evolved and ended up the way it is now.
- [Triforce's](https://youtu.be/HPnvAt9bvAs)
- [LoruleanHistorian/Instrutilus/Zelda Lore's](https://www.youtube.com/watch?v=7GAqIqYzqGQ)

If I come across other timeline theories I'll be interested in adding them too.

## Tech Stack
- Node.js 16
- [Astro](https://astro.build/) + [Preact](https://preactjs.com/)
- Potentially this [Zelda API](https://github.com/deliton/zelda-api) (lacks some games)

A split timeline visualization is a challenge. Right now I am attempting it with SVGs since it provides a lot of freedom. I tried other methods like tree diagrams and sankey using D3.js but they are limited in terms of functionality and styling. I am still very open to other approaches.

## 🧞 Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
