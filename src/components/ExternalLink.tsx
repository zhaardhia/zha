import React from "react";
import { Icon } from '@iconify/react';

interface ExternalLinksType {
  githubLink: string;
  openLink?: string;
}
const ExternalLinks: React.FC<ExternalLinksType> = ({ githubLink, openLink }) => {
  return (
    <span className="flex items-center">
      <a className="github-icon" href={githubLink}>
        <Icon icon="mdi:github" className="text-white text-2xl" />
      </a>
      {openLink && (
        <a className="open-icon" href={openLink}>
          <Icon icon="ion:open-outline" className="text-white text-2xl" />
        </a>
      )}
    </span>
  )
}

export default ExternalLinks
