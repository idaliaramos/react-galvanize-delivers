import { configure } from '@storybook/react';
function loadStories() {
  ////Menu Item Component Reqs
  require('../src/index.css');
  require('../src/components/MenuItemComponent.story');

  ////Menu Component Reqs
  require('../src/components/MenuComponent.story');
  require('../src/components/MenuComponent.story.css');

  ////Table Component Reqs
  require('../src/components/OrderTableComponent.story');
  require('../src/components/OrderTableComponent.story.css');

  require('../src/components/OrderFormComponent.story');
  require('../src/components/OrderFormComponent.story.css');
  require('../src/components/NavComponent.story');
  require('../src/components/OrderPageLayoutComponent.story');
  require('../src/components/OrderPageLayoutComponent.story.css');
  // Require your stories here...
}
configure(loadStories, module);
