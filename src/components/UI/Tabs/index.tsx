import { Children, ReactNode, isValidElement, ReactElement } from 'react';
import { StyledTabs, StyledTab, StyledTabPane } from './styles';
import Tab from './Tab';
import TabPane from './TabPane';

interface ITabsProps {
  children: ReactNode;
  id?: string;
  activeId?: string | number;
  onChange: (idx: number) => void;
}

export default function Tabs({
  children,
  id = 'tab',
  activeId = 0,
  onChange,
}: ITabsProps) {
  const tabs = Children.toArray(children).filter(
    (child): child is ReactElement =>
      isValidElement(child) && child.type === Tab
  );
  const tabPanes = Children.toArray(children).filter(
    (child): child is ReactElement =>
      isValidElement(child) && child.type === TabPane
  );

  return (
    <StyledTabs role="tablist" id={id}>
      <div className="flex flex-row justify-items-start">
        {tabs.map((child: any, idx) => {
          const isActive = idx === Number(activeId);
          return (
            <StyledTab
              key={idx}
              role="tab"
              tab-index={isActive ? 0 : -1}
              id={`tabs-${id}-tab-${idx}`}
              aria-controls={`tabs-${id}-pane-${idx}`}
              aria-selected={isActive}
              className={isActive ? 'active' : ''}
              onClick={() => onChange(idx)}
            >
              {child.props.children}
            </StyledTab>
          );
        })}
      </div>
      {tabPanes.map((child: any, idx) => {
        const isActive = idx === Number(activeId);
        return (
          <StyledTabPane
            key={idx}
            role="tabpanel"
            tab-index={isActive ? 0 : -1}
            id={`tabs-${id}-pane-${idx}`}
            aria-labelledby={`tabs-${id}-tab-${idx}`}
            className={isActive ? '' : 'hidden'}
          >
            {child.props.children}
          </StyledTabPane>
        );
      })}
    </StyledTabs>
  );
}

Tabs.Tab = Tab;
Tabs.Pane = TabPane;
