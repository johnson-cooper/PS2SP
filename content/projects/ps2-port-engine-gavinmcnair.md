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
  lastSynchronized: '2026-11-21T17:33:43.629Z'
automation:
  sync: true
  github:
    repoEtag: W/"59fb9cb88f5a0e92484b4584f1c8893dee2f99c3545c54e69683c2c0ab2918ca"
    releasesEtag: '"f1943bfb5f2a778c0d86faa584621b1de8b68ad47697d957f92887d7d9717618"'
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
