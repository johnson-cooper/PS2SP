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
  lastSynchronized: '2026-11-25T22:34:57.052Z'
automation:
  sync: true
  github:
    repoEtag: W/"3af3e66811f1a43441363c318d69e43925384be7a7c44eafc9478d288abc9b55"
    releasesEtag: W/"4514dd0e0cc25b7a996461a9fdc0d77294c9169ad2d67cb5daa83961a5d3c74e"
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
