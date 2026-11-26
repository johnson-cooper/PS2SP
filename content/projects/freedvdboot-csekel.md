---
name: FreeDVDBoot
slug: freedvdboot-csekel
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
  repository: csekel/FreeDVDBoot
  repositoryId: '275509442'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 1
  lastCommit: '2020-06-27T23:04:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T23:54:11.888Z'
automation:
  sync: true
  github:
    repoEtag: W/"aed3fc9c90a58ea6901ef7863dace5a7ddc8cf774c597e0e8a71bdc9972c3f12"
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
hidden: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
