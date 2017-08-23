import { configure } from '@storybook/react';
function loadStories() {
  ////Menu Item Component Reqs
  require('../src/index.css');
  require('../src/components/MenuItemComponent.story');
  require('../src/components/MenuItemComponent.story.css');

  ////Menu Component Reqs
  require('../src/components/MenuComponent.story');
  require('../src/components/MenuComponent.story.css');

  ////Table Component Reqs
  require('../src/components/OrderTableComponent.story');
  require('../src/components/OrderTableComponent.story.css');

  require('../src/components/OrderFormComponent.story');
  require('../src/components/OrderFormComponent.story.css');
  require('../src/components/NavComponent.story');
  require('../src/components/OrderPageLayout.story');
  require('../src/components/OrderPageLayout.story.css');
  require('../src/components/FooterComponent.story');
  // Require your stories here...
}
configure(loadStories, module);
