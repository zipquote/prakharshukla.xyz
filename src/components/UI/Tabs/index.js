import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
import TabPane from './TabPane';

export default function Tabs({ children, id = 'tab', activeId = 0, onChange }) {
  const tabs = children
    ? children.filter((child) => child.type.name === 'Tab')
    : [];
  const tabPanes = children
    ? children.filter((child) => child.type.name === 'TabPane')
    : [];
  return (
    <div role="tablist" id={id}>
      <div className="flex flex-row justify-items-start">
        {Children.map(tabs, (child, idx) => {
          const isActive = idx === Number(activeId);
          const tabProps = {
            role: 'tab',
            'tab-index': isActive ? 0 : -1,
            id: `tabs-${id}-tab-${idx}`,
            'aria-controls': `tabs-${id}-pane-${idx}`,
            'aria-selected': 'true',
          };
          const className = classNames('px-2 py-1 ', child.props.className, {
            active: isActive,
          });
          return cloneElement(child, {
            ...tabProps,
            className,
            onClick: () => {
              onChange(idx);
            },
          });
        })}
      </div>
      {Children.map(tabPanes, (child, idx) => {
        const isActive = idx === Number(activeId);
        const tabPaneProps = {
          role: 'tabpanel',
          'tab-index': isActive ? 0 : -1,
          id: `tabs-${id}-pane-${idx}`,
          'aria-labelledby': `tabs-${id}-tab-${idx}`,
        };
        const className = classNames('px-2 py-1 ', child.props.className, {
          active: isActive,
          hidden: !isActive,
        });
        return cloneElement(child, {
          ...tabPaneProps,
          className,
        });
      })}
    </div>
  );
}

Tabs.Tab = Tab;
Tabs.Pane = TabPane;
