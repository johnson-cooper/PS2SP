---
name: launcHER
slug: launcher-sumavisionq5
summary: 'Launch ember from any device, on any device, from any program.'
categories:
  - launchers
  - boot-tools
tags:
  - launcher
  - ember
  - osdsys
  - ps2bbl
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - memory-card
authors: []
license: null
homepage: null
source:
  provider: github
  repository: SumavisionQ5/launcHER
  repositoryId: '1396406819'
repository:
  archived: false
  defaultBranch: EMBER
  stars: 0
  forks: 0
  lastCommit: '2026-09-29T19:18:22Z'
latestRelease:
  tag: nightly
  name: launcHER nightly
  publishedAt: '2026-09-29T19:18:23Z'
  url: 'https://github.com/SumavisionQ5/launcHER/releases/tag/nightly'
activity:
  lastSynchronized: '2026-11-07T02:49:01.840Z'
automation:
  sync: true
  github:
    repoEtag: W/"e4e66bf737b4ac4c503f2ef13d739c1d195dde5df4b34102965c9bed68ca774a"
    releasesEtag: W/"5cb5b1cc4d11558e1732719bbb94bdb65c9ceb864dc1cf031bb596e2a7393def"
discovery:
  method: 'fork-network:NathanNeurotic/launcHER'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - README identifies PS2 homebrew
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: pcm720/OSDMenu'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: NathanNeurotic/launcHER
  source: pcm720/OSDMenu
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
