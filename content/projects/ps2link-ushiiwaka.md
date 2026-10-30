---
name: ps2link
slug: ps2link-ushiiwaka
summary: >-
  PlayStation 2 network bootloader that executes ELF binaries sent over TCP/IP
  from host development tools like ps2client.
categories:
  - networking
  - development
tags:
  - debugging
  - network
  - elf
  - fork
  - auto-discovered
features:
  - network
authors: []
license: null
homepage: null
source:
  provider: github
  repository: ushiiwaka/ps2link
  repositoryId: '92728027'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2017-02-26T11:46:11Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T01:01:11.530Z'
automation:
  sync: true
  github:
    repoEtag: W/"efbbfa98bffc0a3f7240a3d389ae3c864d3bb6b4b5817c030066b88002067da0"
    releasesEtag: '"80399694c75a8c644d0249a64c161ba58684a2b10dc101339d615790d812c8b6"'
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
