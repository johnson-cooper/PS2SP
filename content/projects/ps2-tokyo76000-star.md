---
name: PS2
slug: ps2-tokyo76000-star
summary: LI
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
homepage: 'https://www.bilibili.com/video/BV1ZjWt6BEm2'
source:
  provider: github
  repository: tokyo76000-star/PS2
  repositoryId: '1454653711'
repository:
  archived: false
  defaultBranch: 362053534-patch-1
  stars: 0
  forks: 0
  lastCommit: '2026-11-13T07:22:08Z'
latestRelease:
  tag: latest
  name: v1.2.9-Beta-6009-20e0e04
  publishedAt: '2026-11-13T07:22:09Z'
  url: 'https://github.com/tokyo76000-star/PS2/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-13T11:35:27.480Z'
automation:
  sync: true
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
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: 362053534/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
