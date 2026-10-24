---
name: ps2link
slug: ps2link-uyjulian
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
  repository: uyjulian/ps2link
  repositoryId: '69762500'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-13T15:20:20Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2026-05-13T15:20:22Z'
  url: 'https://github.com/uyjulian/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-24T20:51:10.270Z'
automation:
  sync: true
  github:
    repoEtag: W/"7c3db038c9dab690efbc3f52dbc51b280f2d784fbfe2058161e2bfeb0e437ddf"
    releasesEtag: W/"4fce5f0429b87edf005dc2c1840784354d64f6c90aa61432c5d7c30c1a43b5e8"
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
