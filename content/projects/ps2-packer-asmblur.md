---
name: ps2-packer
slug: ps2-packer-asmblur
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
  repository: asmblur/ps2-packer
  repositoryId: '667252682'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-07-17T05:15:37Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-24T05:55:26.919Z'
automation:
  sync: true
  github:
    repoEtag: W/"d6dbea273fd92322a7a043f18fac4ca260bd8776c97896fbbf0338ae7e7b7ef1"
    releasesEtag: '"6651f0a326fe50ee327dca388d5c531714ef939da31569d651d528b162d31cc1"'
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
