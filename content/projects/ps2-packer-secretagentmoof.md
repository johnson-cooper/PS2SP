---
name: ps2-packer
slug: ps2-packer-secretagentmoof
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
  repository: secretagentmoof/ps2-packer
  repositoryId: '722392709'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-11-23T03:41:36Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-19T06:19:29.853Z'
automation:
  sync: true
  github:
    repoEtag: W/"f65e7c6f5f1c7f3cd2d69cc8c4af219a7116bc816a695397e6809967c6a5713b"
    releasesEtag: '"c41f8ef2abcf4ac436c6418f06bfdfbbbe9773c5e84850927ac7ee9bd5c00e46"'
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
