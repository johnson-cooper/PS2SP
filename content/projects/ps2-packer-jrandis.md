---
name: ps2-packer
slug: ps2-packer-jrandis
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
  repository: jrandis/ps2-packer
  repositoryId: '268334552'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-05-17T12:06:03Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-09T17:31:05.492Z'
automation:
  sync: true
  github:
    repoEtag: W/"a1e1711b06a5fcdeebfd5d1f70e13ccbb182e9dec99eabfc2218bb532c6ca954"
    releasesEtag: '"1b07a5f20096cf9b5a1d413c9a9567ef7d1120a01238e1a61c91dfa57f6d8b7a"'
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
