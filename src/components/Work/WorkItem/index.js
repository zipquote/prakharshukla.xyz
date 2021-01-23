import WorkItemCompact from './WorkItemCompact';
import WorkItemExpanded from './WorkItemExpanded';

export default function WorkItem({ children }) {
  return <>{children}</>;
}

WorkItem.Compact = WorkItemCompact;
WorkItem.Expanded = WorkItemExpanded;
