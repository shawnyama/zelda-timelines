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
    description: `Ganon and his minions repeatedly attempt to obtain the Triforce of Wisdom and conquer Hyrule. Link, accompanied by Princess Zelda and the fairy Spryte, must work together to thwart Ganon's plans while attempting to claim the Triforce of Power.`
  },
  {
    title: 'Zelda Game & Watch',
    id: GameIds.ZeldaGameAndWatch,
    releases: [{ platform: Platforms.GameAndWatch, year: 1989 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `As the eight dragons cannot live in peace with humans, they decide to take over the world. Eventually, they kidnap Princess Zelda and lock her in a dungeon which can only be opened with the Triforce. Each of the dragons is located in their own labyrinth, and each guards a different fragment of the Triforce. Link sets out to destroy all eight dragons and reassemble the Triforce to free Zelda from the dragons' dungeon.`
  },
  {
    title: 'The Legend of Zelda Game Watch',
    id: GameIds.TheLegendOfZeldaGameWatch,
    releases: [{ platform: Platforms.NelsonicGameWatch, year: 1989 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `Link enters a cave unarmed to collect the pieces of the Triforce. He travels through four dungeons with four caves in each, while being attacked by Iron Balls, Keese, and at the end of each dungeon, Aquamentus.`
  },
  {
    title: 'Link: The Faces of Evil',
    id: GameIds.LinkTheFacesOfEvil,
    releases: [{ platform: Platforms.CDi, year: 1993 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `The land of Hyrule is experiencing a period of peace, yet Link is feeling increasingly useless and bored with no adventures to go on. Suddenly a wizard named Gwonam arrives on his flying carpet, informing King Harkinian that Ganon's army have taken over the island of Koridai. Ganon and his minions have begun enslaving the islanders and transforming them into monsters. Although the King readily volunteers their aid, Gwonam explains that according to a written prophecy, Link is the only one who can defeat Ganon. As Link and Gwonam fly back to Koridai, the wizard tells him about the island's "Faces of Evil"; giant mountains and stone structures that are in the shape of Ganon's minions and are being controlled by them. Gwonam beseeches that Link must conquer each Face of Evil before facing Ganon himself, who has his own Face of Evil.`
  },
  {
    title: 'Zelda: The Wand of Gamelon',
    id: GameIds.ZeldaTheWandOfGamelon,
    releases: [{ platform: Platforms.CDi, year: 1993 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `King Harkinian announces that Duke Onkled, ruler of the island of Gamelon, is under attack by the evil forces of Ganon, and that he is going to the island to aid him. Princess Zelda becomes worried for her father's safety, but Harkinian reassures her that he will take the Triforce of Courage to protect him. He tells Zelda to send Link for help if he does not return in a month. Impa also assures Zelda that her father will safely return, according to the Triforce of Wisdom's vision. An entire month passes without word from the King. As instructed, Zelda sends Link to find him, but he fails to return either. Zelda then decides to venture forth herself to search for Link and her father, taking Impa along with her.`
  },
  {
    title: "Zelda's Adventure",
    id: GameIds.ZeldasAdventure,
    releases: [{ platform: Platforms.CDi, year: 1995 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `The lands of Hyrule and Tolemac, a region in southeastern Hyrule, are in the middle of an Age of Darkness; Ganon had captured Link and began exerting his influence over the land. He had stolen the seven Celestial Signs and hidden them away in Tolemac's Shrines, guarded by his followers, the Shrine Keepers. In need of a brave warrior to save the kingdom, the astronomer Gaspra summons Princess Zelda as his champion to undertake the dangerous task of relocating the Celestial Signs, to rescue Link, and to ultimately defeat Ganon and return peace to Tolemac. He gives her a magic pendant and bids her good luck.`
  },
  {
    title: "Freshly-Picked Tingle's Rosy Rupeeland",
    id: GameIds.FreshlyPickedTinglesRosyRupeeland,
    releases: [{ platform: Platforms.DS, year: 2006 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `The story starts when Tingle, first appearing as an ordinary, middle-aged man, is offered a life in a paradise called Rupeeland. Tingle is guided by Uncle Rupee, who tells him to gather many Rupees and toss them into the Western Pool in order to gain access to Rupeeland. Pinkle, a Fairy that communicates to Tingle via a computer that resembles a Nintendo DS (as well as the Tingle Tuner) also helps him along his journey. As Tingle explores, he will find numerous treasures, which include collecting ingredients for concoctions such as Potions and meals that can be sold to the locals in nearby Port Town. Tingle hires bodyguards throughout the game to aid him in combat.`
  },
  {
    title: "Tingle's Balloon Fight DS",
    id: GameIds.TinglesBalloonFightDS,
    releases: [{ platform: Platforms.DS, year: 2007 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `A remake of the classic Balloon Fight game featuring Tingle.`
  },
  {
    title: "Ripened Tingle's Balloon Trip of Love",
    id: GameIds.RipenedTinglesBalloonTripofLove,
    releases: [{ platform: Platforms.DS, year: 2009 }],
    isSpinOff: true,
    useFallbackIcon: true,
    description: `An ordinary 35-year-old man watches a sales program on television. The man learns of a book called "Ripened Valiant Heroes Balloon Trip of Love". It is a story about a hero that leaves his parents to save a princess. The book, which normally costs 4800 Rupees, is being offered for only 2 Rupees. He orders the book, but he gets sucked into the world of a picture book when he opens it and transforms into Tingle. He learns that the only way to get out of the book is to dance with the princess of this world. However, the princess has been kidnapped by a demon king named Buriki, so Tingle must set out to rescue her.`
  },
  {
    title: 'Too Much Tingle Pack',
    id: GameIds.TooMuchTinglePack,
    releases: [{ platform: Platforms.DS, year: 2009 }],
    isSpinOff: true,
    useFallbackIcon: true,
    no3dBoxArt: true,
    description: `A collection of applications and mini-games featuring Tingle.`
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
    description: `Solve Picross puzzles with the assistance of Midna.`
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
