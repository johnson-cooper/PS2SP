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
  lastCommit: '2026-11-18T15:40:51Z'
latestRelease:
  tag: v0.0.3
  name: v0.0.3
  publishedAt: '2020-05-21T10:40:34Z'
  url: 'https://github.com/fjtrujy/ps2link/releases/tag/v0.0.3'
activity:
  lastSynchronized: '2026-11-21T02:16:17.944Z'
automation:
  sync: true
  github:
    repoEtag: W/"5314f8b9fc5a43e4b42f08e239a9a8d647daa924a4d3f35c2a25fe7a9a677ecc"
    releasesEtag: W/"a3358bf12aef7220a89b0fd55f790ece4106ef8c5c428cdc66626ea33c18f8a9"
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
