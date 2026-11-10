---
name: ps2-packer
slug: ps2-packer-clflush
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
  repository: clflush/ps2-packer
  repositoryId: '14239412'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2013-10-09T18:54:38Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-10T01:33:29.118Z'
automation:
  sync: true
  github:
    repoEtag: W/"9cf4316f154c22e6e6841d71634916d7554ec7f7777d8d175de94306e281f4e1"
    releasesEtag: '"d76f3e553c1dd5eef60eeb0d76793c9027541520aa34488ad60fccdc0acfeba2"'
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
