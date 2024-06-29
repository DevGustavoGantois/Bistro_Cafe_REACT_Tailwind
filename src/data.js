// import images
  import AboutImg from '../src/assets/img/about/plate.png';
  import ModelWhiteImg from '../src/assets/img/model-white.png';
  import ModelBlackImg from '../src/assets/img/model-black.png';
  import MenuImg1 from '../src/assets/img/menu/1.png';
  import MenuImg2 from '../src/assets/img/menu/2.png';
  import MenuImg3 from '../src/assets/img/menu/3.png';
  import MenuImg4 from '../src/assets/img/menu/4.png';
  import SignatureImg from '../src/assets/img/team/signature.png';
  import ChefImg from '../src/assets/img/team/chef.png';
  import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
  import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
  import Avatar3 from '../src/assets/img/testimonial/avatar3.png';
  
  export const navData = [
    { href: '/', name: 'Home' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#menu', name: 'Menu' },
    { href: '#time', name: 'Time' },
    { href: '#depoimentos', name: 'Depoimentos' },
    { href: '#reservar_mesa', name: 'Reservar Mesa' },
    { href: '#contato', name: 'Contato' },
  ];
  
  export const heroData = {
    pretitle: 'nada reúne como',
    title: 'Bistro Cafe',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    btnText: 'Descubra mais',
  };
  
  
  
  export const aboutData = {
    pretitle: 'nossa história',
    title: 'Quem nós somos',
    subtitle:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.',
    btnText: 'Descubra mais',
    image: AboutImg,
  };
  
  export const menuData = {
    title: 'delicioso sabor do outono',
    subtitle: 'veja todo o cardápio para uma refeição saborosa hoje',
    modelImg: ModelWhiteImg,
    btnText: 'veja o menu completo',
    menuItems: [
      {
        image: MenuImg1,
        name: 'Bolo de chocolate',
        price: 'R$57.99',
        description: 'Class aptent taciti ciosqu litora torquent per',
      },
      {
        image: MenuImg2,
        name: 'Hamburguér Vegano',
        price: 'R$89.49',
        description: 'Class aptent taciti ciosqu litora torquent per',
      },
      {
        image: MenuImg3,
        name: 'King Burger',
        price: 'R$95.50',
        description: 'Class aptent taciti ciosqu litora torquent per',
      },
      {
        image: MenuImg4,
        name: 'Hambúrguer Mexicano',
        price: 'R$79.99',
        description: 'Class aptent taciti ciosqu litora torquent per',
      },
    ],
  };
  
  export const teamData = {
    pretitle: 'nosso time',
    title: 'Conheça nosso chefe',
    sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
    sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
    name: 'Sara peter',
    occupation: 'Chefe Executíva',
    signatureImg: SignatureImg,
    chefImg: ChefImg,
  };
  
  export const testimonialData = {
    title: "O que os clientes estão dizendo ",
    subtitle: '1500+ clientes satisfeitos',
    modelImg: ModelWhiteImg,
    slider: [
      {
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
        image: Avatar1,
        name: 'Rick Thompson',
        occupation: 'CEO da Dellightfull',
      },
      {
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
        image: Avatar2,
        name: 'John Doe',
        occupation: 'CEO da MarmitaDelicia',
      },
      {
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
        image: Avatar3,
        name: 'Henry A.',
        occupation: 'CEO do GCafé',
      },
    ],
  };
  
  export const reservationData = {
    title: 'Formulário de Inscrição',
    subtitle:
      'Ligue para (71) 123-4567 das 5h às 23h diariamente ou reserve online com OpenTable. Reservas necessárias para grupos de 6 ou mais.',
    modelImg: ModelBlackImg,
    btnText: 'fazer uma reserva',
  };
  
  export const newsletterData = {
    title: 'junte-se ao nosso boletim informativo',
    subtitle: 'Receba as últimas notícias e atualizações em sua caixa de entrada.',
    placeholder: 'Assine nossos deliciosos pratos',
    btnText: 'Inscreva-se agora',
  };
  
  export const footerData = {
    contact: {
      title: 'Local de Contato',
      address: '3784 Rua dos Anjos, #7 Salvador-BA, CA 69985',
      phone: '+55 (71) 256-3689',
    },
    hours: {
      title: 'jornada de trabalho',
      program: [
        {
          days: 'segunda-feira sexta-feira',
          hours: '09h00 - 22h00',
        },
        {
          days: 'sábado domingo',
          hours: '09h00 - 23h00',
        },
      ],
    },
    social: {
      title: 'Redes Sociais',
    },
  };