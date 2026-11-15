---
name: ps2-port-engine
slug: ps2-port-engine-gavinmcnair
summary: >-
  Toolchain and runtime for native PC ports of PlayStation 2 games: verified
  decompilation to C++, a native host (EE, IOP, SPU2, GS on Vulkan, VU), PC
  features. No game material included.
categories:
  - preservation
  - development
  - ports
  - games
  - runtimes
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: gavinmcnair/ps2-port-engine
  repositoryId: '1448160161'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-06T17:12:45Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-15T17:13:09.657Z'
automation:
  sync: true
  github:
    repoEtag: W/"b4a102e270ea17e719e55b4c45e5a706616bdbf9df2b44c184dc75f3c1491003"
    releasesEtag: '"26e929970cb0b6480ab8e1178c67baefe9e00d8c143ae6b8ec3191285ecfb0be"'
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      danielgomesvieira2000/ps2-port-engine
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: danielgomesvieira2000/ps2-port-engine
  source: danielgomesvieira2000/ps2-port-engine
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
