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
  lastCommit: '2026-10-06T15:01:01Z'
latestRelease:
  tag: v0.9.3
  name: v0.9.3
  publishedAt: '2025-06-30T17:12:30Z'
  url: 'https://github.com/362053534/Open-PS2-Loader/releases/tag/v0.9.3'
activity:
  lastSynchronized: '2026-10-06T15:13:14.660Z'
automation:
  sync: true
  github:
    repoEtag: W/"194e34e54ee074f16c69a7bbf42102172c149c812d5ad7abfbb853e174cfc238"
    releasesEtag: W/"dd87d0a27d79786830ed6bca8a9ee451135d6745ec35862e934dfa0cb95abe09"
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
