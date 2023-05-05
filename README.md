# Geomorphica Child Theme Plugin

## Purpose
A very simple theme plugin that makes CSS styling available to the editorial interface for the
Geomorphica journal in order to hide certain workflow options that could interfere with their 
review blinding processes.

## Dependencies
Requires and extends OJS' Default theme.

## Installing
- Place folder in the site's `plugins/themes` subfolder and set appropriate permissions.  
- Run `php lib/pkp/tools/installPluginVersion.php plugins/themes/geomorphica/version.xml` from 
the root OJS folder to fully register the plugin.
- Enable the plugin via Website > Plugins > Installed Plugins.
- Activate the theme via the dropdown at Website > Appearance > Theme.
