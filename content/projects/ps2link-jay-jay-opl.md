---
name: ps2link
slug: ps2link-jay-jay-opl
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
  repository: Jay-Jay-OPL/ps2link
  repositoryId: '40512351'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-07-22T12:09:14Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2021-07-22T12:09:14Z'
  url: 'https://github.com/Jay-Jay-OPL/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-07T14:34:46.871Z'
automation:
  sync: true
  github:
    repoEtag: W/"b9aaaf75c2a7680698d801019c2d64bc167b00ffa5402f055840390d597d7283"
    releasesEtag: W/"e1615da6467f2cd85684253b102a2fc50532486d3d8f43e8b04e98d11ece6477"
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
