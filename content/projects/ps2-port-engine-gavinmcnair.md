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
  lastCommit: '2026-11-17T22:37:01Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-24T17:47:14.721Z'
automation:
  sync: true
  github:
    repoEtag: W/"743eac3fec5ea4f6703f416dece6a4d4aa96049f923df95165adc98892ab1296"
    releasesEtag: '"5ac5c7b45b819dfd7b86689a99c92eb57767a2a65c23758534a6505685e4576b"'
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
