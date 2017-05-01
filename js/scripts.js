jQuery(document).ready(function($){
    
    //scrollto
    $.fn.scrollToElement = function(){
        $(this).children('li').children('a').bind('click', function(){
            var elName = $(this).data('to');
            var el = $(elName);
            $('html, body').animate({
                scrollTop: el.offset().top+'px'
            }, 300);
        });
    }
    
    $('ul.rc-menu').scrollToElement();
    
    //scrollto end
    
    //mobile menu
    var copyMenu = $('ul.rc-menu').html();
    $('.rc-top-menu').parent('div').parent('div').append('<div class="col-12 rc-menu-mobile text-center">'+copyMenu+'</div>')
    $('.rc-toggle-menu').bind('click', function(){
        $('.rc-menu-mobile').toggle(300);
    });
    $('div.rc-menu-mobile').scrollToElement();
    //mobile menu end
    
    //get portfolio
    $.get("portfolio.xml", function(data){
        var arPort = new Array();
        
        $(data).find('projekt').each(function(){
            var tmp = {
                picture: $('picture', this).text(),
                pictureAlt: $('picture', this).attr('alt'),
                title: $('title', this).text(),
                excerpt: $('excerpt', this).text()
            }
            var divItem = $('<div class="item">');
            var figureItem = $('<figure class="item-slider">');
            var img = $('<img>')
                .addClass('img-responsive')
                .attr('src', tmp['picture'])
                .attr('alt', tmp['pictureAlt']);
            var figcaptionItem = $('<figcaption class="item-caption">');
            var divExcerpt = $('<div class="text-center rc-center-y">');
            var tagTitle = $('<h4 class="rc-title-small f-color5">').text(tmp['title']);
            var tagExcerpt = $('<p class="rc-tex-medium f-color4 hidden-sm-down">').text(tmp['excerpt']);
            var btnMore = $('<a href="" class="rc-btn-primary">site</a>');
            
            divItem.append(figureItem
                .append(img)
                .append(figcaptionItem
                    .append(divExcerpt
                        .append(tagTitle)
                        .append(tagExcerpt)
                        .append(btnMore)
                    )
                )
            ).appendTo($('.rc-portfolio-slider .owl-theme'));
        });   
        
        //slider portfolio
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            responsive:{
                0:{
                    items: 2
                },
                756:{
                    items: 3
                }
            }
        });
        
    });
    //get portfolio end

    //form animate
    $('.show-form').bind('click', function(){
        $('.rc-contact-form').animate({
            top: 0
        }, 500);
    });
    $('.rc-contact-form .rc-close').bind('click', function(){
        $('.rc-contact-form').animate({
            top: '100%'
        }, 500);
    });
    //form animate end
    
    
    
    //mapa
    var map = new GMaps({
        el: "#map",
        lat: 52.1832732,
        lng: 21.2789398,
        zoom: 8,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#d0032e"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
    });
    
    var marker = {
      url: '../img/location-pin.png',
      size: new google.maps.Size(20, 31),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };
    
    map.addMarker({
        lat: 52.1832732,
        lng: 21.2789398,
        icon: marker
    });
    
});