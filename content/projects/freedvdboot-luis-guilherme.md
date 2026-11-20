---
name: FreeDVDBoot
slug: freedvdboot-luis-guilherme
summary: PlayStation 2 DVD Player Exploit
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: luis-guilherme/FreeDVDBoot
  repositoryId: '275869397'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-09-24T10:20:25Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-20T03:15:59.318Z'
automation:
  sync: true
  github:
    repoEtag: W/"3ce7ed3d778dca0c3c1a6f2a63328063da6654a6969f53cbdcf1d586e4fcb58e"
    releasesEtag: '"04ae66d0652f8e32f85ee09b36048410b2b52f52a85660eea8f274a40dd5e3c9"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: dormant-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
