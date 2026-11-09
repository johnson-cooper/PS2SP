---
name: ps2-port-engine
slug: ps2-port-engine-nahshongraham97
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
  repository: nahshongraham97/ps2-port-engine
  repositoryId: '1431592598'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-23T19:40:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-09T06:30:20.234Z'
automation:
  sync: true
  github:
    repoEtag: W/"4073e9b535b64dfa150fdeb0efbe2125887299be1ba3bedfc62e63783f461d4b"
    releasesEtag: '"2fe2afac4e4c51d345b0b3b79c7fb7f05cfb2cad022de484e373ed5d4899b781"'
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
