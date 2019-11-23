import React from 'react';

const Card = ({ name, birth_year, id }) => {
    return(
        <div className="tc bg-black yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <h2>{name}</h2>
                <p>{birth_year}</p>
            </div>
        </div>
    );
}

export default Card;