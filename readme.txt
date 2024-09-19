=== Safe Redirect Manager ===
Contributors:      10up, tlovett1, tollmanz, taylorde, jakemgold, danielbachhuber, jeffpaul
Tags:              http redirects, redirect manager, url redirection, safe http redirection, multisite redirects
Tested up to:      6.6
Stable tag:        2.2.0
License:           GPLv2 or later
License URI:       http://www.gnu.org/licenses/gpl-2.0.html

Safely manage your website's HTTP redirects.

== Description ==

Safely manage your site's redirects the WordPress way. There are many redirect plugins available. Most of them store redirects in the options table or in custom tables. Most of them provide tons of unnecessary options. Some of them have serious performance implications (404 error logging). Safe Redirect Manager stores redirects as Custom Post Types. This makes your data portable and your website scalable. Safe Redirect Manager is built to handle enterprise level traffic and is used on major publishing websites. The plugin comes with only what you need following the WordPress mantra, decisions not options. Actions and filters make the plugin very extensible.

[Fork the plugin on GitHub.](https://github.com/10up/safe-redirect-manager)

== Installation ==

Install the plugin in WordPress. You can download a [zip via GitHub](https://github.com/10up/safe-redirect-manager/archive/trunk.zip) and upload it using the WordPress plugin uploader ("Plugins" > "Add New" > "Upload Plugin").

== Configuration ==

There are no overarching settings for this plugin. To manage redirects, navigate to the administration panel ("Tools" > "Safe Redirect Manager").

Each redirect contains a few fields that you can utilize:

=== "Redirect From" ===

This should be a path relative to the root of your WordPress installation. When someone visits your site with a path that matches this one, a redirect will occur. If your site is located at `http://example.com/wp/` and you wanted to redirect `http://example.com/wp/about` to `http://example.com`, your "Redirect From" would be `/about`.

Clicking the "Enable Regex" checkbox allows you to use regular expressions in your path. There are many [great tutorials](http://www.regular-expressions.info) on regular expressions.

You can also use wildcards in your "Redirect From" paths. By adding an `*` at the end of a URL, your redirect will match any request that starts with your "Redirect From". Wildcards support replacements. This means if you have a wildcard in your from path that matches a string, you can have that string replace a wildcard character in your "Redirect To" path. For example, if your "Redirect From" is `/test/*`, your "Redirect To" is `http://google.com/*`, and the requested path is `/test/string`, the user would be redirect to `http://google.com/string`.

=== "Redirect To" ===

This should be a path (i.e. `/test`) or a URL (i.e. `http://example.com/wp/test`). If a requested path matches "Redirect From", they will be redirected here. "Redirect To" supports wildcard and regular expression replacements.

=== "HTTP Status Code" ===

[HTTP status codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) are numbers that contain information about a request (i.e. whether it was successful, unauthorized, not found, etc). You should almost always use either 302 (temporarily moved) or 301 (permanently moved).

*Note:*

* Redirects are cached using the Transients API. Cache busts occur when redirects are added, updated, and deleted so you shouldn't be serving stale redirects.
* By default the plugin only allows at most 1000 redirects to prevent performance issues. There is a filter `srm_max_redirects` that you can utilize to up this number.
* "Redirect From" and requested paths are case insensitive by default.
* Developers can use `srm_additional_status_codes` filter to add status codes if needed.
* Rules set with 403 and 410 status codes are handled by applying the HTTP status code and render the default WordPress `wp_die` screen with an optional message.
* Rules set with a 404 status code will apply the status code and render the 404 template.
* Browsers heavily cache 301 (permanently moved) redirects. It's recommended to test your permanent redirects using the 302 (temporarily moved) status code before changing them to 301 permanently moved.

=== Developer Documentation ===

Safe Redirect Manager includes a number of actions and filters developers can make use of. These are documented on the [Safe Redirect Manager developer documentation](http://10up.github.io/safe-redirect-manager/) micro-site.

== Screenshots ==

1. List of Redirect rules under Tools > Safe Redirect Manager
2. Edit view of a Redirect rule
3. Bulk Edit view of multiple Redirect rules
4. Bulk Edit to enable Force HTTPs

== Changelog ==

= 2.2.0 - 2024-09-19 =

* **Added:** Option to Quick Edit and Bulk Edit redirect's https status and force https meta (props [@dhanendran](https://github.com/dhanendran), [@ravinderk](https://github.com/ravinderk), [@faisal-alvi](https://github.com/faisal-alvi), [@dkotter](https://github.com/dkotter), [@qasumitbagthariya](https://github.com/qasumitbagthariya), [@mehul0810](https://github.com/mehul0810), [@espellcaste](https://github.com/espellcaste) via [#350](https://github.com/10up/safe-redirect-manager/pull/350)).
* **Added:** Screenshots for WP.org plugin page (props [@faisal-alvi](https://github.com/faisal-alvi), [@jeffpaul](https://github.com/jeffpaul), [@iamdharmesh](https://github.com/iamdharmesh) via [#394](https://github.com/10up/safe-redirect-manager/pull/394)).
* **Changed:** Bump WordPress "tested up to" version 6.6 (props [@ankitguptaindia](https://github.com/ankitguptaindia), [@sudip-md](https://github.com/sudip-md) via [#386](https://github.com/10up/safe-redirect-manager/pull/386)).
* **Changed:** Bump WordPress minimum supported version from 6.3 to 6.4 (props [@ankitguptaindia](https://github.com/ankitguptaindia), [@sudip-md](https://github.com/sudip-md) via [#386](https://github.com/10up/safe-redirect-manager/pull/386)).
* **Changed:** Update documentation (props [@szepeviktor](https://github.com/szepeviktor), [@jeffpaul](https://github.com/jeffpaul), [@iamdharmesh](https://github.com/iamdharmesh), [@dkotter](https://github.com/dkotter) via [#384](https://github.com/10up/safe-redirect-manager/pull/384), [#388](https://github.com/10up/safe-redirect-manager/pull/388), [#391](https://github.com/10up/safe-redirect-manager/pull/391)).
* **Fixed:** Allows use of full URLs as redirect targets when using absolute URLs (props [@benlk](https://github.com/benlk), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#395](https://github.com/10up/safe-redirect-manager/pull/395)).
* **Security:** Bump `braces` from 3.0.2 to 3.0.3 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#383](https://github.com/10up/safe-redirect-manager/pull/383)).
* **Security:** Bump `jsdoc` from 3.6.11 to 4.0.3 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#383](https://github.com/10up/safe-redirect-manager/pull/383)).

= 2.1.2 - 2024-06-19 =
* **Added:** Provide example for modifying the default redirect status code (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@jeffpaul](https://github.com/jeffpaul), [@JosVelasco](https://github.com/JosVelasco), [@dkotter](https://github.com/dkotter) via [#365](https://github.com/10up/safe-redirect-manager/pull/365)).
* **Added:** "Testing" section in the "CONTRIBUTING.md" file (props [@kmgalanakis](https://github.com/kmgalanakis), [@jeffpaul](https://github.com/jeffpaul) via [#379](https://github.com/10up/safe-redirect-manager/pull/379)).
* **Changed:** Improved reference to the postmeta table for better WordPress compatibility (props [@ogorzalka](https://github.com/ogorzalka), [@Sidsector9](https://github.com/Sidsector9) via [#361](https://github.com/10up/safe-redirect-manager/pull/361)).
* **Changed:** Clean up NPM dependencies and update node to v20 (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter) via [#363](https://github.com/10up/safe-redirect-manager/pull/363)).
* **Changed:** Warning message to error message after loops are detected (props [@aaemnnosttv](https://github.com/aaemnnosttv), [@Sidsector9](https://github.com/Sidsector9), [@BhargavBhandari90](https://github.com/BhargavBhandari90) via [#368](https://github.com/10up/safe-redirect-manager/pull/368)).
* **Changed:** Disabled auto sync pull requests with target branch (props [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul) via [#371](https://github.com/10up/safe-redirect-manager/pull/371)).
* **Changed:** Replaced [lee-dohm/no-response](https://github.com/lee-dohm/no-response) with [actions/stale](https://github.com/actions/stale) to help with closing no-response/stale issues (props [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#373](https://github.com/10up/safe-redirect-manager/pull/373)).
* **Changed:** Upgrade the `download-artifact` from v3 to v4 (props [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul) via [#372](https://github.com/10up/safe-redirect-manager/pull/372)).
* **Changed:** Bump WordPress "tested up to" version 6.5 (props [@sudip-md](https://github.com/sudip-md), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#376](https://github.com/10up/safe-redirect-manager/pull/376)).
* **Changed:** Bump WordPress minimum from 5.7 to 6.3 (props [@sudip-md](https://github.com/sudip-md), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#376](https://github.com/10up/safe-redirect-manager/pull/376)).
* **Changed:** URL validation check on "input" event for "Redirect From" field (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@BhargavBhandari90](https://github.com/BhargavBhandari90), [@Sidsector9](https://github.com/Sidsector9) via [#369](https://github.com/10up/safe-redirect-manager/pull/369)).
* **Fixed:** PHP warning when running the "wp safe-redirect-manager list" CLI command (props [@planetahuevo](https://github.com/planetahuevo), [@kmgalanakis](https://github.com/kmgalanakis), [@dkotter](https://github.com/dkotter) via [#378](https://github.com/10up/safe-redirect-manager/pull/378)).

= 2.1.1 - 2024-01-08 =
* **Added:** Support for the WordPress.org plugin preview (props [@dkotter](https://github.com/dkotter), [@jeffpaul](https://github.com/jeffpaul) via [#357](https://github.com/10up/safe-redirect-manager/pull/357)).
* **Added:** `phpcs:ignore` on the now safe `ini_set()` (props [@philipjohn](https://github.com/philipjohn), [@ravinderk](https://github.com/ravinderk) via [#355](https://github.com/10up/safe-redirect-manager/pull/355)).
* **Changed:** Bump `Cypress` from 13.0.0 to 13.1.0, `@10up/cypress-wp-utils` from 0.1.0 to 0.2.0, `@wordpress/env` from 5.3.0 to 8.7.0, `cypress-mochawesome-reporter` from 3.4.0 to 3.5.1 and `node-wp-i18n` from 1.2.5 to 1.2.7 (props [@iamdharmesh](https://github.com/iamdharmesh), [@ravinderk](https://github.com/ravinderk) via [#349](https://github.com/10up/safe-redirect-manager/pull/349)).
* **Changed:** Bump WordPress "tested up to" version 6.4 (props [@qasumitbagthariya](https://github.com/qasumitbagthariya), [@jeffpaul](https://github.com/jeffpaul) via [#353](https://github.com/10up/safe-redirect-manager/pull/353), [#354](https://github.com/10up/safe-redirect-manager/pull/354)).
* **Changed:** Validate and sanitize a superglobal before using it (props [@jspellman814](https://github.com/jspellman814), [@ravinderk](https://github.com/ravinderk) via [#356](https://github.com/10up/safe-redirect-manager/pull/356)).
* **Fixed:** Ensure text can be translated (props [@alexclassroom](https://github.com/alexclassroom), [@iamdharmesh](https://github.com/iamdharmesh) via [#351](https://github.com/10up/safe-redirect-manager/pull/351)).

= 2.1.0 - 2023-09-07 =
* **Added:** WP-CLI command `export` to export redirects into a CSV file. (props [@zamanq](https://github.com/zamanq), [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#299](https://github.com/10up/safe-redirect-manager/pull/299)).
* **Added:** Admin settings to set custom redirect protocol per route (props [@tlovett1](https://github.com/tlovett1), [@danielbachhuber](https://github.com/danielbachhuber), [@benoitchantre](https://github.com/benoitchantre), [@jayedul](https://github.com/jayedul), [@Sidsector9](https://github.com/Sidsector9) via [#301](https://github.com/10up/safe-redirect-manager/pull/301)).
* **Added:** Autocomplete to the "Redirect To" field (props [@tlovett1](https://github.com/tlovett1), [@bmarshall511](https://github.com/bmarshall511), [@ravinderk](https://github.com/ravinderk) via [#325](https://github.com/10up/safe-redirect-manager/pull/325)).
* **Added:** Allow existing import records to be updated instead of skipped (props [@retlehs](https://github.com/retlehs), [@bmarshall511](https://github.com/bmarshall511), [@dkotter](https://github.com/dkotter) via [#329](https://github.com/10up/safe-redirect-manager/pull/329)).
* **Added:** Check for minimum required PHP version before loading the plugin (props [@kmgalanakis](https://github.com/kmgalanakis), [@iamdharmesh](https://github.com/iamdharmesh), [@Sidsector9](https://github.com/Sidsector9), [@vikrampm1](https://github.com/vikrampm1), [@dkotter](https://github.com/dkotter) via [#340](https://github.com/10up/safe-redirect-manager/pull/340)).
* **Added:** Repo Automator GitHub Action (props [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul) via [#348](https://github.com/10up/safe-redirect-manager/pull/348)).
* **Changed:** Bump [Support Level](https://github.com/10up/safe-redirect-manager#support-level) from `Active` to `Stable` (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#303](https://github.com/10up/safe-redirect-manager/pull/303)).
* **Changed:** Bump WordPress "tested up to" version 6.3 (props [@github-actions](https://github.com/apps/github-actions), [@kmgalanakis](https://github.com/kmgalanakis), [@iamdharmesh](https://github.com/iamdharmesh) via [#339](https://github.com/10up/safe-redirect-manager/pull/339)).
* **Changed:** Reduced the number of queries in half by removing `post_status` property from redirects data (props [@tlovett1](https://github.com/tlovett1), [@pdclark](https://github.com/pdclark), [@mehul0810](https://github.com/mehul0810), [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter), [@nateconley](https://github.com/nateconley), [@sksaju](https://github.com/sksaju), [@ravinderk](https://github.com/ravinderk) via [#326](https://github.com/10up/safe-redirect-manager/pull/326)).
* **Changed:** Rule editor always shows raw redirect target (props [@tbenyon](https://github.com/tbenyon), [@jeffpaul](https://github.com/jeffpaul), [@trainoasis](https://github.com/trainoasis), [@jayedul](https://github.com/jayedul), [@dkotter](https://github.com/dkotter) via [#330](https://github.com/10up/safe-redirect-manager/pull/330), [#333](https://github.com/10up/safe-redirect-manager/pull/333)).
* **Changed:** Include links to redirects that cause redirect loops/chains in the warning (props [@joshbetz](https://github.com/joshbetz), [@tlovett1](https://github.com/tlovett1), [@Sidsector9](https://github.com/Sidsector9), [@ravinderk](https://github.com/ravinderk) via [#341](https://github.com/10up/safe-redirect-manager/pull/341)).
* **Changed:** Set the default value for the `srm_check_for_possible_redirect_loops` filter to `true` (props [@joshbetz](https://github.com/joshbetz), [@tlovett1](https://github.com/tlovett1), [@Sidsector9](https://github.com/Sidsector9), [@ravinderk](https://github.com/ravinderk) via [#341](https://github.com/10up/safe-redirect-manager/pull/341)).
* **Changed:** Added a back link to the admin notices when a post is saved or updated (props [@szepeviktor](https://github.com/szepeviktor), [@tlovett1](https://github.com/tlovett1), [@bmarshall511](https://github.com/bmarshall511), [@iamdharmesh](https://github.com/iamdharmesh) via [#328](https://github.com/10up/safe-redirect-manager/pull/328)).
* **Changed:** Missing Docblocks for filter hooks (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@jayedul](https://github.com/jayedul), [@dkotter](https://github.com/dkotter), [@faisal-alvi](https://github.com/faisal-alvi), [@iamdharmesh](https://github.com/iamdharmesh) via [#313](https://github.com/10up/safe-redirect-manager/pull/313)).
* **Fixed:** `auto_detect_line_endings` deprecation warning in PHP 8.1 and above (props [@dhewer](https://github.com/dhewer), [@jayedul](https://github.com/jayedul), [@Sidsector9](https://github.com/Sidsector9), [@ravinderk](https://github.com/ravinderk) via [#327](https://github.com/10up/safe-redirect-manager/pull/327)).
* **Fixed:** Only show public post types in the autocomplete "Redirect To" field (props [@ravinderk](https://github.com/ravinderk), [@bmarshall511](https://github.com/bmarshall511), [@dkotter](https://github.com/dkotter) via [#332](https://github.com/10up/safe-redirect-manager/pull/332)).
* **Fixed:** Slow performance during redirect chain/loop detection (props [@tlovett1](https://github.com/tlovett1), [@danielbachhuber](https://github.com/danielbachhuber), [@Sidsector9](https://github.com/Sidsector9), [@ravinderk](https://github.com/ravinderk), [@iamdharmesh](https://github.com/iamdharmesh) via [#336](https://github.com/10up/safe-redirect-manager/pull/336)).
* **Security:** Bump `semver` from 7.3.8 to 7.5.4 (props [@dependabot](https://github.com/apps/dependabot), [@dkotter](https://github.com/dkotter), [@Sidsector9](https://github.com/Sidsector9) via [#334](https://github.com/10up/safe-redirect-manager/pull/334), [#342](https://github.com/10up/safe-redirect-manager/pull/342)).
* **Security:** Bump `tough-cookie` from 2.5.0 to 4.1.3 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#337](https://github.com/10up/safe-redirect-manager/pull/337)).
* **Security:** Bump `@cypress/request` from 2.88.10 to 3.0.0 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi), [@ravinderk](https://github.com/ravinderk) via [#337](https://github.com/10up/safe-redirect-manager/pull/337), [#343](https://github.com/10up/safe-redirect-manager/pull/343)).
* **Security:** Bump `cypress` from 11.2.0 to 13.0.0 (props [@dependabot](https://github.com/apps/dependabot), [@ravinderk](https://github.com/ravinderk) via [#343](https://github.com/10up/safe-redirect-manager/pull/343)).

= Earlier versions =
For the changelog of earlier versions, please refer to [the changelog on github.com](https://github.com/10up/safe-redirect-manager/blob/develop/CHANGELOG.md).

== Upgrade Notice ==

= 2.2.0 =
This version bumps the WordPress minimum from 6.3 to 6.4.
