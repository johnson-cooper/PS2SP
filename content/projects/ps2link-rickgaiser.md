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
  lastCommit: '2026-10-25T13:18:36Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2026-10-25T13:18:37Z'
  url: 'https://github.com/rickgaiser/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-25T22:34:55.960Z'
automation:
  sync: true
  github:
    repoEtag: W/"96642aecd17d5abf976a562c5cedf78802dd7a6482de8132d743fd926577ec98"
    releasesEtag: W/"7464b919f1e3482bf8508cfa84b2e47dd9bed9915bbd44aad6852ccd6e39a8e5"
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
