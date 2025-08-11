# Guide for adding a timeline

This guide is pinned in the StackBlitz online dev environment so people can add timelines.

### 1. Collect references
It is highly recommended that you have reference(s) for where you found the timeline. Links from YouTube, Reddit or a forum thread are some examples.  Collect them and keep them in handy for the submission step. 

If you don't have any references but remember where you saw the info (eg. private chat, can't find the link), note it down for the submission step.

If there are no references I will accept it and cite it as unknown. Just keep in mind that this site is designed to minimally visualize timelines. Explaining the depths and nuances of a theory is not the goal of the site. That is the job of the references. A lack of references gives a lack of context which results in a weaker contribution.

### 2. Add timeline

1. Think of a name for your timeline

2. Add a new `<your-timeline-name>.ts` file in the `/timelines` folder
3. A timeline is made of a list of 

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