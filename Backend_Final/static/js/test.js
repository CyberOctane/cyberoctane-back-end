/////////// iziToast | Cookie Notification ///////////

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

/**
 * Created by mathieu on 07/03/17.
 */

(function (cookiebanner) {

    // stop from running again, if accidently included more than once.
    if (cookiebanner.hasInitialised) return;

    var util = {
        // only used for extending the initial options
        deepExtend: function (target, source) {
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    if (prop in target && this.isPlainObject(target[prop]) && this.isPlainObject(source[prop])) {
                        this.deepExtend(target[prop], source[prop]);
                    } else {
                        target[prop] = source[prop];
                    }
                }
            }
            return target;
        },

        replaceContent: function (str, callback) {
            var marker = /{{([a-z][a-z0-9\-_]*)}}/ig;
            return str.replace(marker, function (matches) {
                return callback(arguments[1]) || '';
            })
        },

        getCookie: function (name) {
            var value = '; ' + document.cookie;
            var parts = value.split('; ' + name + '=');
            return parts.length != 2 ? undefined : parts.pop().split(';').shift();
        },

        setCookie: function (name, value, expiryDays, path) {
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + (expiryDays || 365));

            var cookie = [
                name + '=' + value,
                'expires=' + expirationDate.toUTCString(),
                'path=' + (path || '/')
            ];

            document.cookie = cookie.join(';');
        }
    };

    // valid cookie values
    cookiebanner.status = {
        deny: 'deny',
        allow: 'allow',
        dismiss: 'dismiss'
    };

    cookiebanner.Banner = (function () {

        var defaultOptions = {

            enabled: true,

            cookie: {
                name: 'allegorithmic_consent_status',
                path: '/',
                expiryDays: 365
            },

            content: {
                message: 'By closing this window, you agree to the use of cookies to save and remember your preferences, to customize the content you see, to measure and research the effectiveness of Substance\'s interactive online content and to track Substance\'s websites analytics and use. To find out more about our cookies policy,',
                link: 'click this link',
                button: 'OK',
                href: 'https://www.substance3d.com/legal/privacy-policy'
            },

            element: '<span class="message">{{message}} <a class="more" aria-label="learn more about cookies" role=button tabindex="0" href="{{href}}" target="_blank">{{link}}</a></span><div class="button"><a aria-label="dismiss cookie message" role=button tabindex="0">{{button}}</a></div>',

            window: '<div id="bannerCookie">{{children}}</div>'
        };

        function Banner() {
            this.initialise.apply(this, arguments);
        }

        Banner.prototype.initialise = function (options) {

            // set options back to default options
            util.deepExtend(this.options = {}, defaultOptions);

            if (checkCallbackHooks.call(this)) {
                this.options.enabled = false;
            }

            var content = this.options.window.replace('{{children}}', getInnerMarkup.call(this));;
            this.element = appendMarkup.call(this, content);

            this.autoOpen();
        };

        Banner.prototype.hasAnswered = function () {
            return Object.keys(cookiebanner.status).indexOf(this.getStatus()) >= 0;
        };

        Banner.prototype.autoOpen = function (options) {
            !this.hasAnswered() && this.options.enabled && this.open();
        };

        Banner.prototype.open = function () {
            if (!this.element) return;

            if (!this.isOpen()) {
                this.element.style.display = '';
            }

            return this;
        };

        Banner.prototype.close = function () {
            if (!this.element) return;

            if (this.isOpen()) {
                this.element.style.display = 'none';
            }
            return this;
        };

        Banner.prototype.isOpen = function () {
            return this.element && this.element.style.display == '';
        };

        Banner.prototype.setStatus = function (status) {
            var cookie = this.options.cookie;
            var value = util.getCookie(cookie.name);
            var chosenBefore = Object.keys(cookiebanner.status).indexOf(value) >= 0;

            if (Object.keys(cookiebanner.status).indexOf(status) >= 0) {
                util.setCookie(cookie.name, status, cookie.expiryDays, cookie.path);
            } else {
                this.clearStatus();
            }
        };

        Banner.prototype.getStatus = function () {
            return util.getCookie(this.options.cookie.name);
        };

        Banner.prototype.clearStatus = function () {
            var cookie = this.options.cookie;
            util.setCookie(cookie.name, '', -1, cookie.path);
        };

        function appendMarkup(markup) {
            var div = document.createElement('div');
            div.innerHTML = markup;

            var el = div.children[0];

            el.style.display = 'none';

            // save ref to the function handle so we can unbind it later
            this.onButtonClick = handleButtonClick.bind(this);

            el.addEventListener('click', this.onButtonClick);

            document.body.appendChild(el);
            return el;
        }

        function handleButtonClick(event) {
            this.setStatus(cookiebanner.status.allow);
            this.close();
        }

        function getInnerMarkup() {
            var opts = this.options;

            return util.replaceContent(opts.element, function (name) {
                var str = opts.content[name];
                return (name && typeof str == 'string' && str.length) ? str : '';
            });
        }

        function checkCallbackHooks() {
            if (!window.navigator.cookieEnabled) {
                return true;
            }

            if (window.CookiesOK || window.navigator.CookiesOK) {
                return true;
            }

            var allowed = Object.keys(cookiebanner.status);
            var answer = this.getStatus();
            var match = allowed.indexOf(answer) >= 0;

            return match;
        }

        return Banner;


    }());


    cookiebanner.initialise = function () {
        new cookiebanner.Banner();
    };


    // prevent this code from being run twice
    cookiebanner.hasInitialised = true;
    window.cookiebanner = cookiebanner;

}(window.cookiebanner || {}));

window.addEventListener("load", function () {
    window.cookiebanner.initialise();
});