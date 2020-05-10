const path = require('path');
const { PluginManager } = require('live-plugin-manager');

(async () => {
    const pluginManager = new PluginManager();

    // Note! The same problem happens even if i install the package form NPM
    console.log('installing package..');
    await pluginManager.installFromPath(path.resolve('..', 'package'));

    const pkg = pluginManager.require('package');
    console.log('starting package..');
    pkg.start();
})();

