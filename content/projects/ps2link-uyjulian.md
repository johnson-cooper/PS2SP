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
  lastSynchronized: '2026-11-16T20:31:22.896Z'
automation:
  sync: true
  github:
    repoEtag: W/"d86d1a7efd917b9fc6049fa2f9d88e064d51fff54a3eed86a44c3f213162fa35"
    releasesEtag: W/"e1bbc24d9e4bbebd30283bbdb9803640169ba33852123cfcd713a0598ab0bf4e"
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
