# **TO READ THIS GUIDE PROPERLY IN STACKBLITZ FOLLOW THE INSTRUCTIONS BELOW**

- **Look for the Preview icon button in the top-right of this editor panel and click it to view this guide in a readable format.**
- **The button is an icon with two rectangles with a little magnifying glass.**
- **To open the preview using a keyboard shortcut press**
  -  Ctrl+Shift+V (Windows/Linux)
  -  Command+Shift+V (MacOS)
- I would've liked the preview to show up by default but there is no way to do that
---

# Guide for adding a timeline

This guide is the first file opened in the StackBlitz online dev environment so people can add timelines. What you'll mainly be busy with is editing a typescript file that describes your new timeline. You will be barely programming (you can do it!).

## 1. Collect reference(s)
It is highly recommended that you have reference(s) for where you found the timeline. Links from YouTube, Reddit or a forum thread are some examples.  Collect them and keep them in handy for the submission step. 

If you don't have any references but remember where you saw the info (eg. private chat, can't find the link), note it down for the submission step (Step 3).

If there are no references I will accept it and cite it as unknown. Just keep in mind that this site is designed to minimally visualize timelines. Explaining the depths and nuances of a theory is not the goal of the site. That is the job of the references. A lack of references gives a lack of context which results in a weaker contribution.

## 2. Add timeline
### 2a. How to write a new timeline
1. In the panel with the website running, select "NEW TIMELINE" in the timeline dropdown.
2. The sidebar on the left contains the website's folders and files. Open the `new.ts` file found in `src/data/timelines`. This file describes the "NEW TIMELINE" and is what you will be editing.
3. By default `new.ts` contains a minimal example to get you started. The main pattern to notice here is how the `source` and `target` properties relate to each other. Every item/object in the list describes games or events that link to each other, one being the `source` and one being the `target`.
   - The values (games and events) that can be held in the `source` and `target` are defined in `src/data/events.ts`
     - Notice how the values are written in `new.ts`. A game always has `GameIds.` in front of it and a non-game event has `Events.` in front of it. These are enumerators and what follows them would be an enum member (eg. `GameIds.` can be followed by `SkywardSword`, `Events.` can be followed by `HyruleIsSealedAndThenFlooded`).
   - Tips:
     - For this step just focus on adding `source` and `target` properties in every object. These properties are mandatory for every object and the timeline diagram won't appear of one of them is missing. The other properties are like the icing on the cake so we will tackle them in later steps.
     - Remember to save your changes with Ctrl+S (Windows/Linux) or Command+S (MacOS) to them reflected in the website panel
     - If you don't see your changes being reflected or clicking a game doesn't work as expected refresh the website panel
     - View the other files found under `src/data/timelines` to understand how the existing timelines in this project are written. Remember to select its corresponding timeline in the website panel to see their results.
4. Add the `extraDistance` property to edges that you intuitively feel need some: 
     - If some time passes between games and there is no event placed between them use `EdgeDistance.SomeTimePasses`
       - eg. I put some `extraDistance` between Twilight Princess and Four Swords Adventures because it felt right
     - If a vast time gap passes between games use `EdgeDistance.ALongTimePasses`
       - eg. The Ancient Calamity happened 10,000 years ago before Breath of the Wild
     - Tips: 
       - If using the `EdgeDistance` enumerator is not giving you the distance you are expecting (too small/too large), feel free to use a regular number instead (play around with it until it looks proper)
       - Distance is not meant to be applied to a perfect scale. For example if you compare the events happening in parallel in the Triforce timeline we can't say that they are occuring at the same time. That's fine, focus on making the distance look good where possible.
5. Add the `style` property to edges that require different styling:
   - Assign thick edges between games that have the same incarnation of Link with `EdgeStyle.Thick`
     - eg. Ocarina of Time and Majora's Mask
   - Assign dotted edges when a vast time gap passes with `EdgeStyle.Dotted` (typically done when `EdgeDistance.ALongTimePasses` is the `extraDistance`)
      - eg. The Ancient Calamity happened 10,000 years ago before Breath of the Wild


Overview of properties you can add:
```typescript
type Edge = {
  source: GameIds | Events | Eras // Previous event
  target: GameIds | Events | Eras // Next event
  // Optional properties
  extraDistance?: number // Additional distance for the edge
  style?: EdgeStyle // Style of the edge
  // Subgraphs are optional as well and might be complex to use
  subgraphToStart?: string // Subgraph to start
  subgraphsToEnd?: string[] // List of subgraphs to end
}
```

### 2b. Some pointers
#### Organization
- The order of your branches will appear in the order you write them. Write one branch at a time. Once you start a new branch write a comment above it so its easy to find/organize.
  - Check out how the other timelines are organized under `src/data/timelines`, there is a comment before a new branch starts
- If your timeline includes the usual adult, child or downfall branches please write those branches in this order for consistency: adult, child, downfall
#### Adding your own events
- If you have some sort of event(s) that you want to add to the `Events` or `Eras` enumerators feel free to add them
- Do not add to the `GameIds` enumerator
#### How your edits are saved
- Your work in StackBlitz is saved in browser (local storage). If you clear your browser data your work will be erased.
- If I decide to update this guide or anything in this "create mode" version of the website (what you are editing now), there is a chance that your progress will be erased.
  - Therefore I will update this version as little as possible. If I decide to update this, it will occur on the 1st day of any month. This way you know that your progress is in danger on the 1st day of every month.
- **If you really don't want to risk losing your progress** download the files you've edited (follow Step 3.1) so in case your progress is gone here you can copy it back in
#### Some programming lingo you may want to lookup
  - string
  - list/array
  - object
  - enumerator
  - comment


### 2c. Subgraphs (advanced)
This step may be optional or not needed for your timeline.

#### What are subgraphs?
Subgraphs create containers around certain groups of edges [like this](https://mermaid.js.org/syntax/flowchart.html#subgraphs). The difference in this project is the subgraph label and box border is invisible. Here we use subgraphs in the case we want to take advantage of the way their edges connect.

Use case:
- Look at the Official timeline and `official.ts`. All items before The Ancient Calamity are in a subgraph called `EraOfMyth`. After that is the `EraOfTheWilds` subgraph. We know that the `EraOfTheWilds` games come after the `EraOfMyth` games but we don't know which timeline branch they continue from. We utilize the subgraph edges to represent this ambiguious continuation.

There might be some other reason you'd want to use subgraphs and you are free to do so. Just make sure that you genuinely need to use them.

To see subgraph boxes and labels for debugging purposes remove/comment out line 150 from `src/components/TimelineDiagram.vue` which says `primaryColor: 'transparent'`.

#### How to create a subgraph
- Add a `subgraphToStart` property to the first edge you want your subgraph to include. It accepts a `string` value but using any enum member from `events.ts` is preferable.
  -  ```typescript
     subgraphToStart: Eras.EraOfMyth // Using enum member
     ```
  -  ```typescript
     subgraphToStart: 'Subgraph 1'   // Using a string
     ```
- Add a `subgraphsToEnd` property to the last edge you want your subgraph to include. Instead of one `string` value it accepts a list of strings to support the odd case where you are closing multiple nested subgraphs. Typically you'd just need to close one:
  - ```typescript
    subgraphsToEnd: [Eras.EraOfMyth]
    ```
- Remember to link your subgraphs using an edge. The values used in `subgraphToStart` and `subgraphsToEnd` would be used as the values in `source` and `target`.
- `official.ts` is a great example that showcases subgraphs

## 3. Submit
1. Download your `new.ts` by right-clicking it in the left sidebar and then select Download
   - If you edited `events.ts` download that too
2. Submit the file(s) and follow the instructions in this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdQuYEvYTrAu4iP0BfVdkNXONGvqsOlPKvQ1oBwLmdbg98kiA/viewform?usp=header)