/* *********************************************************
 * Externalizing the app related configuration
 * Deploy the Web App with multiple versions and branding with 
 * different configurations without changing AngularJS
 * application code
 * *********************************************************
 */
(function (window) {
	window.__config = window.__config || {};

	// App Name
	window.__config.app_name = 'Blog';

	// App Version
	window.__config.app_version = '1.0';

	// App Home Url
	window.__config.app_home = 'http://jaspardzc.github.io/Blog/#/home';
}(this));