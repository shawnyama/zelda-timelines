/*
    How branch works:
    -   Original timeline: 0
    -   For every new split add 1
    -   Odd branches go above, even branches are placed below the original timeline
    -   If a timeline is converged add 0.1 to the merged branch
    
    How placement works:
    -   Start at 1 at the beginning of a new branch then add 1
*/ 

type TimelinePlacement = {
    branch: number, 
    placement: number
}

export type GameData = {
    name: string;
    imageName: string;
    isSpinOff?: boolean;
    officialTimelinePlacement?: TimelinePlacement;
    triforceTimelinePlacement?: TimelinePlacement;
    loruleanTimelinePlacement?: TimelinePlacement;
}

export const nodes: GameData[] = [
    {
        name: "Skyward Sword",
        imageName: "skyward-sword",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Ocarina of Time",
        imageName: "ocarina-of-time",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 2,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Majora's Mask",
        imageName: "majoras-mask",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 3,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Hyrule Warriors",
        imageName: "hyrule-warriors",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: null,
            placement: null,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 4,
        },
        loruleanTimelinePlacement: {
            branch: null,
            placement: null,
        }
    },
    {
        name: "Twilight Princess",
        imageName: "twilight-princess",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 5,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Link's Crossbow Training",
        imageName: "links-crossbow-training",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 6
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "A Link to the Past",
        imageName: "a-link-to-the-past",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0,
            placement: 7,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "The Wind Waker",
        imageName: "the-wind-waker",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 1,
            placement: 1,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Navi Trackers",
        imageName: "mdi:triforce",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 1,
            placement: 2,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Phantom Hourglass",
        imageName: "phantom-hourglass",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
             branch: 1,
            placement: 3,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Spirit Tracks",
        imageName: "spirit-tracks",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
           branch: 1,
            placement: 4,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "The Minish Cap",
        imageName: "the-minish-cap",
        officialTimelinePlacement: {
            branch: 0,
            placement: 5,
        },
        triforceTimelinePlacement: {
           branch: 1,
            placement: 2,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Four Swords",
        imageName: "four-swords",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
           branch: 1,
            placement: 6,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Four Swords Adventures",
        imageName: "four-swords-adventures",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 1,
            placement: 7,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Ancient Stone Tablets",
        imageName: "mdi:triforce",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 1,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "A Link Between Worlds",
        imageName: "a-link-between-worlds",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 2,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Cadence of Hyrule",
        imageName: "cadence-of-hyrule",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 3,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Triforce Heroes",
        imageName: "triforce-heroes",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 4,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Oracle of Seasons",
        imageName: "oracle-of-seasons",
        officialTimelinePlacement: {
            branch: 0,
            placement: 5,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 1,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Oracle of Ages",
        imageName: "oracle-of-ages",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 6,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Link's Awakening",
        imageName: "links-awakening",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 7,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Zelda I",
        imageName: "the-legend-of-zelda",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 8,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Zelda II: The Adventure of Link",
        imageName: "the-adventure-of-link",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 9,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "CDi Games & Cartoon",
        imageName: "mdi:triforce",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 10,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Breath of the Wild",
        imageName: "breath-of-the-wild",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 1,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Hyrule Warriors: Age of Calamity",
        imageName: "age-of-calamity",
        isSpinOff: true,
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 1,
            placement: 1,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    },
    {
        name: "Tears of the Kingdom",
        imageName: "tears-of-the-kingdom",
        officialTimelinePlacement: {
            branch: 0,
            placement: 1,
        },
        triforceTimelinePlacement: {
            branch: 0.1,
            placement: 12,
        },
        loruleanTimelinePlacement: {
            branch: 0,
            placement: 1,
        }
    }
];