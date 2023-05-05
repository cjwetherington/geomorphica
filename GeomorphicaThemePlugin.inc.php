<?php

/**
 * @file plugins/themes/default/GeomorphicaThemePlugin.inc.php
 *
 * @class GeomorphicaThemePlugin
 *
 * @brief Default theme extension for Geomorphica journal
 */
import('lib.pkp.classes.plugins.ThemePlugin');

class GeomorphicaThemePlugin extends ThemePlugin {
	/**
	 * Initialize the theme's styles, scripts and hooks. This is only run for
	 * the currently active theme.
	 *
	 * @return null
	 */
	public function init() {
		$this->setParent('defaultthemeplugin');
                $this->addStyle('geomorphica-admin-style', 'styles/geomorphica-admin.css', array( 'contexts' => 'backend' ));
	}

	/**
	 * Get the display name of this plugin
	 * @return string
	 */
	function getDisplayName() {
		return 'Geomorphica';
	}

	/**
	 * Get the description of this plugin
	 * @return string
	 */
	function getDescription() {
		return 'A child of the Default theme providing custom backend styling for the Geomorphica journal.';
	}
}

?>
