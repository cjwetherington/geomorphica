<?php

/**
 * @file plugins/themes/default/GeomorphicaThemePlugin.inc.php
 *
 * @class GeomorphicaThemePlugin
 * @ingroup plugins_themes_default
 *
 * @brief Default theme
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
                $this->addStyle('my-custom-style', 'styles/geomorphica-admin.css', array( 'contexts' => 'backend' ));
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
		return 'Child of Default theme providing custom backend styling for Geomorphica journal.';
	}
}

?>
