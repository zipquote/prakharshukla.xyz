import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

import * as tabs from './tabs';
import * as typewriter from './typewriter';

export interface ExampleDefinition {
  template: SandpackPredefinedTemplate;
  files: SandpackFiles;
  activeFile?: string;
}

export const examples: Record<string, ExampleDefinition> = {
  'tabs/basic': {
    template: tabs.template,
    files: tabs.files,
    activeFile: tabs.activeFile,
  },
  'typewriter/basic': {
    template: typewriter.template,
    files: typewriter.files,
    activeFile: typewriter.activeFile,
  },
};

export function getExample(path: string): ExampleDefinition | null {
  return examples[path] ?? null;
}
