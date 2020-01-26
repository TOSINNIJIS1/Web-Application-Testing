import React from "react"

const Display = props => {
    return (
        <div className="container">
            <section className="scoreboard" aria-labelledby="dashboard">
                <div className="topRow">
                    <div className="home">
                        <h2 className="home">Balls: {props.balls} </h2>
                        <h2 className="home"> Strikes: {props.strikes} </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Display
