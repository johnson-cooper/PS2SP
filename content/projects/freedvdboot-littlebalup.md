---
name: FreeDVDBoot
slug: freedvdboot-littlebalup
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
  repository: littlebalup/FreeDVDBoot
  repositoryId: '477300498'
repository:
  archived: false
  defaultBranch: master
  stars: 3
  forks: 0
  lastCommit: '2022-02-02T08:15:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T23:54:13.432Z'
automation:
  sync: true
  github:
    repoEtag: W/"2a969a48099d2d23d7fe74cf3f27dc282c177857def5dd16c0c9265febe919f0"
    releasesEtag: '"38251304133231cd81a0aff9f6f46a1ed6d7bdf0b0fe929f842024adff31e335"'
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
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
