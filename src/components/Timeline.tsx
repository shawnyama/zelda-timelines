// import { h } from 'preact'
import { useState } from "preact/hooks";
import { nodes } from "../data/games";
import Game from "./Game";

const defaultSpacing: number = 250
const width: number = (nodes.length + 2) * defaultSpacing
const height: number = typeof window !== "undefined" && window.innerHeight * 0.5;

interface GameData {
    name: string;
    imageName: string;
}

function Timeline() {
    const [chosenGame, setChosenGame] = useState<GameData>({ name: "", imageName: "" });

    return (
        <>

            <section class="timeline-container">
                {/* {nodes.map((node: any, n) => (
                    <>
                        <img class="game-icon" src={`../../../icons/${node.imageName}.svg`} alt="Game icon" />
                        <span>{node.imageName}</span>
                    </>
                ))} */}
                <svg class="timeline" width={width} height={"100%"}>
                    {
                        nodes.map((node: any, n) => (
                            <g>
                                {n > 0 && (
                                    <rect
                                        x={defaultSpacing * n + 95}
                                        y={height / 2}
                                        height={4}
                                        width={140}
                                        fill="blue"
                                    />
                                )}
                                <g
                                    class="game"
                                    style={{
                                        transformOrigin: `
                                        ${defaultSpacing * (n + 1) + 35}px  
                                        ${height / 2}px`,
                                    }}
                                >
                                    <rect
                                        class="rect-for-hover"
                                        x={defaultSpacing * (n + 1) - 35}
                                        y={height / 2 - 50}
                                        height={140}
                                        width={140}
                                        fill="transparent"
                                        onClick={() => setChosenGame({ name: node.name, imageName: node.imageName })}
                                    />
                                    <image
                                        href={`../../../icons/${node.imageName}.svg`}
                                        alt="Game icon"
                                        x={defaultSpacing * (n + 1)}
                                        y={height / 2 - 40}
                                        width={80}
                                    />
                                    <text
                                        class="game-name"
                                        x={defaultSpacing * (n + 1) + 35}
                                        y={height / 2}
                                        dominant-baseline="middle"
                                        text-anchor="middle"
                                        dy={70}
                                    >
                                        {node.name}
                                    </text>
                                </g>
                            </g>
                        ))
                    }
                </svg>
            </section>
            <Game chosenGame={chosenGame} />
        </>
    )
};

export default Timeline; 
