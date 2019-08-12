/////////// iziToast | Cookie Notification ///////////
/*
iziToast.show({
    id: 'cookie-toast',
    theme: 'dark',
    color: '#2b2b2b',
    icon: 'fas fa-cookie-bite',
    iconColor: '#F8EF00',
    title: '',
    message: 'This website uses cookies to ensure you get the best experience on our website. &nbsp;<a href="cookie_policy.html" target="_blank">Learn More</a>',
    position: 'bottomCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: '#F8EF00',
    timeout: false,
    transitionIn: 'fadeInUp',
    buttons: [
        ['<button>Got It!</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutDown',
                onClosing: function (instance, toast, closedBy) {
                    console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
                }
            }, toast, 'buttonName');
        }]
    ],
    onOpening: function (instance, toast) {
        console.info('callback abriu!');
    },
    onClosing: function (instance, toast, closedBy) {
        console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
    }
});
*/