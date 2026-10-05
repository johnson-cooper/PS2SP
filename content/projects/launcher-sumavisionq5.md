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
  lastSynchronized: '2026-10-05T02:01:27.218Z'
automation:
  sync: true
  github:
    repoEtag: W/"9fa67ef7fe5f1f951064356b8fca7e7aff0086f94fcc78a4ade6220b986f2c86"
    releasesEtag: W/"afcbda5e128c1a50af411f61c04e86a5bf2c3850fe4282f555cacc0ee6439929"
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
