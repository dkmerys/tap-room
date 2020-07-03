import React from 'react';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      kegList: [
        {
          name: 'Hayduke Helles',
          brewery: 'Crux',
          description: 'Bright as a desert sunrise and crisp as it is uncompromising, this helles lager balances a slightly sweet malt body with a generous dose of whole leaf crystal and fuggle hops for a satisfactory sip that’s worth fighting for.',
          ABV: '5.5%',
          price: '$4',
          quantity: 118,
          id: "0"
        },
        {
          name: '3-Way IPA',
          brewery: 'Fort George',
          description: 'Built on a structurally sound foundation of pilsner malt, spelt, and flaked oats, and dry-hopped with ridiculous levels of Simcoe, Azacca, Citra, and Chinook hops, this juicy beast is coming to crush your summer. 3-Way IPA has enough tropical fruit flavors to satiate a giant lizard, playing on pleasant notes of melon & fresh orange peel, and a soft finishing touch, like a gorilla on the bongos.',
          ABV: '7.2%',
          price: '$6',
          quantity: 65,
          id: "1"
        },
        {
          name: 'Sassy Pony Pale',
          brewery: 'Gigantic',
          description: 'Frisky and hop forward, Sassy Pony is a juicy pale that pleases those looking for something a little lighter than an IPA, but still desiring a citrusy/fruity/sassy hop kick.',
          ABV: '5.5%',
          price: '$4',
          quantity: 104,
          id: "2"
        },
        {
          name: 'Hazy... So Hot Right Now',
          brewery: 'StormBreaker',
          description: 'Features additions of 18 lbs of Mosaic in the whirlpool, another 18 at Dry Hop, producing intense, Blue Steel, Le Tigre-like aromas of citrus and tropical fruits.',
          ABV: '5.6%',
          price: '$5',
          quantity: 120,
          id: "3"
        },
        {
          name: 'Gloria!',
          brewery: 'Block15',
          description: 'Blending delicate malt character and zesty hops, Gloria! is our vision of the crisp, unfiltered pilsner. Brewed with floor-malted pilsner malts, Gloria! pours a hazy, straw-colored pint. European and Oregon-grown hops impart citrus and floral spice, while select lager yeast finishes clean and refreshing. This immensely drinkable lager is our brewers’ choice after a long day in the brewhouse. Gloria!',
          ABV: '5%',
          price: '$4.50',
          quantity: 87,
          id: "4"
        }
      ]
    }
  }
}