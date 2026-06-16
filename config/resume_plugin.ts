import fs from 'fs';
import MarkdownIt from 'markdown-it';
import path from 'path';
import type { Plugin } from 'vite';

interface ResumeWithMarkdown {
  basics?: {
    summary?: string;
    summaryHtml?: string;
  };
  work?: {
    summary?: string;
    summaryHtml?: string;
  }[];
}

const markdown = new MarkdownIt({ html: false, linkify: true, typographer: true });
const moduleId = 'virtual:resume';
const resolvedModuleId = `\0${moduleId}`;

export const resumePlugin = (): Plugin => ({
  name: 'resume-markdown-plugin',
  resolveId(id: string) {
    if (id === moduleId) {
      return resolvedModuleId;
    }
  },
  load(id: string) {
    if (id !== resolvedModuleId) {
      return;
    }

    const filePath = path.resolve('./src/content/resume.json');
    this.addWatchFile(filePath);
    const src = fs.readFileSync(filePath, 'utf-8');

    const resume = JSON.parse(src) as ResumeWithMarkdown;

    if (resume.basics?.summary) {
      resume.basics.summaryHtml = markdown.render(resume.basics.summary);
    }

    resume.work?.forEach((work) => {
      if (work.summary) {
        work.summaryHtml = markdown.render(work.summary);
      }
    });

    return {
      code: `export default ${JSON.stringify(resume)};`,
      map: null,
    };
  },
});
