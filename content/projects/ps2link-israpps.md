---
name: ps2link
slug: ps2link-israpps
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
  repository: israpps/ps2link
  repositoryId: '485576434'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-09-18T17:38:25Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2023-06-26T23:53:18Z'
  url: 'https://github.com/israpps/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-20T17:05:45.053Z'
automation:
  sync: true
  github:
    repoEtag: W/"2b9bc5986ecb3e1654fe02e02d1737029dd1533467f7fbb89717e7fdecb6ad07"
    releasesEtag: W/"ceb9b1a450880b2a4bd8721858a929f66cd2a3bcbb79fef44684cbb4f8e97061"
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
