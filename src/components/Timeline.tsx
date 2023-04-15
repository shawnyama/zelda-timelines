import { useState } from "preact/hooks";
import { nodes, GameData } from "../data/games";
import Game from "./Game";

const defaultSpacing: number = 250;
const width: number = (nodes.length + 2) * defaultSpacing;
const height: number = typeof window !== "undefined" && window.innerHeight * 0.5;

function Timeline({ chosenTimeline }) {
    const [chosenGame, setChosenGame] = useState<GameData>({ name: "", imageName: "" });

    return (
        <>
            <section class="timeline-container">
                <svg class="timeline" width={width} height={"100%"}>
                    {
                        nodes.map((node: GameData, n) => {
                            let heightDivisor = 0;
                            let xPosition = n + 1;

                            if (node[chosenTimeline].branch > 0)
                                heightDivisor = node[chosenTimeline].branch % 2 === 0 ? -2 : 2;

                            console.log(heightDivisor)

                            const branchPosition = height / (2 + heightDivisor);

                            return (
                                <g>
                                    {n > 0 && (
                                        <rect
                                            x={defaultSpacing * n + 95}
                                            y={branchPosition}
                                            height={4}
                                            width={140}
                                            fill="blue"
                                        />
                                    )}
                                    <g
                                        class="game"
                                        style={{
                                            transformOrigin: `
                                        ${defaultSpacing * xPosition + 35}px  
                                        ${branchPosition}px`,
                                        }}
                                        onClick={() => setChosenGame(node)}
                                    >
                                        <rect
                                            class="rect-for-hover"
                                            x={defaultSpacing * xPosition - 35}
                                            y={branchPosition - 50}
                                            height={140}
                                            width={140}
                                            fill="transparent"
                                        />
                                        <image
                                            href={`../../../icons/${node.imageName}.svg`}
                                            alt="Game icon"
                                            x={defaultSpacing * xPosition}
                                            y={branchPosition - 40}
                                            width={80}
                                        />
                                        <text
                                            class="game-name"
                                            x={defaultSpacing * xPosition + 35}
                                            y={branchPosition}
                                            dominant-baseline="middle"
                                            text-anchor="middle"
                                            dy={70}
                                        >
                                            {node.name}
                                        </text>
                                    </g>
                                </g>
                            )
                        })
                    }
                </svg>
            </section>
            <Game chosenGame={chosenGame} />
        </>
    )
};

export default Timeline; 
