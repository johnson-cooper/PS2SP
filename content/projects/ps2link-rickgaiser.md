---
name: ps2link
slug: ps2link-rickgaiser
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
  repository: rickgaiser/ps2link
  repositoryId: '258877286'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-01T22:51:47Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2026-11-01T22:51:48Z'
  url: 'https://github.com/rickgaiser/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-04T22:41:57.907Z'
automation:
  sync: true
  github:
    repoEtag: W/"96f78c709f6e03a8f3c29eb393fc6ec8f8d823b072847708087fdc4c116a0089"
    releasesEtag: W/"20c9075e98bb5640116d0ac9f390736891de75df801c7d15f16976d08b0f177e"
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
