---
name: ps2-packer
slug: ps2-packer-cyphercg
summary: Create packed ELF files to run on the PS2
categories:
  - sdks
  - development
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
  repository: CypherCG/ps2-packer
  repositoryId: '239386131'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-02-08T01:24:20Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-02T15:50:43.217Z'
automation:
  sync: true
  github:
    repoEtag: W/"5a36c79069af98f715019f3136ccfe4bec506fbe2a1c238357efb00c178f749d"
    releasesEtag: '"96dbaa5a1ba612f09046f88e261ca7c71987d08e38ee07d6c4ea67437dfe4656"'
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
