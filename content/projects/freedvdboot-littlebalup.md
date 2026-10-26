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
  lastSynchronized: '2026-10-26T23:53:53.891Z'
automation:
  sync: true
  github:
    repoEtag: W/"ae4db58fce0d13dd6f9dcc16325433c3166f42cfc6701afbce867ecc25a16344"
    releasesEtag: '"504ca22ff8123bd7805f73d3c3e9e41aa43de67ba6ae4002821d1e6a9f7aa914"'
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
