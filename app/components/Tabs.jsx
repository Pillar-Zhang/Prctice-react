import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Tabss extends Component {
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
      Tabs.setUseDefaultStyles(true);
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={2}
      >
        <TabList>
          <Tab>FooFooFoo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>


        <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Tabss;