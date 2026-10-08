---
name: FreeDVDBoot
slug: freedvdboot-retromod98
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
  repository: RetroMod98/FreeDVDBoot
  repositoryId: '282375182'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-07-24T21:21:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-08T21:20:49.918Z'
automation:
  sync: true
  github:
    repoEtag: W/"e8792b8cbf589767256a1490637243d67a8f9276f2e5458abf34759227fa6373"
    releasesEtag: '"9d58babb9c0ebce4843e7fb6d1a98d7c2a114a7ab5d177718e3a0fa6f173a756"'
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
