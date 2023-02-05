import { h } from 'preact'

function Game({ chosenGame }) {
    return (
        <section class="game-details">
            <article>
                <p>This game is the best one.</p>
            </article>
            {/* <div class="image-container" onClick={() => console.log(chosenGame === null)}> */}
            <img
                src={`../titles/${chosenGame.imageName}.png`}
                onError={(e) => {
                    e.target.src.includes(".png") ?
                        e.target.src = `../titles/${chosenGame.imageName}.svg` :
                        e.target.src = `../titles/the-legend-of-zelda.svg`;
                    e.target.onerror = null;
                }}
                alt="Game Title"
            />
            {/* </div> */}
        </section>
    )
}

export default Game;