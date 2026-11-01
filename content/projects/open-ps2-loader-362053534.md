---
name: Open-PS2-Loader
slug: open-ps2-loader-362053534
summary: OPL-中文列表强化版 by峰哥
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://bbs.a9vg.com/thread-9027434-1-1.html'
source:
  provider: github
  repository: 362053534/Open-PS2-Loader
  repositoryId: '951689815'
repository:
  archived: false
  defaultBranch: 362053534-patch-1
  stars: 14
  forks: 4
  lastCommit: '2026-11-01T12:15:09Z'
latestRelease:
  tag: v0.9.3
  name: v0.9.3
  publishedAt: '2025-06-30T17:12:30Z'
  url: 'https://github.com/362053534/Open-PS2-Loader/releases/tag/v0.9.3'
activity:
  lastSynchronized: '2026-11-01T15:10:03.839Z'
automation:
  sync: true
  github:
    repoEtag: W/"a0a50f104f59e963fa68d0333150dc04c09dd6fc0178683bccd64c42b0bc7b6d"
    releasesEtag: W/"418e83c7af61e066edacab78e55e31234eda80141c73457f4ce0bf45d0ae1a47"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
