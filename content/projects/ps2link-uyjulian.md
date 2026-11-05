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
  lastSynchronized: '2026-11-05T20:42:07.204Z'
automation:
  sync: true
  github:
    repoEtag: W/"66603bf15694872bef75d1ed723bf15c4122ce6afe3178f04bf4b4948d1036ed"
    releasesEtag: W/"bbec7388c768779c55615b140b2f70495e1f9a952fc2e4226c5fb72c378b7bea"
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
