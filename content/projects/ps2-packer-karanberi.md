---
name: ps2-packer
slug: ps2-packer-karanberi
summary: Create packed ELF files to run on the PS2
categories:
  - development
  - utilities
tags:
  - elf
  - packer
  - toolchain
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-2.0
homepage: null
source:
  provider: github
  repository: karanberi/ps2-packer
  repositoryId: '16420635'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2013-11-23T16:39:42Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-07T14:34:40.420Z'
automation:
  sync: true
  github:
    repoEtag: W/"1a7f2cc5ab2966ec22b66e439d6a6de5f9adc25cb859d0cea1d658ccffb23fff"
    releasesEtag: '"a8b72fc23874e1701b2920e2e37cd2ca4913fb4b114fa3cba3efba72e700fa11"'
discovery:
  method: 'fork-network:ps2dev/ps2-packer'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2-packer'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2-packer
  source: ps2dev/ps2-packer
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
