        new Mmenu(
            document.querySelector('#menu'), {
                pageScroll: true,
                extensions: ['theme-dark', 'shadow-page'],
                iconPanels: true,
                setSelected: true,
                counters: true,
                searchfield: {
                    placeholder: 'Search menu items'
                },
                iconbar: {
                    add: true,
                    top: [
                        '<a href="index.html"><span class="fa fa-home"></span></a>'
                    ],
                    bottom: [
                        '<a href="https://t.me/joinchat/AAAAAFkB8-T-HrTijkOICA" target="_blank"><span class="fa fa-telegram"></span></a>',
                        '<a href="https://twitter.com/HkRestart" target="_blank"><span class="fa fa-twitter"></span></a>',
                        '<a href=""><span class="fa fa-facebook"></span></a>',
                        '<a href=""><span class="fa fa-youtube"></span></a>'
                    ]
                },
                sidebar: {
                    collapsed: {
                        use: '(min-width: 400px)',
                        hideNavbar: false
                    },
                    expanded: {
                        use: '(min-width: 3000px)'
                    }
                },
                navbars: [{
                    content: ['searchfield']
                }]
            }, {
                searchfield: {
                    clear: true
                },
                navbars: {
                    breadcrumbs: {
                        removeFirst: true
                    }
                }
            }
        );

        document.addEventListener('click', (evnt) => {
            let anchor = evnt.target.closest('a[href^="#/"]');
            if (anchor) {
                alert('Thank you for clicking, but that\'s a demo link.');
                evnt.preventDefault();
            }
        });
