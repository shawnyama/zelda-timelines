# Guide for adding a timeline (WIP)

1. Add a new `<your-timeline-name>.ts` file in the `/timelines` folder
2. A timeline is made of a list of 

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