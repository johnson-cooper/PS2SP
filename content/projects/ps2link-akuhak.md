---
name: ps2link
slug: ps2link-akuhak
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
  repository: AKuHAK/ps2link
  repositoryId: '382689496'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-09-03T22:13:46Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2022-06-10T19:34:38Z'
  url: 'https://github.com/AKuHAK/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-05T12:23:03.849Z'
automation:
  sync: true
  github:
    repoEtag: W/"958be4245bf852ba2beae138386ac5e6efbb5da8913489ab3ddd65cb4fe29e36"
    releasesEtag: W/"43ac580580d3d15b8aa7b09a0375a4faa733d677c053baf46c78a34758a6ef42"
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
