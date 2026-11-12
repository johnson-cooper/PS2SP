---
name: ARMSX2-mainui
slug: armsx2-mainui-mainui-android
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: MainUI-Android/ARMSX2-mainui
  repositoryId: '1454347712'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-11T22:54:13Z'
latestRelease:
  tag: 2.9.3-mainui
  name: 2.9.3 (MainUI)
  publishedAt: '2026-11-11T22:47:40Z'
  url: 'https://github.com/MainUI-Android/ARMSX2-mainui/releases/tag/2.9.3-mainui'
activity:
  lastSynchronized: '2026-11-12T00:59:54.175Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
