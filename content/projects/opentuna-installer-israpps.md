---
name: opentuna-installer
slug: opentuna-installer-israpps
summary: >-
  Automated installer for the OpenTuna exploit, enabling homebrew execution on
  PlayStation 2 Slim models incompatible with FreeMcBoot.
categories:
  - boot-tools
  - installers
tags:
  - opentuna
  - exploit
  - installer
  - fork
  - auto-discovered
features:
  - memory-card
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: israpps/opentuna-installer
  repositoryId: '431266478'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2022-04-07T16:08:49Z'
latestRelease:
  tag: latest
  name: Latest build
  publishedAt: '2022-04-07T16:08:50Z'
  url: 'https://github.com/israpps/opentuna-installer/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-07T10:10:38.174Z'
automation:
  sync: true
  github:
    repoEtag: W/"1fa42f59459076f1ead963456e004062cd9ecf24da2a896ee0805bc3e3f6fdbe"
    releasesEtag: W/"cf0cd9ee5f9ecd788b1a6d27782a856a27b2deb0c09b4904bf561970c9ecb874"
discovery:
  method: 'fork-network:ps2homebrew/opentuna-installer'
  confidence: 95
  evidence:
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/opentuna-installer'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/opentuna-installer
  source: ps2homebrew/opentuna-installer
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
