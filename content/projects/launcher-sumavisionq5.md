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
  lastSynchronized: '2026-11-12T02:59:49.805Z'
automation:
  sync: true
  github:
    repoEtag: W/"3cd02f8ee2b9dd9eab8b101bd91703561c69705b10540ac9a7fc8ddddcaa2c5c"
    releasesEtag: W/"e9d2a735650891a3ffa47e1dcbe1af6d664796a1439f16a8428c50d1e90090fa"
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
