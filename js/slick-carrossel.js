$('.slick-carrossel').slick({
    slidesToShow: 4, // Quantidade de elementos a serem exibidos na tela
    slidesToScroll: 1, // Quantidade de elementos a serem rolados quando a seta for clicada
    infinite: true, // Define se o carrossel será infinito
    dots: true, // Define se serão exibidos os pontos de navegação
    responsive: [
      {
        breakpoint: 1024, // Quebra de ponto para mudar o número de elementos a serem exibidos
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });