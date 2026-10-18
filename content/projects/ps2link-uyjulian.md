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
  lastSynchronized: '2026-10-18T20:44:44.871Z'
automation:
  sync: true
  github:
    repoEtag: W/"66c8b3eb8e65b5f36eafbdd7b234a381eb47c614aa122745684b78e97e2500a3"
    releasesEtag: W/"57bb6d715dc4870bce5f0723737d98ee318bb0dd6dc492c5702fd71b0fa1124c"
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
