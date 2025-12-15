import { GameIds } from './events'
import { Platforms } from './platforms'

export interface Node {
  id: string
  title: string
}
export interface GameNode extends Node {
  releases: { platform: Platforms; year: number }[]
  description: string
  isIconSlanted?: boolean
  isSpinOff?: boolean
  useFallbackIcon?: boolean
  no3dBoxArt?: boolean
}

export const gameNodes: GameNode[] = [
  {
    title: 'Skyward Sword',
    id: GameIds.SkywardSword,
    releases: [
      { platform: Platforms.Wii, year: 2011 },
      { platform: Platforms.Switch, year: 2021 }
    ],
    isIconSlanted: true,
    description: `Link plans to enter the annual Wing Ceremony, in Skyloft, a floating island in the sky. Link's Loftwing has been hidden from him by bullies at the start of the game, but upon recovering it, Link wins the Wing Ceremony, and gets to spend some personal time with Zelda. The two bond, flying their Loftwings through the skies, but a tornado comes out of nowhere, and sweeps Zelda to a land below the realms of the sky. Link must set out to the land below to recover Zelda, and defeat any evil he many encounter.`
  },
  {
    title: 'Ocarina of Time',
    id: GameIds.OcarinaOfTime,
    releases: [
      { platform: Platforms.N64, year: 1998 },
      { platform: Platforms.N3DS, year: 2011 }
    ],
    isIconSlanted: true,
    description: `Link, a boy living in Kokiri Forest who doesn't have a fairy companion dreams about a girl being chased away by an evil-looking man. The Great Deku Tree sends the fairy Navi to test the boy, and after Link gets a sword and shield he must try and save the Deku Tree from death. Although he cannot, the Deku Tree gives Link the Kokiri Emerald and tells him to go to Princess Zelda. At Hyrule Castle, Link sneaks in and meets with the princess, who tells him about the evil intentions of Ganondorf and tasks him with finding the other Spiritual Stones. After finding the stones, Zelda is chased out of Hyrule Castle by Ganondorf, Zelda tossing the Ocarina of Time over to Link. Using the stones and the ocarina, Link can open the door in the Temple of Time to find the Master Sword. After pulling it, Link is taken seven years into the future, after Ganondorf has entered the Sacred Realm, obtained the power of the Triforce of Power, and conquered Hyrule. Now, Link must awaken the six sages and obtain their power to defeat Ganondorf once and for all.`
  },
  {
    title: "Majora's Mask",
    id: GameIds.MajorasMask,
    releases: [
      { platform: Platforms.N64, year: 2000 },
      { platform: Platforms.N3DS, year: 2015 }
    ],
    description: `Wandering in the Lost Woods, Link is searching for his friend Navi. Eventually he is ambushed by the Skull Kid, who steals his horse, Epona, and his Ocarina of Time. Link follows the Skull Kid deep into the woods, where he falls into a hole and finds himself in the parallel world of Termina. There, he meets the Happy Mask Salesman, who tells him that the Skull Kid has stolen Majora's Mask, an ancient artifact that is causing the moon to fall and destroy the world in three days. Link must now retrieve the mask and stop the moon from falling by traveling back in time and awakening the four giants who can stop it.`
  },
  {
    title: 'Twilight Princess',
    id: GameIds.TwilightPrincess,
    releases: [
      { platform: Platforms.GameCube, year: 2006 },
      { platform: Platforms.Wii, year: 2006 },
      { platform: Platforms.WiiU, year: 2016 }
    ],
    description: `As Link, a fully grown adult, is about to deliver a sword and shield as a gift to the Royal Family, he must save one of his village neighbors from a group of Bokoblins. The day after, Link is attacked by a group of Bulbins and knocked out. When he awakens, he finds himself in the forest. Following the path leads to a black wall, which a hand appears from that grabs Link and drags him into an entirely different world, where his body suddenly transforms into a wolf. He is then captured and imprisoned in Hyrule Castle, where he meets an imp-like creature named Midna. Once they escape their cell, they travel through the castle and find Princess Zelda, who explains that the kingdom of Hyrule has been taken over by the evil Zant, the king of the Twilight Realm, who has covered the entire land in twilight. Link and Midna must now restore light to Hyrule and find the Fused Shadows in order to defeat Zant.`
  },
  {
    title: 'A Link to the Past',
    id: GameIds.ALinkToThePast,
    releases: [
      { platform: Platforms.SNES, year: 1991 },
      { platform: Platforms.Satellaview, year: 1997 },
      { platform: Platforms.GBA, year: 2002 }
    ],
    description: `The Triforce, a treasure hidden in the Sacred Realm, grants the wishes of those who touch it. When an entrance to the Sacred Realm was discovered, many sought the Triforce. However, none who entered ever returned. As evil power began to emanate from the entrance, the king of Hyrule commanded the Seven Sages to seal it off. One stormy night, as the tale of The Imprisoning War became distant legend, a voice called out: "Please help me. My name is Zelda..." Link awakens to the sound of Princess Zelda's plea for help from the dungeons of Hyrule Castle.`
  },
  {
    title: 'The Wind Waker',
    id: GameIds.TheWindWaker,
    releases: [
      { platform: Platforms.GameCube, year: 2002 },
      { platform: Platforms.WiiU, year: 2013 }
    ],
    isIconSlanted: true,
    description: `According to legend, the Hero of Time defeated evil and sealed it away. However, the evil later freed itself and made another attempt at the Triforce, and while the people hoped the Hero of Time would come to stop the evil again, he never did. The people then prayed to the goddesses to help them, and were instructed by them to flee to the mountaintops while they flooded the kingdom, sealing it at the bottom of the newly-created sea. Centuries later, on Outset Island, a young boy named Link is given the clothes of the Hero of Time on his birthday, as per tradition for boys coming of age. However, a giant bird appears, dropping a girl onto the island's forest. Link rescues her and she reveals herself to be a pirate named Tetra, but afterward his sister Aryll is taken by the bird. Link travels to the Forsaken Fortress with the pirates and sneaks to where his sister is being held, but he is subsequently thrown out afterward. He wakes up to find himself on a talking boat, the King of Red Lions, who tells Link that he must help in a quest to save not only Link's sister but also the Great Sea from the ancient evil which has returned.`
  },
  {
    title: 'Phantom Hourglass',
    id: GameIds.PhantomHourglass,
    releases: [{ platform: Platforms.DS, year: 2007 }],
    description: `After the events of Wind Waker, Link sets sail with the pirates led by Tetra to find a new land. They reach a sea near Hyrule, where the Ocean King reigns. Encountering a Ghost Ship in a thick fog, Tetra boards it and vanishes. Link attempts to follow but falls into the sea, washing ashore on Mercay Island. Awakened by the fairy Ciela, Link teams up with Captain Linebeck to find the Ghost Ship and rescue Tetra.`
  },
  {
    title: 'Spirit Tracks',
    id: GameIds.SpiritTracks,
    releases: [{ platform: Platforms.DS, year: 2009 }],
    description: `Link, an apprentice engineer, visits Hyrule Castle for his certification ceremony. Afterward, Princess Zelda asks him to take her to the Tower of Spirits to investigate the vanishing train tracks. During their journey, Chancellor Cole, a disguised demon, attacks, stealing Zelda's body and leaving her as a spirit. The tracks serve as barriers to seal the Demon King, and Zelda's body is intended for his resurrection. Zelda and Link receive the Spirit Train from the sage Anjean and use Zelda's Spirit Flute to restore the barriers with the sages' help.`
  },
  {
    title: 'The Minish Cap',
    id: GameIds.TheMinishCap,
    releases: [{ platform: Platforms.GBA, year: 2004 }],
    description: `A long time ago, as the world teetered on the brink of darkness, a tiny Picori descended from the skies and granted a brave hero the Light Force and a blade. With this newfound power, the hero was able to imprison the malevolent forces. In gratitude, the people celebrated the Picori with an annual festival known as the Picori Festival. One year, during the festival, young Link is invited by his childhood friend, Princess Zelda, to attend the award ceremony for the sword-fighting tournament, a highlight of the celebration. The ceremony takes place before the Picori Blade, a legendary sword said to keep evil sealed within a chest. However, the victor of the tournament, Vaati, shatters the Picori Blade, releasing the trapped evil. He then curses Princess Zelda, turning her to stone, and flees. To break the curse on Princess Zelda, the shattered sword must be repaired by the Picori. With the help of a mysterious cap named Ezlo, Link embarks on a journey to the Minish Village in search of a way to restore the sword and save Zelda.`
  },
  {
    title: 'Four Swords',
    id: GameIds.FourSwords,
    releases: [
      { platform: Platforms.GBA, year: 2002 },
      { platform: Platforms.DS, year: 2011 }
    ],
    description: `Many years ago, the wind mage Vaati would use his powers to terrorize the land of Hyrule, until a young boy wielding a sword that could split his body into four copies of himself challenged him and defeated him, trapping Vaati inside the blade. The sword became known in legend as the "Four Sword", and a shrine was built to protect its power. In the present, Princess Zelda senses something at the Four Sword Shrine and has Link accompany her as she investigates. At the shrine, it is revealed that Vaati has broken his seal and freed himself, capturing Princess Zelda. Link draws the Four Sword, its power splitting him into four individual Links who must now work together to save the princess and defeat Vaati once again.`
  },
  {
    title: 'Four Swords Adventures',
    id: GameIds.FourSwordsAdventures,
    releases: [{ platform: Platforms.GameCube, year: 2004 }],
    description: `Hyrule is suddenly shrouded in dark clouds. Suspecting the handiwork of Vaati, Princess Zelda, along with six maidens and Link, head to the Sanctuary where the Four Sword is sealed to investigate. As they approach the Sanctuary's door, a shadowy figure resembling Link appears, seizes Princess Zelda and the maidens, and vanishes. To rescue Princess Zelda and the others, Link chooses to draw the Four Sword. Yet, this action will also unleash the imprisoned Vaati...`
  },
  {
    title: 'A Link Between Worlds',
    id: GameIds.ALinkBetweenWorlds,
    releases: [{ platform: Platforms.N3DS, year: 2013 }],
    description: `A sorcerer named Yuga appears in Hyrule, turning people into paintings in order to meet his goal of reviving Ganon and obtaining the Triforce. Link must save them and defeat Yuga in order to save both Hyrule and another world, Lorule.`
  },
  {
    title: 'Triforce Heroes',
    id: GameIds.TriforceHeroes,
    releases: [{ platform: Platforms.N3DS, year: 2015 }],
    description: `In the fashion-centered land of Hytopia, Lady Maud, a witch from the Drablands, is jealous of Princess Styla's cute fashion sense and sends her a gift, which turns out to be a trap that curses her to permanently wear an ugly jumpsuit. As a result, the citizens of the land have become afraid to show off their own sense of fashion, fearing the witch will curse them as well. However, according to the legend of the Tri Force Heroes, three heroes will show up to save Hytopia when it is in peril, and the king, believing in this legend, sends out a call to distant lands for heroes to enter the Drablands. Link, coming across one of the king's notices, heads to the castle to fight alongside other heroes to take down the witch and bring Hytopia back to peace.`
  },
  {
    title: 'Oracle of Seasons',
    id: GameIds.OracleOfSeasons,
    releases: [{ platform: Platforms.GBC, year: 2001 }],
    isIconSlanted: true,
    description: `The Triforce sends Link to the land of Holodrum. After waking up, he comes across a traveling troupe and dances with their lead act, Din. However, they suddenly hear a voice, calling himself Onox, and a funnel cloud appears that kidnaps Din, revealed to be the Oracle of Seasons. Din's capturing results in the Temple of Seasons sinking into the ground, and the seasons of Holodrum going into disarray. Link learns from the Maku Tree of Holodrum that he must find the Essences of Nature to enter Onox's fortress and save Din and Holodrum.`
  },
  {
    title: 'Oracle of Ages',
    id: GameIds.OracleOfAges,
    releases: [{ platform: Platforms.GBC, year: 2001 }],
    description: `Link is transported by the Triforce to the land of Labrynna. After waking up in a forest, Link saves Impa from a crowd of monsters and is asked to help her find a woman in the forest. They eventually find the woman, Nayru, singing to a group of forest animals. However, it turns out that a sorceress named Veran had hidden herself inside Impa and emerges to possess Nayru, revealing that she was the titular Oracle of Ages and using her newfound powers to disrupt the flow of time in Labrynna. Link later learns from the Maku Tree, the guardian of Labrynna, that he must find the Essences of Time in order to reach Veran's castle and save Labrynna.`
  },
  {
    title: "Link's Awakening",
    id: GameIds.LinksAwakening,
    releases: [
      { platform: Platforms.GB, year: 1993 },
      { platform: Platforms.GBC, year: 1998 },
      { platform: Platforms.Switch, year: 2019 }
    ],
    description: `After defeating Ganon and saving Hyrule, Link sets out on a quest to make himself stronger by training across the world. After completing his training, Link is sailing back to Hyrule when a powerful storm breaks out, destroying his boat and knocking him out at sea. Link washes ashore on an island, where he is found and nursed back to health by two of the locals, Marin and Tarin. When he wakes up, they explain that he is on Koholint Island. As Link sets out to retrieve his equipment, he meets an owl, who tells him that the giant egg on the top of the island's mountain contains the sleeping Wind Fish, and that only he can awaken it, as the Wind Fish is the only way Link will be able to leave the island. Thus, Link sets out on a quest to find the Instruments of the Sirens and wake up the Wind Fish.`
  },
  {
    title: 'The Legend of Zelda',
    id: GameIds.TheLegendOfZelda,
    releases: [
      { platform: Platforms.NES, year: 1986 },
      { platform: Platforms.Satellaview, year: 1995 },
      { platform: Platforms.GBA, year: 2004 }
    ],
    description: `Many years ago, the Prince of Darkness Ganon and his minions invaded the land of Hyrule and stole the Triforce of Power. Fearing Ganon's rule, Princess Zelda breaks the Triforce of Wisdom into eight pieces to keep him from obtaining it before being captured. She then sent out her nursemaid Impa to find one with the courage to defeat Ganon, though Ganon sends out his minions to stop her. As she is surrounded, however, a boy named Link appears and drives off the monsters. After Impa tells him the story, Link sets out on a quest to obtain the pieces of the Triforce of Wisdom, defeat Ganon and save Zelda.`
  },
  {
    title: 'Zelda II: The Adventure of Link',
    id: GameIds.TheAdventureOfLink,
    releases: [
      { platform: Platforms.NES, year: 1987 },
      { platform: Platforms.GBA, year: 2004 }
    ],
    isIconSlanted: true,
    description: `Years after the defeat of Ganon in the original game, Link finds that a marking has appeared on the back of his hand. Showing it to Impa, she opens a door long-sealed and finds inside it the sleeping Princess Zelda from generations ago. She reveals to Link that long ago, after the death of the king of Hyrule, the prince became king and inherited everything except the Triforce, which he only inherited in part. He tried to look for the other pieces, but learned from a wizard close to the king that he had only told Princess Zelda about it. The prince then tried to get the information from her, but she refused to tell. The wizard then threatened her to tell, but when she didn't he cast the princess into a deep sleep. After the story is told, Link learns that the only way to awaken Zelda is to retrieve the Triforce of Courage, hidden away in the Great Palace, and reunite it with the other two pieces, and that the marking means that he is the hero chosen to awaken her. Link sets out on a quest to retrieve the Triforce, but must also evade death by the minions of Ganon, who desire to pour Link's blood on his ashes to revive him.`
  },
  {
    title: 'Breath of the Wild',
    id: GameIds.BreathOfTheWild,
    releases: [
      { platform: Platforms.WiiU, year: 2017 },
      { platform: Platforms.Switch, year: 2017 },
      { platform: Platforms.Switch2, year: 2025 }
    ],
    description: `Link is awakened in a chamber by a voice beckoning to him. After leaving the cave, Link learns that he has been asleep for 100 years, after failing to stop a monster called Calamity Ganon, currently being held inside Hyrule Castle by Princess Zelda. However, Calamity Ganon's power continues to grow, and if not stopped it will eventually break free with enough power to destroy the entire world. Link's quest is ultimately to defeat Calamity Ganon and save both Hyrule and Zelda.`
  },
  {
    title: 'Tears of the Kingdom',
    id: GameIds.TearsOfTheKingdom,
    releases: [
      { platform: Platforms.Switch, year: 2023 },
      { platform: Platforms.Switch2, year: 2025 }
    ],
    description: `Some time after defeating Calamity Ganon, Link and Princess Zelda investigate beneath Hyrule Castle for a dark substance known as gloom. They discover a mummified Ganondorf, sealed by a disembodied arm. Suddenly, the seal breaks, and the mummy attacks them with gloom and sends the castle soaring into the sky. The ground collapses, causing Zelda to plummet into an abyss where she mysteriously vanishes mid-fall. Link is rescued by the disembodied hand of the ancient king Rauru. With newfound Zonai abilities granted by Rauru, Link embarks on another adventure to find clues to save Hyrule from this Upheaval and to find Zelda.`
  },
  {
    title: 'Echoes of Wisdom',
    id: GameIds.EchoesOfWisdom,
    releases: [{ platform: Platforms.Switch, year: 2024 }],
    description: `After Princess Zelda is captured by the evil Ganon, the hero Link sets out on a daring mission to rescue her. He succeeds after a fierce battle—but just as victory seems certain, a strange rift appears and swallows Link. Soon, similar rifts begin to appear all across Hyrule, pulling people away one by one. Even the king and his closest advisers vanish without a trace. Now, it's up to Princess Zelda to embark on a perilous journey to save her father, the people of Hyrule, and the hero who once saved her—Link.`
  },
  // Side games
  {
    title: 'The Legend of Zelda Cartoon',
    id: GameIds.TheLegendOfZeldaCartoon,
    releases: [{ platform: Platforms.TVSeries, year: 1989 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `The unmentionables. Ganon is at his weakest here.`
  },
  {
    title: 'Zelda Game & Watch',
    id: GameIds.ZeldaGameAndWatch,
    releases: [{ platform: Platforms.GameAndWatch, year: 1989 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `A handheld LCD game featuring simplified Zelda gameplay on Nintendo's Game & Watch system.`
  },
  {
    title: 'The Legend of Zelda Game Watch',
    id: GameIds.TheLegendOfZeldaGameWatch,
    releases: [{ platform: Platforms.NelsonicGameWatch, year: 1989 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `A wristwatch with a built-in mini Zelda game produced by Nelsonic.`
  },
  {
    title: 'Link: The Faces of Evil',
    id: GameIds.LinkTheFacesOfEvil,
    releases: [{ platform: Platforms.CDi, year: 1993 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `Ganon has captured Princess Zelda and taken her to the island of Koridai. Link must travel to the island to rescue her and defeat Ganon.`
  },
  {
    title: 'Zelda: The Wand of Gamelon',
    id: GameIds.ZeldaTheWandOfGamelon,
    releases: [{ platform: Platforms.CDi, year: 1993 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `King Harkinian and Link travel to aid Duke Onkled against Ganon's forces, but they do not return. Princess Zelda must set out on her own to save them and defeat Ganon.`
  },
  {
    title: "Zelda's Adventure",
    id: GameIds.ZeldasAdventure,
    releases: [{ platform: Platforms.CDi, year: 1995 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `Ganon captures Link and the Celestial Signs that protect the kingdom of Tolemac. Princess Zelda must collect the signs and rescue Link to defeat Ganon.`
  },
  {
    title: "Freshly-Picked Tingle's Rosy Rupeeland",
    id: GameIds.FreshlyPickedTinglesRosyRupeeland,
    releases: [{ platform: Platforms.DS, year: 2006 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `An ordinary man is transformed into Tingle by Uncle Rupee and must collect rupees to reach the paradise of Rupeeland.`
  },
  {
    title: "Tingle's Balloon Fight DS",
    id: GameIds.TinglesBalloonFightDS,
    releases: [{ platform: Platforms.DS, year: 2007 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `A DS remake of the classic Balloon Fight game featuring Tingle. Available exclusively through Club Nintendo in Japan.`
  },
  {
    title: "Ripened Tingle's Balloon Trip of Love",
    id: GameIds.RipenedTinglesBalloonTripofLove,
    releases: [{ platform: Platforms.DS, year: 2009 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `Tingle is sucked into a storybook and must journey through various fairy tales to find his way home and win the heart of a princess.`
  },
  {
    title: 'Too Much Tingle Pack',
    id: GameIds.TooMuchTinglePack,
    releases: [{ platform: Platforms.DS, year: 2009 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `A collection of DSiWare games featuring Tingle, including various mini-games and activities.`
  },
  {
    title: 'Ancient Stone Tablets',
    id: GameIds.AncientStoneTablets,
    releases: [{ platform: Platforms.Satellaview, year: 1997 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `Six years after the events of A Link to the Past, after that incarnation of Link had defeated Ganon, returning peace to Hyrule and the Dark World to its proper state. Princess Zelda has been having dreams foretelling a coming evil. Both her and Aginah, the descendent of Sahasrahla, from A Link to the Past, investigate a bright light and find a mysterious character near the Eastern Palace. After they transport the person to Sahasrahla's hideout, Zelda states that she feels that the newcomer could be the "Hero of Light". After the hero wakes up, they must set out on a quest to defeat the monsters that have appeared in Hyrule while discovering the secret behind a set of stone tablets.`
  },
  {
    title: `Navi Trackers`,
    id: GameIds.NaviTrackers,
    releases: [{ platform: Platforms.GameCube, year: 2004 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `Training for the pirate life. (A minigame in the Japanese version of Four Swords Adventures.)`
  },
  {
    title: "Link's Crossbow Training",
    id: GameIds.LinksCrossbowTraining,
    releases: [{ platform: Platforms.Wii, year: 2007 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `Link is training with his crossbow in order to become a better archer.`
  },
  {
    title: 'My Nintendo Picross: The Legend of Zelda: Twilight Princess',
    id: GameIds.MyNintendoPicrossTheLegendOfZeldaTwilightPrincess,
    releases: [{ platform: Platforms.N3DS, year: 2016 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `A Picross puzzle game.`
  },
  {
    title: 'Hyrule Warriors',
    id: GameIds.HyruleWarriors,
    releases: [
      { platform: Platforms.WiiU, year: 2014 },
      { platform: Platforms.N3DS, year: 2016 },
      { platform: Platforms.Switch, year: 2018 }
    ],
    isSpinOff: true,
    description: `A long time ago, a sorceress named Cia guarded the balance of the Triforce, but a darkness corrupted her, leading her to wage war against the kingdom of Hyrule to claim the Triforce and resurrect a dark power that had been sealed away. In an attack on Hyrule Castle, a soldier-in-training Link discovers that he possesses the Triforce of Courage. After the battle, however, the Hyrulean forces find that Princess Zelda has gone missing. Link, Impa, and other allies must now fight off Cia and her forces in order to restore peace to Hyrule and find Zelda.`
  },
  {
    title: 'Cadence of Hyrule',
    id: GameIds.CadenceOfHyrule,
    releases: [{ platform: Platforms.Switch, year: 2019 }],
    isSpinOff: true,
    isIconSlanted: true,
    description: `Cadence, Link, and Zelda must save Hyrule from Octavo, who has placed the kingdom under a spell.`
  },
  {
    title: 'Hyrule Warriors: Age of Calamity',
    id: GameIds.AgeOfCalamity,
    releases: [{ platform: Platforms.Switch, year: 2020 }],
    isSpinOff: true,
    description: `Terrako, a small Guardian, travels back in time to prevent the Great Calamity from happening. This is an alternate take on the champions fight against Calamity Ganon.`
  },
  {
    title: 'Hyrule Warriors: Age of Imprisonment',
    id: GameIds.AgeofImprisonment,
    releases: [{ platform: Platforms.Switch2, year: 2025 }],
    isSpinOff: true,
    description: `The Imprisoning War that led to the events of Tears of the Kingdom.`
  }
  /*
  - tingle games
  - game & watch games
  - books?
  */
]
