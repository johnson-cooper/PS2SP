---
name: ps2-packer
slug: ps2-packer-captincook
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
  repository: captincook/ps2-packer
  repositoryId: '56994778'
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
  lastSynchronized: '2026-11-09T06:30:18.371Z'
automation:
  sync: true
  github:
    repoEtag: W/"d1f8635eb1d58e3f593e17c835a3a724bb8b855edca1339a3f9b09f75f387774"
    releasesEtag: '"2fe2afac4e4c51d345b0b3b79c7fb7f05cfb2cad022de484e373ed5d4899b781"'
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
