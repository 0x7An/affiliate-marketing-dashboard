export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Affiliate Marketing',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Users',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Shared links',
          url: '/user/links',
          icon: 'icon-puzzle',
        }
      ]
    },   
    {
      name: 'Shops',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Campaigns',
          url: '/shop/campaigns',
          icon: 'icon-cursor',
        },
        {
          name: 'Products',
          url: '/shop/products',
          icon: 'icon-cursor',
        }
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart',
    }        
  ],
};
