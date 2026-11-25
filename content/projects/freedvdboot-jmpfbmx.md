---
name: FreeDVDBoot
slug: freedvdboot-jmpfbmx
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
  repository: jmpfbmx/FreeDVDBoot
  repositoryId: '275784927'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2020-06-29T01:39:59Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-25T22:33:17.996Z'
automation:
  sync: true
  github:
    repoEtag: W/"c47f47da4ec411417f647c74e7d6be0055fae8e64cbb19cd55b0b31457bb3741"
    releasesEtag: '"bd19fda27fbea3e90c592115e5e6a3616d7cd84491d4bee2ae1e97d97a4a32cf"'
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
