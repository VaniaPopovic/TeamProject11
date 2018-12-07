export default {
  items: [
    /*{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },*/
    {
      title: true,
      name: 'Games',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Word Find',
      url: '/dashboard',
      icon: 'icon-game-controller',
      attributes: { },
    },
    {
      name: 'Crosswords',
      url: '/crosswords',
      icon: 'icon-game-controller',
      attributes: { },
    },
      {
      name: 'Scrabble',
      url: '/scrabble',
      icon: 'icon-game-controller',
      attributes: { },
    },
  ],
};
