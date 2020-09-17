// initialize
import Vue from 'vue';

// debouncing & component loading
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

Vue.config.productionTip = false;
Vue.config.performance = true;

// load all components
const requireComponent = require.context(
  // which directory?
  '@/components/',
  // look in subdirectories?
  true,
  // which files?
  /[\w-]+\.vue$/
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  // const fileNameOnly = fileName.split('/').pop()
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        .replace(/^\.\/(.*)\.\w+$/, '$1')
        .split('/')
        .pop()
    )
  );
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
