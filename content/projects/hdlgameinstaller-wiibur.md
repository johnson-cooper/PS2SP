---
name: HDLGameInstaller
slug: hdlgameinstaller-wiibur
summary: The HDLoader game installer
categories:
  - installers
  - loaders
tags:
  - hdd
  - hdloader
  - installer
  - fork
  - auto-discovered
features:
  - hdd
authors: []
license: null
homepage: null
source:
  provider: github
  repository: wiibur/HDLGameInstaller
  repositoryId: '1090791867'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2025-11-06T06:41:56Z'
latestRelease:
  tag: v1.0.1
  name: v1.0.1 - Improved Timeout Handling
  publishedAt: '2025-11-06T06:45:40Z'
  url: 'https://github.com/wiibur/HDLGameInstaller/releases/tag/v1.0.1'
activity:
  lastSynchronized: '2026-10-15T19:08:04.913Z'
automation:
  sync: true
  github:
    repoEtag: W/"ada6d37c4e60e9b060b0b2417d418e155ae60696ad74662a9d8c1b3bb289b69e"
    releasesEtag: W/"d5f4a10865cb5f3448406288e55c42d9dd24be5591992bbc0c1103b21a7dda95"
discovery:
  method: 'fork-network:ps2homebrew/HDLGameInstaller'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/HDLGameInstaller'
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/HDLGameInstaller
  source: ps2homebrew/HDLGameInstaller
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
