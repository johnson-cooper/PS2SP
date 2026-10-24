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
  lastSynchronized: '2026-10-24T14:34:53.055Z'
automation:
  sync: true
  github:
    repoEtag: W/"1f86f3cac3879eecdc63c6616b8b491b6574e788d50f760934a54446013eeb07"
    releasesEtag: W/"1b28ed68b28e0c01c09a31cfc2b103647058f5664babf88f588e3cb1bd8a4002"
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
