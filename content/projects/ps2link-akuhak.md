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
  lastSynchronized: '2026-10-31T12:31:05.395Z'
automation:
  sync: true
  github:
    repoEtag: W/"5f0b3fdcc8606b71af7c95d8b2bc7735ebae3bdac8c2592fe36d7bd36ee7490c"
    releasesEtag: W/"3fd9ee61332fd94c1540cfa0f5dba6639466a6a227e8c3723bde03c71823c3dc"
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
