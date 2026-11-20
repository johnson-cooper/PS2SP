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
  lastCommit: '2026-11-17T02:36:30Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2026-11-17T02:36:32Z'
  url: 'https://github.com/uyjulian/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-20T20:21:33.437Z'
automation:
  sync: true
  github:
    repoEtag: W/"9f48e125588cba798f50311a1b29d2563cd1504d17e9a0993c38f8d9a0a19cf8"
    releasesEtag: W/"53e5ba509d289adec3d499b9359aa887c3afc9e5bcfd43c03bbd71d9b6db68fa"
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
