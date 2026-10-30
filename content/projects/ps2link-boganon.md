---
name: ps2link
slug: ps2link-boganon
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
  repository: BoGanon/ps2link
  repositoryId: '135785987'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2017-08-21T22:22:52Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T01:01:11.009Z'
automation:
  sync: true
  github:
    repoEtag: W/"fe71942dd990bc8443fcd099601d0269d4dc7ab8c068d8797fc198ef4f97184a"
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
