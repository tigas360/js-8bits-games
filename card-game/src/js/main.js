console.log("starting...");

class DeckManager
{
    constructor() {}

    mountDeck = ( maxCards ) => {
        console.log( "Deck com total de " + maxCards + " cartas");
    }
}

const deckArr = [];

deckArr.push( new DeckManager( ) );
deckArr.push( new DeckManager( ) );

deckArr.forEach(element => {
    element.mountDeck( 12 );
});