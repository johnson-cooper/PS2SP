---
name: ps2link
slug: ps2link-fjtrujy
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
  repository: fjtrujy/ps2link
  repositoryId: '217171684'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-04-25T11:20:55Z'
latestRelease:
  tag: v0.0.3
  name: v0.0.3
  publishedAt: '2020-05-21T10:40:34Z'
  url: 'https://github.com/fjtrujy/ps2link/releases/tag/v0.0.3'
activity:
  lastSynchronized: '2026-10-09T02:11:03.888Z'
automation:
  sync: true
  github:
    repoEtag: W/"9d458095d36c7510aa541b256071870a7c34860a1b5362f90131718af3a9d6ec"
    releasesEtag: W/"66d24c11a3c668b663ca9cdd7a0125692ac2dca85fc7d25d0090b87ba8e3bdf1"
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
