/* *********************************************************
 * Externalizing the environment related configuration
 * Deploy the Web App into different environments with 
 * different configurations without changing AngularJS
 * application code
 * *********************************************************
 */
(function (window) {
	window.__env = window.__env || {};

	// API Url
	window.__env.apiUrl = 'http://dev.blog-api.com';

	// Base Url
	window.__env.baseUrl = '';

	// settings this to false will disable the console output
	window.__env.enableDebug = true;
}(this));