import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
    return (
        <div>
            {
                people.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={user.id}
                            name={user.name}
                            birth_year={user.birth_year}
                        />
                    );
                })
            }
        </div>

    );
}
export default CardList;