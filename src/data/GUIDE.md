# **TO READ THIS GUIDE PROPERLY IN STACKBLITZ FOLLOW THE INSTRUCTIONS BELOW**

- **Look for the Preview icon button in the top-right of this editor panel and click it to view this guide in a readable format.**
- **The button is an icon with two rectangles with a little magnifying glass.**
- **To open the preview using a keyboard shortcut press**
  -  Ctrl+Shift+V (Windows/Linux)
  -  Command+Shift+V (MacOS)
- I would've liked the preview to show up by default but there is no way to do that

---

# Guide for adding a timeline

This guide is the first file opened in the StackBlitz online dev environment so people can add timelines. What you'll mainly be busy with is editing a file that describes your new timeline. You will be barely programming (you can do it!).

### 1. Collect references
It is highly recommended that you have reference(s) for where you found the timeline. Links from YouTube, Reddit or a forum thread are some examples.  Collect them and keep them in handy for the submission step. 

If you don't have any references but remember where you saw the info (eg. private chat, can't find the link), note it down for the submission step.

If there are no references I will accept it and cite it as unknown. Just keep in mind that this site is designed to minimally visualize timelines. Explaining the depths and nuances of a theory is not the goal of the site. That is the job of the references. A lack of references gives a lack of context which results in a weaker contribution.

### 2. Add a timeline

1. In the panel with the website running, select the "NEW TIMELINE" in the timeline dropdown.
2. The sidebar on the left contains the website's folders and files. Open the `new-timeline.ts` file found in `src/data/timelines`. This file describes the "NEW TIMELINE" and is what you will be editing.
3. By default `new-timeline.ts` contains a minimal example to get you started. The main pattern to notice here is how the `source` and `target` properties relate to each other. Every item/object in the list describes two games that link to each other, one being the `source` and one being the `target`.
   - The values (Games and other events) that can be held in the `source` and `target` are defined in `src/data/events.ts`
     - Notice how the values are written in `new-timeline.ts`. A game always has `GameIds.` in front of it and a general event has `Events.` in front of it. These are enumerators and what follows them would be an enum member (eg. `GameIds.` can be followed by `SkywardSword`, `Events.` can be followed by `HyruleIsSealedAndThenFlooded`).
   - I suggest to view the other files found under `src/data/timelines` to understand how the existing timelines in this project are written. Remember to select its corresponding timeline in the website panel to see their results. 
4. 

## Decorate edges between games
By importing `edge-decor.ts` into your timeline file you can assign:
- ### Edge style
  - Assign thick edges between games that have the same incarnation of Link with `EdgeStyle.Thick`
    - eg. Ocarina of Time and Majora's Mask
  - Assign dotted edges when an extremely long time passes with `EdgeStyle.Dotted`
    - eg. The Ancient Calamity happened 10,000 years ago before Breath of the Wild
- ### Edge distance
  - There isn't a clear way to tell exactly how much time passes between every game so we will go with a vague approach
  - If some time passes between games and there is no event placed between them use `EdgeDistance.SomeTimePasses`
  - If an obviously long time passes between games use `EdgeDistance.ALongTimePasses`
    - eg. The Ancient Calamity happened 10,000 years ago before Breath of the Wild
  - If using these don't give you the distance you are expecting, feel free to use a regular number