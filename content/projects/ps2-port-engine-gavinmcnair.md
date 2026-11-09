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
  lastSynchronized: '2026-11-09T17:31:06.096Z'
automation:
  sync: true
  github:
    repoEtag: W/"22ac53a936625e6e00144b4e6665bafc9ba0fefd67509aaa7a8c25d8ac83c705"
    releasesEtag: '"1b07a5f20096cf9b5a1d413c9a9567ef7d1120a01238e1a61c91dfa57f6d8b7a"'
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
