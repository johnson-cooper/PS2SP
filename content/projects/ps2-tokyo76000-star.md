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
  lastCommit: '2026-11-15T09:57:53Z'
latestRelease:
  tag: latest
  name: v1.2.9-Beta-6014-6387160
  publishedAt: '2026-11-15T09:57:54Z'
  url: 'https://github.com/tokyo76000-star/PS2/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-23T00:55:31.865Z'
automation:
  sync: true
  github:
    repoEtag: W/"d6e1b43e0d09f5ae5af81233e81bd8dcf39c7aa872ecbf32ddc92a114fe6c053"
    releasesEtag: W/"5e9389e246953ccf39d376cada8b63a6063f012d22745a0af648a8df71d10be5"
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
